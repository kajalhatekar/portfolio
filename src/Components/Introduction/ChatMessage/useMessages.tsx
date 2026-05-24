import { useEffect, useRef, useState } from "react";

import { useInView } from "react-intersection-observer";

import type { Message, Option, TextMessage } from "./messages.types";
import { messageService } from "./messageService";

type Options = {
  onMessage?: () => void;
};

type Return = {
  isAILoading: boolean;
  isLiveChatOpen: boolean;
  messages: Message[];
  messagesInViewRef: (node: HTMLDivElement | null) => void;
  onCloseLiveChat: () => void;
  onEditQuestion: (messageId: string, question: string) => void;
  onLiveQuestion: (question: string) => void;
  onResponse: (option: Option) => void;
  onTypingComplete: (message: TextMessage) => void;
};

export const useMessages = ({ onMessage }: Options): Return => {
  const [isAILoading, setAILoading] = useState(messageService.aiLoading);
  const [isLiveChatOpen, setLiveChatOpen] = useState(
    messageService.liveChatOpen,
  );
  const [messages, setMessages] = useState<Message[]>([]);
  const [messagesInViewRef, messagesInView] = useInView();
  const onMessageRef = useRef(onMessage);

  useEffect(() => {
    onMessageRef.current = onMessage;
  }, [onMessage]);

  useEffect(() => {
    messageService.onMessage = (message) => {
      setMessages((currentMessages) => {
        if (currentMessages.find((msg) => msg.id === message.id)) {
          return currentMessages.map((msg) => {
            if (msg.id === message.id) return message;
            return msg;
          });
        }

        return [...currentMessages, message];
      });

      onMessageRef.current?.();
    };
    messageService.onMessages = (nextMessages) => {
      setMessages(nextMessages);
      onMessageRef.current?.();
    };
    messageService.onAIChatOpen = setLiveChatOpen;
    messageService.onAILoading = setAILoading;

    if (messagesInView) messageService.connect();
    else messageService.disconnect();

    return () => messageService.disconnect();
  }, [messagesInView]);

  return {
    isAILoading,
    isLiveChatOpen,
    messages,
    messagesInViewRef,
    onCloseLiveChat: messageService.closeLiveChat.bind(messageService),
    onEditQuestion: messageService.onEditQuestion.bind(messageService),
    onLiveQuestion: messageService.onLiveQuestion.bind(messageService),
    onResponse: messageService.onResponse.bind(messageService),
    onTypingComplete: messageService.onTypingComplete.bind(messageService),
  };
};
