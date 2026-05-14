import type { FC } from "react";

import type { Message, Option } from "../messages.types";

import { OptionChatMessage } from "./OptionChatMessage/OptionChatMessage";
import { TextChatMessage } from "./TextChatMessage/TextChatMessage";

type Props = {
  message: Message;
  onResponse: (option: Option) => void;
};

export const ChatMessageContent: FC<Props> = ({ message, onResponse }) => {
  switch (message.type) {
    case "option-select":
      return <OptionChatMessage message={message} onResponse={onResponse} />;
    case "text":
      return <TextChatMessage message={message} />;
  }
};
