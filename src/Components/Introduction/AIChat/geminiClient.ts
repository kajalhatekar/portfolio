import type { AIChatMessage } from "./types";
import { getPortfolioContext } from "./portfolioKnowledge";

type GeminiPart = {
  text?: string;
};

type GeminiResponse = {
  candidates?: Array<{
    content?: {
      parts?: GeminiPart[];
    };
  }>;
  error?: {
    code?: number;
    message?: string;
    status?: string;
  };
};

const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;
const GEMINI_MODEL = process.env.REACT_APP_GEMINI_MODEL || "gemini-2.5-flash";
const GEMINI_FALLBACK_MODELS = (
  process.env.REACT_APP_GEMINI_FALLBACK_MODELS || ""
)
  .split(",")
  .map((model) => model.trim())
  .filter(Boolean);
const GEMINI_MODELS = Array.from(
  new Set([GEMINI_MODEL, ...GEMINI_FALLBACK_MODELS]),
);
const GEMINI_API_URL =
  process.env.REACT_APP_GEMINI_API_URL ||
  "https://generativelanguage.googleapis.com/v1beta";
const GEMINI_RETRY_COUNT = Number(process.env.REACT_APP_GEMINI_MAX_RETRIES);
const GEMINI_MAX_RETRIES = Number.isFinite(GEMINI_RETRY_COUNT)
  ? Math.max(0, Math.floor(GEMINI_RETRY_COUNT))
  : 2;
const GEMINI_BUSY_MESSAGE =
  "I'm getting a lot of requests right now, so I couldn't generate that answer. Please try again in a moment.";

const systemPrompt =
  "You are Kajal Raj's AI portfolio assistant. If you introduce yourself, say: \"Hi! I'm Kajal Raj's AI portfolio assistant. I can help you explore her projects, frontend skills, experience, and technical work. What would you like to know?\" Use the context notes below silently. Never mention where the information came from or describe the material you used. Answer visitor questions in a concise, friendly way and keep the focus on Kajal, her work, skills, projects, education, experience, tools, resume, and contact details. When the user asks with 'you' or 'your', answer naturally in first person as Kajal. Start directly with the answer, without headings. Do not invent personal details, links, numbers, employers, or technologies that are not in the context notes. If a detail is unavailable, say 'I do not have that detail here' and suggest using the contact section. If the user asks something unrelated to Kajal, briefly redirect them to questions about Kajal's work or skills.";

class GeminiRequestError extends Error {
  retryAfterMs?: number;
  transient: boolean;

  constructor(
    message: string,
    { retryAfterMs, transient }: { retryAfterMs?: number; transient: boolean },
  ) {
    super(message);
    this.name = "GeminiRequestError";
    this.retryAfterMs = retryAfterMs;
    this.transient = transient;
  }
}

const toGeminiRole = (role: AIChatMessage["role"]) =>
  role === "assistant" ? "model" : "user";

const extractGeminiText = (data: GeminiResponse) =>
  data.candidates?.[0]?.content?.parts
    ?.map((part) => part.text || "")
    .join("")
    .trim() || "";

const cleanGeminiText = (text: string) =>
  text
    .replace(
      /^(according to|based on|from|in)\s+(the\s+|her\s+|kajal(?: raj)?'?s\s+)?(portfolio|profile|resume|context|information|details|source|notes)\s*,?\s*/i,
      "",
    )
    .replace(/^the portfolio (says|shows|mentions|highlights) that\s+/i, "")
    .replace(/^kajal(?: raj)?\s+is\s+described\s+as\s+/i, "Kajal Raj is ")
    .replace(/^portfolio highlights:?\s*/i, "")
    .trim();

const isTransientGeminiIssue = (
  message = "",
  response?: Response,
  status?: string,
) => {
  const normalized = `${message} ${status || ""}`.toLowerCase();

  return (
    [408, 429, 500, 502, 503, 504].includes(response?.status || 0) ||
    /high demand|spikes in demand|temporarily unavailable|try again later|overloaded|overload|rate limit|too many requests|resource_exhausted|unavailable/.test(
      normalized,
    )
  );
};

const getRetryAfterMs = (response: Response) => {
  const retryAfter = response.headers.get("Retry-After");

  if (!retryAfter) return undefined;

  const seconds = Number(retryAfter);
  if (Number.isFinite(seconds)) return seconds * 1000;

  const retryDate = Date.parse(retryAfter);
  if (!Number.isNaN(retryDate)) return Math.max(retryDate - Date.now(), 0);

  return undefined;
};

const getRetryDelay = (attempt: number, retryAfterMs?: number) => {
  if (retryAfterMs !== undefined) return Math.min(retryAfterMs, 4000);

  const jitter = Math.floor(Math.random() * 250);
  return Math.min(600 * 2 ** attempt + jitter, 3000);
};

const wait = (delay: number) =>
  new Promise((resolve) => {
    window.setTimeout(resolve, delay);
  });

const requestGemini = async (model: string, body: string) => {
  const response = await fetch(
    `${GEMINI_API_URL}/models/${model}:generateContent`,
    {
      body,
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": GEMINI_API_KEY || "",
      },
      method: "POST",
    },
  );
  const data = (await response.json().catch(() => ({}))) as GeminiResponse;

  if (!response.ok) {
    const errorMessage =
      data.error?.message || "Gemini could not generate a response.";

    throw new GeminiRequestError(errorMessage, {
      retryAfterMs: getRetryAfterMs(response),
      transient: isTransientGeminiIssue(
        errorMessage,
        response,
        data.error?.status,
      ),
    });
  }

  const text = cleanGeminiText(extractGeminiText(data));

  if (isTransientGeminiIssue(text)) {
    throw new GeminiRequestError(GEMINI_BUSY_MESSAGE, {
      transient: true,
    });
  }

  if (!text) {
    throw new Error("Gemini returned an empty response.");
  }

  return text;
};

export const askGemini = async (
  messages: AIChatMessage[],
): Promise<string> => {
  if (!GEMINI_API_KEY) {
    throw new Error("Missing REACT_APP_GEMINI_API_KEY in your environment.");
  }

  const body = JSON.stringify({
    contents: messages.map((message) => ({
      parts: [{ text: message.content }],
      role: toGeminiRole(message.role),
    })),
    systemInstruction: {
      parts: [
        {
          text: `${systemPrompt}\n\nContext notes:\n${getPortfolioContext(
            messages,
          )}`,
        },
      ],
    },
  });
  let lastError: unknown;

  for (let modelIndex = 0; modelIndex < GEMINI_MODELS.length; modelIndex += 1) {
    const model = GEMINI_MODELS[modelIndex];

    for (let attempt = 0; attempt <= GEMINI_MAX_RETRIES; attempt += 1) {
      try {
        return await requestGemini(model, body);
      } catch (requestError) {
        lastError = requestError;

        if (
          !(requestError instanceof GeminiRequestError) ||
          !requestError.transient
        ) {
          throw requestError;
        }

        const hasRetryLeft = attempt < GEMINI_MAX_RETRIES;
        const hasFallbackModel = modelIndex < GEMINI_MODELS.length - 1;

        if (!hasRetryLeft && !hasFallbackModel) {
          throw new Error(GEMINI_BUSY_MESSAGE);
        }

        if (hasRetryLeft) {
          await wait(getRetryDelay(attempt, requestError.retryAfterMs));
        }
      }
    }
  }

  throw new Error(
    lastError instanceof Error ? lastError.message : GEMINI_BUSY_MESSAGE,
  );
};
