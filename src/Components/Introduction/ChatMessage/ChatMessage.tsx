import { forwardRef, type Ref } from "react";

import classNames from "classnames";
import portrait from "assets/images/kajal-intro.png";

import { ChatMessageContent } from "./ChatMessageContent/ChatMessageContent";
import type { Message, Option } from "./messages.types";
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
};

const BaseChatMessage = (
  { animatedStyles, message, onResponse }: Props,
  ref: Ref<HTMLDivElement>,
) => (
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
        alt="Kajal Raj"
        className={classNames(styles.pictureImage, animatedStyles?.pictureImage)}
        src={portrait}
      />
    </div>
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

          <ChatMessageContent message={message} onResponse={onResponse} />
        </>
      )}
    </div>
  </div>
);

export const ChatMessage = forwardRef(BaseChatMessage);
