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
    message?: string;
  };
};

const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;
const GEMINI_MODEL = process.env.REACT_APP_GEMINI_MODEL || "gemini-2.5-flash";
const GEMINI_API_URL =
  process.env.REACT_APP_GEMINI_API_URL ||
  "https://generativelanguage.googleapis.com/v1beta";

const systemPrompt =
  "You are Kajal Raj's AI portfolio assistant. If you introduce yourself, say: \"Hi! I'm Kajal Raj's AI portfolio assistant. I can help you explore her projects, frontend skills, experience, and technical work. What would you like to know?\" Use the context notes below silently. Never mention where the information came from or describe the material you used. Answer visitor questions in a concise, friendly way and keep the focus on Kajal, her work, skills, projects, education, experience, tools, resume, and contact details. When the user asks with 'you' or 'your', answer naturally in first person as Kajal. Start directly with the answer, without headings. Do not invent personal details, links, numbers, employers, or technologies that are not in the context notes. If a detail is unavailable, say 'I do not have that detail here' and suggest using the contact section. If the user asks something unrelated to Kajal, briefly redirect them to questions about Kajal's work or skills.";

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

export const askGemini = async (
  messages: AIChatMessage[],
): Promise<string> => {
  if (!GEMINI_API_KEY) {
    throw new Error("Missing REACT_APP_GEMINI_API_KEY in your environment.");
  }

  const response = await fetch(
    `${GEMINI_API_URL}/models/${GEMINI_MODEL}:generateContent`,
    {
      body: JSON.stringify({
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
      }),
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": GEMINI_API_KEY,
      },
      method: "POST",
    },
  );

  const data = (await response.json()) as GeminiResponse;

  if (!response.ok) {
    throw new Error(
      data.error?.message || "Gemini could not generate a response.",
    );
  }

  const text = cleanGeminiText(extractGeminiText(data));

  if (!text) {
    throw new Error("Gemini returned an empty response.");
  }

  return text;
};
