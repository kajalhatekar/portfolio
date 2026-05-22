import { FormEvent, useEffect, useRef, useState, type FC } from "react";

import { FiX } from "react-icons/fi";

import styles from "./AIChat.module.css";

type Props = {
  initialQuestion?: string;
  loading: boolean;
  onCancelEdit?: () => void;
  onSubmit: (question: string) => void;
};

export const AIChatInlineForm: FC<Props> = ({
  initialQuestion,
  loading,
  onCancelEdit,
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
    onCancelEdit?.();
  };

  const cancelEdit = () => {
    setDraft("");
    onCancelEdit?.();
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
        className={styles.sendButton}
        disabled={loading || !draft.trim()}
        type="submit"
      >
        Send
      </button>
      {isEditing && (
        <button
          aria-label="Cancel edit"
          className={styles.cancelButton}
          disabled={loading}
          onClick={cancelEdit}
          title="Cancel edit"
          type="button"
        >
          <FiX aria-hidden="true" />
        </button>
      )}
    </form>
  );
};
