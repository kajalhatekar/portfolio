import {
  useCallback,
  useRef,
  useState,
  type ReactNode,
  type UIEvent,
} from "react";

import classNames from "classnames";

import { AIChatInlineForm } from "./AIChat/AIChatInlineForm";
import { AnimatedChatMessage } from "./ChatMessage/AnimatedChatMessage/AnimatedChatMessage";
import { ChatMessage } from "./ChatMessage/ChatMessage";
import type { TextMessage } from "./ChatMessage/messages.types";
import { useMessages } from "./ChatMessage/useMessages";
import { useIntroductionProgress } from "./useIntroductionProgress";

import styles from "./Introduction.module.css";

const VisuallyHidden = ({ children }: { children: ReactNode }) => (
  <div className={styles.visuallyHidden}>{children}</div>
);

type EditingQuestion = {
  content: string;
  id: string;
};

const Introduction = () => {
  const { scrollRef, setIntroductionRefs } = useIntroductionProgress();
  const [messagesScrollPosition, setMessagesScrollPosition] = useState<
    "bottom" | "mid-scroll" | "near-bottom" | "not-scrolling" | "top"
  >("not-scrolling");
  const messagesRef = useRef<HTMLDivElement | null>(null);
  const scrollTimeoutRef = useRef<number | null>(null);
  const [editingQuestion, setEditingQuestion] =
    useState<EditingQuestion | null>(null);

  const scrollBottom = useCallback((delay = 100) => {
    if (scrollTimeoutRef.current) {
      window.clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = window.setTimeout(() => {
      const messagesElement = messagesRef.current;

      if (!messagesElement) return;

      messagesElement.scrollTo({
        behavior: "smooth",
        top: messagesElement.scrollHeight,
      });
    }, delay);
  }, []);

  const onMessage = useCallback(() => {
    if (!messagesScrollPosition) return;
    scrollBottom();
  }, [messagesScrollPosition, scrollBottom]);
  const onTypingProgress = useCallback(() => {
    scrollBottom(0);
  }, [scrollBottom]);

  const {
    isAILoading,
    isLiveChatOpen,
    messages,
    messagesInViewRef,
    onCloseLiveChat,
    onEditQuestion,
    onLiveQuestion,
    onResponse,
    onTypingComplete,
  } = useMessages({ onMessage });

  const onEditMessage = useCallback(
    (message: TextMessage) => {
      if (typeof message.content !== "string") return;

      setEditingQuestion({
        content: message.content,
        id: message.id,
      });
      scrollBottom(0);
    },
    [scrollBottom],
  );

  const onSubmitLiveQuestion = useCallback(
    (question: string) => {
      if (editingQuestion) {
        onEditQuestion(editingQuestion.id, question);
      } else {
        onLiveQuestion(question);
      }

      setEditingQuestion(null);
      scrollBottom();
    },
    [editingQuestion, onEditQuestion, onLiveQuestion, scrollBottom],
  );

  const onCancelLiveQuestion = useCallback(() => {
    setEditingQuestion(null);

    if (!editingQuestion) {
      onCloseLiveChat();
    }
  }, [editingQuestion, onCloseLiveChat]);

  const setMessagesRefs = useCallback(
    (node: HTMLDivElement | null) => {
      messagesRef.current = node;
      messagesInViewRef(node);
    },
    [messagesInViewRef],
  );

  const scrollHandler = (event: UIEvent<HTMLDivElement>) => {
    const { offsetHeight, scrollHeight, scrollTop } = event.currentTarget;
    const scrollY = scrollTop + offsetHeight;

    if (scrollTop === 0) setMessagesScrollPosition("top");
    else if (scrollY === scrollHeight) setMessagesScrollPosition("bottom");
    else if (scrollY >= scrollHeight - 50)
      setMessagesScrollPosition("near-bottom");
    else setMessagesScrollPosition("mid-scroll");
  };

  return (
    <section className={styles.section} id="introduction">
      <VisuallyHidden>
        <h2>About Kajal Raj</h2>
      </VisuallyHidden>

      <div aria-hidden className={styles.signalLayer}>
        <span />
        <span />
        <span />
        <i />
        <i />
      </div>

      <div className={styles.scroll} ref={scrollRef}>
        <div
          className={classNames(styles.messages, styles.animatedMessage)}
          ref={setIntroductionRefs}
        >
          <AnimatedChatMessage>
            Hello there <span aria-hidden="true">👋</span>
          </AnimatedChatMessage>
        </div>
      </div>

      <div aria-hidden className={styles.anchor} id="about" />

      <div className={styles.messageListContainer}>
        <button
          className={styles.scrollButton}
          disabled={["bottom", "near-bottom", "not-scrolling"].includes(
            messagesScrollPosition,
          )}
          onClick={() => scrollBottom()}
          type="button"
        >
          <span aria-hidden="true">↓</span>
          Scroll to bottom
          <span aria-hidden="true">↓</span>
        </button>

        <div
          aria-label="Message list"
          aria-live="polite"
          className={classNames(styles.messages, styles.messageList)}
          data-scroll-position={messagesScrollPosition}
          onScroll={scrollHandler}
          ref={setMessagesRefs}
          role="region"
        >
          {messages
            .filter((message) => message.status !== "invisible")
            .map((message) => (
              <ChatMessage
                key={message.id}
                message={message}
                onEditMessage={onEditMessage}
                onResponse={onResponse}
                onTypingComplete={onTypingComplete}
                onTypingProgress={onTypingProgress}
              />
            ))}
        </div>

        {(isLiveChatOpen || editingQuestion !== null) && (
          <AIChatInlineForm
            initialQuestion={editingQuestion?.content}
            loading={isAILoading}
            onCancel={onCancelLiveQuestion}
            onSubmit={onSubmitLiveQuestion}
          />
        )}
      </div>
    </section>
  );
};

export default Introduction;
