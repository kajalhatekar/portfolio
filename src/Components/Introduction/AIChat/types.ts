export type AIChatRole = "assistant" | "user";

export type AIChatMessage = {
  content: string;
  id: string;
  role: AIChatRole;
};
