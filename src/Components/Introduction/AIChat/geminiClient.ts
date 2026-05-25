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

const systemPrompt =
  "You are Kajal Raj's AI portfolio assistant. If you introduce yourself, say: \"Hi! I'm Kajal Raj's AI portfolio assistant. I can help you explore her projects, frontend skills, experience, and technical work. What would you like to know?\" Use the context notes below silently. Never mention where the information came from or describe the material you used. Answer visitor questions in a concise, friendly way and keep the focus on Kajal, her work, skills, projects, education, experience, tools, resume, and contact details. When the user asks with 'you' or 'your', answer naturally in first person as Kajal. Start directly with the answer, without headings. Do not invent personal details, links, numbers, employers, or technologies that are not in the context notes. If a detail is unavailable, say 'I do not have that detail here' and suggest using the contact section. If the user asks something unrelated to Kajal, briefly redirect them to questions about Kajal's work or skills.";

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

const isTransientGeminiIssue = (message = "", response?: Response) => {
  const normalized = message.toLowerCase();

  return (
    [408, 429, 500, 502, 503, 504].includes(response?.status || 0) ||
    /high demand|spikes in demand|temporarily unavailable|try again later|overloaded|overload|rate limit|too many requests|resource_exhausted|unavailable/.test(
      normalized,
    )
  );
};

export const askGemini = async (
  messages: AIChatMessage[],
): Promise<string> => {
  const response = await fetch(GEMINI_FUNCTION_URL, {
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
  const data = (await response.json().catch(() => ({}))) as GeminiResponse;

  if (!response.ok) {
    const errorMessage = data.error || "Gemini could not generate a response.";
    throw new Error(
      isTransientGeminiIssue(errorMessage, response)
        ? GEMINI_BUSY_MESSAGE
        : errorMessage,
    );
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
