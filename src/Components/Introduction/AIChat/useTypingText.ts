import { useEffect, useRef, useState } from "react";

export const useTypingText = (
  text: string,
  enabled = true,
  speedMs = 18,
  onComplete?: () => void,
) => {
  const [visibleText, setVisibleText] = useState(enabled ? "" : text);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    if (!enabled) {
      setVisibleText(text);
      onCompleteRef.current?.();
      return;
    }

    setVisibleText("");

    if (!text) {
      onCompleteRef.current?.();
      return;
    }

    let index = 0;
    const interval = window.setInterval(() => {
      index += 1;
      setVisibleText(text.slice(0, index));

      if (index >= text.length) {
        window.clearInterval(interval);
        onCompleteRef.current?.();
      }
    }, speedMs);

    return () => window.clearInterval(interval);
  }, [enabled, speedMs, text]);

  return visibleText;
};
