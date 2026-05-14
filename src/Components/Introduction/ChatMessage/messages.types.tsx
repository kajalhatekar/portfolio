import type { ReactNode } from "react";

export type Message = OptionSelectMessage | TextMessage;

export type Option = {
  disabled?: boolean;
  id: string;
  label: string;
  responses: Message[];
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
  status: "invisible" | "visible" | "writing";
};
