import type { AIChatMessage } from "./types";
import { getPortfolioContext } from "./portfolioKnowledge";

type GeminiResponse = {
  answer?: string;
  error?: string;
};

const GEMINI_FUNCTION_URL =
  process.env.REACT_APP_GEMINI_FUNCTION_URL || "/api/gemini";
const GEMINI_BUSY_MESSAGE =
  "I'm getting a lot of requests right now, so I couldn't generate that answer. Please try again in a moment.";
const LOCAL_FUNCTION_MISSING_MESSAGE =
  "The local AI endpoint is not running. Restart the site with npm start and open http://localhost:8888.";
const LOCAL_NETLIFY_FUNCTION_URL = "http://localhost:8888/api/gemini";

const systemPrompt =
  "You are Kajal Raj's AI portfolio assistant. If you introduce yourself, say: \"Hi! I'm Kajal Raj's AI portfolio assistant. I can help you explore her projects, frontend skills, experience, and technical work. What would you like to know?\" Use the context notes below silently. Never mention where the information came from or describe the material you used. Answer visitor questions in a concise, friendly way and keep the focus on Kajal, her work, skills, projects, education, experience, tools, resume, and contact details. Answer as an assistant speaking about Kajal, not as Kajal herself. If the user asks with 'you' or 'your', understand that they mean Kajal, but answer in third person using 'Kajal', 'she', and 'her'. Do not use 'I', 'me', or 'my' to refer to Kajal. Start directly with the answer, without headings. Do not invent personal details, links, numbers, employers, or technologies that are not in the context notes. If a detail is unavailable, say 'That detail is not available here' and suggest using the contact section. If the user asks something unrelated to Kajal, briefly redirect them to questions about Kajal's work or skills.";

const thirdPersonRewrites: Array<[RegExp, string]> = [
  [/\bI'm\b/gi, "Kajal is"],
  [/\bI am\b/gi, "Kajal is"],
  [/\bI've\b/gi, "Kajal has"],
  [/\bI have\b/gi, "Kajal has"],
  [/\bI know\b/gi, "Kajal knows"],
  [/\bI work\b/gi, "Kajal works"],
  [/\bI focus\b/gi, "Kajal focuses"],
  [/\bI build\b/gi, "Kajal builds"],
  [/\bI use\b/gi, "Kajal uses"],
  [/\bI enjoy\b/gi, "Kajal enjoys"],
  [/\bI love\b/gi, "Kajal loves"],
  [/\bI can\b/gi, "Kajal can"],
  [/\bmy\b/gi, "Kajal's"],
];

const cleanGeminiText = (text: string) =>
  thirdPersonRewrites
    .reduce((answer, [pattern, replacement]) => {
      if (/AI portfolio assistant/i.test(answer)) return answer;

      return answer.replace(pattern, replacement);
    }, text)
    .replace(
      /^(according to|based on|from|in)\s+(the\s+|her\s+|kajal(?: raj)?'?s\s+)?(portfolio|profile|resume|context|information|details|source|notes)\s*,?\s*/i,
      "",
    )
    .replace(/\bKajal knows\b([^.!?]*?)\band have\b/gi, "Kajal knows$1and has")
    .replace(/^the portfolio (says|shows|mentions|highlights) that\s+/i, "")
    .replace(/^kajal(?: raj)?\s+is\s+described\s+as\s+/i, "Kajal Raj is ")
    .replace(/^portfolio highlights:?\s*/i, "")
    .trim();

const isTransientGeminiIssue = (message = "", response?: Response) => {
  const normalized = message.toLowerCase();

  return (
    [408, 429, 500, 502, 503, 504].includes(response?.status || 0) ||
    /high demand|spikes in demand|temporarily unavailable|try again later|overloaded|overload|rate limit|too many requests|resource_exhausted|unavailable/.test(
      normalized,
    )
  );
};

const isLocalBrowser = () =>
  typeof window !== "undefined" &&
  ["localhost", "127.0.0.1"].includes(window.location.hostname);

const parseGeminiResponse = async (
  response: Response,
): Promise<GeminiResponse> => {
  const contentType = response.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    return (await response.json().catch(() => ({}))) as GeminiResponse;
  }

  await response.text().catch(() => "");

  return {
    error: isLocalBrowser()
      ? LOCAL_FUNCTION_MISSING_MESSAGE
      : "Gemini could not generate a response.",
  };
};

const getGeminiFunctionUrls = () => {
  if (process.env.REACT_APP_GEMINI_FUNCTION_URL) {
    return [process.env.REACT_APP_GEMINI_FUNCTION_URL];
  }

  if (
    isLocalBrowser() &&
    window.location.port === "3000" &&
    window.location.origin !== "http://localhost:8888"
  ) {
    return [LOCAL_NETLIFY_FUNCTION_URL, GEMINI_FUNCTION_URL];
  }

  return [GEMINI_FUNCTION_URL];
};

const requestGemini = async (
  messages: AIChatMessage[],
  functionUrl: string,
) => {
  const response = await fetch(functionUrl, {
    body: JSON.stringify({
      context: getPortfolioContext(messages),
      messages,
      systemPrompt,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
  const data = await parseGeminiResponse(response);

  if (!response.ok || (!data.answer && data.error)) {
    const errorMessage = data.error || "Gemini could not generate a response.";
    throw new Error(
      isTransientGeminiIssue(errorMessage, response)
        ? GEMINI_BUSY_MESSAGE
        : errorMessage,
    );
  }

  return data;
};

export const askGemini = async (
  messages: AIChatMessage[],
): Promise<string> => {
  let data: GeminiResponse = {};
  let lastError: unknown;

  for (const functionUrl of getGeminiFunctionUrls()) {
    try {
      data = await requestGemini(messages, functionUrl);
      lastError = undefined;
      break;
    } catch (error) {
      lastError = error;
    }
  }

  if (lastError) {
    throw lastError;
  }

  const text = cleanGeminiText(data.answer || "");

  if (isTransientGeminiIssue(text)) {
    throw new Error(GEMINI_BUSY_MESSAGE);
  }

  if (!text) {
    throw new Error("Gemini returned an empty response.");
  }

  return text;
};
