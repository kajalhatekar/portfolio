import { FormEvent, useEffect, useRef, useState, type FC } from "react";

import styles from "./AIChat.module.css";

type Props = {
  initialQuestion?: string;
  loading: boolean;
  onCancel: () => void;
  onSubmit: (question: string) => void;
};

export const AIChatInlineForm: FC<Props> = ({
  initialQuestion,
  loading,
  onCancel,
  onSubmit,
}) => {
  const [draft, setDraft] = useState(initialQuestion || "");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const isEditing = Boolean(initialQuestion);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (initialQuestion === undefined) return;

    setDraft(initialQuestion);
    inputRef.current?.focus();
  }, [initialQuestion]);

  const submitQuestion = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const question = draft.trim();
    if (!question || loading) return;

    onSubmit(question);
    setDraft("");
  };

  const cancelQuestion = () => {
    setDraft("");
    onCancel();
  };

  return (
    <form className={styles.inlineForm} onSubmit={submitQuestion}>
      <input
        aria-label="Ask Kajal's AI assistant a custom question"
        className={styles.input}
        disabled={loading}
        onChange={(event) => setDraft(event.target.value)}
        placeholder={isEditing ? "Edit your question..." : "Ask your own question..."}
        ref={inputRef}
        type="text"
        value={draft}
      />
      <button
        className={styles.cancelButton}
        disabled={loading}
        onClick={cancelQuestion}
        type="button"
      >
        Cancel
      </button>
      <button
        className={styles.sendButton}
        disabled={loading || !draft.trim()}
        type="submit"
      >
        Send
      </button>
    </form>
  );
};
