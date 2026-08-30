import { forwardRef, useEffect, useState, type Ref } from "react";

import classNames from "classnames";
import portrait from "assets/images/kajal-intro.png";
import { FiCheck, FiCopy, FiEdit2 } from "react-icons/fi";

import { ChatMessageContent } from "./ChatMessageContent/ChatMessageContent";
import type { Message, Option, TextMessage } from "./messages.types";
import { MessageWritingAnimation } from "./MessageWritingAnimation/MessageWritingAnimation";

import styles from "./ChatMessage.module.css";

type Props = {
  animatedStyles?: {
    bubble: string;
    bubblePointer: string;
    container: string;
    picture: string;
    pictureArcFill: string;
    pictureArcStroke: string;
    pictureImage: string;
  };
  message: Message;
  onResponse: (option: Option) => void;
  onEditMessage?: (message: TextMessage) => void;
  onTypingComplete?: (message: TextMessage) => void;
  onTypingProgress?: () => void;
};

const copyMessageText = async (text: string) => {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return;
    }
  } catch {
    // Some browsers expose the clipboard API but block it outside HTTPS.
  }

  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
};

const BaseChatMessage = (
  {
    animatedStyles,
    message,
    onEditMessage,
    onResponse,
    onTypingComplete,
    onTypingProgress,
  }: Props,
  ref: Ref<HTMLDivElement>,
) => {
  const [copied, setCopied] = useState(false);
  const [completedTypedMessageId, setCompletedTypedMessageId] = useState<
    string | null
  >(null);
  const textContent =
    message.type === "text" && typeof message.content === "string"
      ? message.content
      : "";
  const canCopy = Boolean(textContent) && message.status === "visible";
  const canEdit = canCopy && message.direction === "outgoing";
  const isTypingText = message.type === "text" && message.shouldAnimateText;
  const canShowActions =
    canCopy && (!isTypingText || completedTypedMessageId === message.id);

  useEffect(() => {
    setCopied(false);
    setCompletedTypedMessageId(null);
  }, [message.id, message.status, textContent]);

  const onCopy = async () => {
    if (!textContent) return;

    await copyMessageText(textContent);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  };

  const onTextTypingComplete = (typedMessage: TextMessage) => {
    if (typedMessage.id === message.id) {
      setCompletedTypedMessageId(typedMessage.id);
    }

    onTypingComplete?.(typedMessage);
  };

  const bubbleElement = (
    <div className={classNames(styles.bubble, animatedStyles?.bubble)}>
      <div
        className={classNames(
          styles.bubblePointer,
          animatedStyles?.bubblePointer,
        )}
      />
      {message.status === "writing" ? (
        <MessageWritingAnimation />
      ) : (
        <>
          {message.direction === "incoming" && (
            <span className={styles.visuallyHidden}>Message from Kajal</span>
          )}
          {message.direction === "outgoing" &&
            message.type === "option-select" && (
              <span className={styles.visuallyHidden}>Select an option</span>
            )}

          <ChatMessageContent
            message={message}
            onResponse={onResponse}
            onTypingComplete={onTextTypingComplete}
            onTypingProgress={onTypingProgress}
          />
        </>
      )}
    </div>
  );

  const actionElement = canCopy && (
    <div
      className={classNames(styles.messageActions, {
        [styles.messageActionsReady]: canShowActions,
      })}
    >
      <button
        aria-label={copied ? "Copied" : "Copy message"}
        className={styles.actionButton}
        onClick={onCopy}
        title={copied ? "Copied" : "Copy message"}
        type="button"
      >
        {copied ? (
          <FiCheck aria-hidden="true" />
        ) : (
          <FiCopy aria-hidden="true" />
        )}
      </button>
      {canEdit && (
        <button
          aria-label="Edit question"
          className={styles.actionButton}
          onClick={() => message.type === "text" && onEditMessage?.(message)}
          title="Edit question"
          type="button"
        >
          <FiEdit2 aria-hidden="true" />
        </button>
      )}
    </div>
  );

  return (
    <div
      className={classNames(styles.container, animatedStyles?.container, {
        [styles.fadeIn]: !ref,
        [styles.outgoing]: message.direction === "outgoing",
      })}
      ref={ref}
    >
      <div className={classNames(styles.picture, animatedStyles?.picture)}>
        <svg className={styles.pictureArc} viewBox="-10 -10 205 132">
          <defs>
            <linearGradient id="introduction-gradient">
              <stop offset="5%" stopColor="var(--theme-secondary-bright)" />
              <stop offset="25%" stopColor="var(--theme-primary-bright)" />
            </linearGradient>
          </defs>
          <path
            className={classNames(
              styles.pictureArcStroke,
              animatedStyles?.pictureArcStroke,
            )}
            d="M -2.362 117.557 C -19.633 42.539 50.782 -23.043 124.384 -0.492 C 154.967 8.879 179.222 32.314 189.638 62.557"
          />
          <path
            className={classNames(
              styles.pictureArcFill,
              animatedStyles?.pictureArcFill,
            )}
            d="M -2.362 117.557 C -19.633 42.539 50.782 -23.043 124.384 -0.492 C 154.967 8.879 179.222 32.314 189.638 62.557"
          />
        </svg>
        <img
          alt="Kajal Hatekar"
          className={classNames(
            styles.pictureImage,
            animatedStyles?.pictureImage,
          )}
          src={portrait}
        />
      </div>
      {canCopy ? (
        <div className={styles.messageBody}>
          {bubbleElement}
          {actionElement}
        </div>
      ) : (
        bubbleElement
      )}
    </div>
  );
};

export const ChatMessage = forwardRef(BaseChatMessage);
