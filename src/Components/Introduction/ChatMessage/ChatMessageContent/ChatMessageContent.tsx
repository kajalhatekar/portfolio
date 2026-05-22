import type { FC } from "react";

import type { Message, Option, TextMessage } from "../messages.types";

import { OptionChatMessage } from "./OptionChatMessage/OptionChatMessage";
import { TextChatMessage } from "./TextChatMessage/TextChatMessage";

type Props = {
  message: Message;
  onResponse: (option: Option) => void;
  onTypingComplete?: (message: TextMessage) => void;
  onTypingProgress?: () => void;
};

export const ChatMessageContent: FC<Props> = ({
  message,
  onResponse,
  onTypingComplete,
  onTypingProgress,
}) => {
  switch (message.type) {
    case "option-select":
      return <OptionChatMessage message={message} onResponse={onResponse} />;
    case "text":
      return (
        <TextChatMessage
          message={message}
          onTypingComplete={onTypingComplete}
          onTypingProgress={onTypingProgress}
        />
      );
  }
};
