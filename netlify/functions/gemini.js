const DEFAULT_GEMINI_MODEL = ["gemini", "2.5", "flash"].join("-");
const DEFAULT_GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta";
const GEMINI_BUSY_MESSAGE =
  "I'm getting a lot of requests right now, so I couldn't generate that answer. Please try again in a moment.";

const jsonHeaders = {
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
};

const toResponse = (statusCode, body) => ({
  body: JSON.stringify(body),
  headers: jsonHeaders,
  statusCode,
});

const toGeminiRole = (role) => (role === "assistant" ? "model" : "user");

const extractGeminiText = (data) =>
  data.candidates?.[0]?.content?.parts
    ?.map((part) => part.text || "")
    .join("")
    .trim() || "";

const cleanGeminiText = (text) =>
  text
    .replace(
      /^(according to|based on|from|in)\s+(the\s+|her\s+|kajal(?: raj)?'?s\s+)?(portfolio|profile|resume|context|information|details|source|notes)\s*,?\s*/i,
      "",
    )
    .replace(/^the portfolio (says|shows|mentions|highlights) that\s+/i, "")
    .replace(/^kajal(?: raj)?\s+is\s+described\s+as\s+/i, "Kajal Hatekar is ")
    .replace(/^portfolio highlights:?\s*/i, "")
    .trim();

const isTransientGeminiIssue = (message = "", response, status) => {
  const normalized = `${message} ${status || ""}`.toLowerCase();

  return (
    [408, 429, 500, 502, 503, 504].includes(response?.status || 0) ||
    /high demand|spikes in demand|temporarily unavailable|try again later|overloaded|overload|rate limit|too many requests|resource_exhausted|unavailable/.test(
      normalized,
    )
  );
};

const getRetryAfterMs = (response) => {
  const retryAfter = response.headers.get("Retry-After");

  if (!retryAfter) return undefined;

  const seconds = Number(retryAfter);
  if (Number.isFinite(seconds)) return seconds * 1000;

  const retryDate = Date.parse(retryAfter);
  if (!Number.isNaN(retryDate)) return Math.max(retryDate - Date.now(), 0);

  return undefined;
};

const getRetryDelay = (attempt, retryAfterMs) => {
  if (retryAfterMs !== undefined) return Math.min(retryAfterMs, 4000);

  const jitter = Math.floor(Math.random() * 250);
  return Math.min(600 * 2 ** attempt + jitter, 3000);
};

const wait = (delay) =>
  new Promise((resolve) => {
    setTimeout(resolve, delay);
  });

const parseRequest = (event) => {
  const payload = JSON.parse(event.body || "{}");
  const messages = Array.isArray(payload.messages) ? payload.messages : [];
  const safeMessages = messages
    .filter(
      (message) =>
        message &&
        (message.role === "assistant" || message.role === "user") &&
        typeof message.content === "string",
    )
    .slice(-12)
    .map((message) => ({
      content: message.content.slice(0, 2000),
      role: message.role,
    }));

  return {
    context:
      typeof payload.context === "string" ? payload.context.slice(0, 12000) : "",
    messages: safeMessages,
    systemPrompt:
      typeof payload.systemPrompt === "string"
        ? payload.systemPrompt.slice(0, 4000)
        : "",
  };
};

const requestGemini = async ({ body, model }) => {
  const apiUrl = process.env.GEMINI_API_URL || DEFAULT_GEMINI_API_URL;
  const response = await fetch(`${apiUrl}/models/${model}:generateContent`, {
    body,
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": process.env.GEMINI_API_KEY || "",
    },
    method: "POST",
  });
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const errorMessage =
      data.error?.message || "Gemini could not generate a response.";
    const error = new Error(errorMessage);
    error.retryAfterMs = getRetryAfterMs(response);
    error.transient = isTransientGeminiIssue(
      errorMessage,
      response,
      data.error?.status,
    );
    throw error;
  }

  const answer = cleanGeminiText(extractGeminiText(data));

  if (isTransientGeminiIssue(answer)) {
    const error = new Error(GEMINI_BUSY_MESSAGE);
    error.transient = true;
    throw error;
  }

  if (!answer) {
    throw new Error("Gemini returned an empty response.");
  }

  return answer;
};

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return toResponse(204, {});
  }

  if (event.httpMethod !== "POST") {
    return toResponse(405, { error: "Method not allowed." });
  }

  if (!process.env.GEMINI_API_KEY) {
    return toResponse(500, {
      error: "Missing GEMINI_API_KEY on the server.",
    });
  }

  let payload;

  try {
    payload = parseRequest(event);
  } catch {
    return toResponse(400, { error: "Invalid request body." });
  }

  if (!payload.messages.length || !payload.systemPrompt || !payload.context) {
    return toResponse(400, { error: "Missing chat request data." });
  }

  const fallbackModels = (process.env.GEMINI_FALLBACK_MODELS || "")
    .split(",")
    .map((model) => model.trim())
    .filter(Boolean);
  const models = Array.from(
    new Set([process.env.GEMINI_MODEL || DEFAULT_GEMINI_MODEL, ...fallbackModels]),
  );
  const retryCount = Number(process.env.GEMINI_MAX_RETRIES);
  const maxRetries = Number.isFinite(retryCount)
    ? Math.max(0, Math.floor(retryCount))
    : 2;
  const body = JSON.stringify({
    contents: payload.messages.map((message) => ({
      parts: [{ text: message.content }],
      role: toGeminiRole(message.role),
    })),
    systemInstruction: {
      parts: [
        {
          text: `${payload.systemPrompt}\n\nContext notes:\n${payload.context}`,
        },
      ],
    },
  });
  let lastError;

  for (let modelIndex = 0; modelIndex < models.length; modelIndex += 1) {
    const model = models[modelIndex];

    for (let attempt = 0; attempt <= maxRetries; attempt += 1) {
      try {
        const answer = await requestGemini({ body, model });
        return toResponse(200, { answer });
      } catch (error) {
        lastError = error;

        if (!error.transient) {
          return toResponse(502, {
            error:
              error instanceof Error
                ? error.message
                : "Gemini could not generate a response.",
          });
        }

        const hasRetryLeft = attempt < maxRetries;
        const hasFallbackModel = modelIndex < models.length - 1;

        if (!hasRetryLeft && !hasFallbackModel) {
          return toResponse(503, { error: GEMINI_BUSY_MESSAGE });
        }

        if (hasRetryLeft) {
          await wait(getRetryDelay(attempt, error.retryAfterMs));
        }
      }
    }
  }

  return toResponse(503, {
    error: lastError instanceof Error ? lastError.message : GEMINI_BUSY_MESSAGE,
  });
};
