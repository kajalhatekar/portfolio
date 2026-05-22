import { useEffect, type FC } from "react";

import { useTypingText } from "Components/Introduction/AIChat/useTypingText";
import type { TextMessage } from "../../messages.types";

type Props = {
  message: TextMessage;
  onTypingComplete?: (message: TextMessage) => void;
  onTypingProgress?: () => void;
};

export const TextChatMessage: FC<Props> = ({
  message,
  onTypingComplete,
  onTypingProgress,
}) => {
  const textContent =
    typeof message.content === "string" ? message.content : "";
  const canAnimateText =
    message.shouldAnimateText && typeof message.content === "string";
  const typedText = useTypingText(
    canAnimateText ? textContent : "",
    Boolean(canAnimateText),
    14,
    canAnimateText ? () => onTypingComplete?.(message) : undefined,
  );

  useEffect(() => {
    if (canAnimateText) onTypingProgress?.();
  }, [canAnimateText, onTypingProgress, typedText]);

  if (canAnimateText) return <>{typedText}</>;

  return <>{message.content}</>;
};
