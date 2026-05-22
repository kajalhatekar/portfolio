import type { ReactNode } from "react";

export type Message = OptionSelectMessage | TextMessage;

export type Option = {
  action?: "ask-ai" | "open-live-chat" | "static";
  disabled?: boolean;
  id: string;
  label: string;
  prompt?: string;
  responses?: Message[];
};

export type OptionSelectMessage = BaseMessage & {
  content: Option[];
  type: "option-select";
};

export type TextMessage = BaseMessage & {
  content: ReactNode;
  type: "text";
};

type BaseMessage = {
  direction: "incoming" | "outgoing";
  id: string;
  resendOptionsOnTypingComplete?: boolean;
  shouldAnimateText?: boolean;
  status: "invisible" | "visible" | "writing";
};
