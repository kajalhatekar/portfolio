import { useState, type FC } from "react";

import type { Option, OptionSelectMessage } from "../../messages.types";

import styles from "./OptionChatMessage.module.css";

type Props = {
  message: OptionSelectMessage;
  onResponse: (option: Option) => void;
};

export const OptionChatMessage: FC<Props> = ({ message, onResponse }) => {
  const [responded, setResponded] = useState(false);

  return (
    <div className={styles.optionContainer} role="group">
      {message.content.map((option) => (
        <button
          className={styles.optionButton}
          disabled={responded || option.disabled}
          key={option.id}
          onClick={() => {
            onResponse(option);
            setResponded(true);
          }}
          type="button"
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};
