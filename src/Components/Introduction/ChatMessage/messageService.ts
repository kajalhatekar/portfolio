import { askGemini } from "../AIChat/geminiClient";
import type { AIChatMessage } from "../AIChat/types";
import { messages, optionSelect } from "./messages.const";
import type { Message, Option, OptionSelectMessage, TextMessage } from "./messages.types";

const MESSAGE_START_BASE_MS = 360;
const MESSAGE_START_VARIANCE_MS = 140;
const MESSAGE_WRITE_BASE_MS = 1550;
const MESSAGE_WRITE_VARIANCE_MS = 360;
const LIVE_CHAT_OPTION_ID = "live-ai-chat";

const createId = (prefix: string) =>
  `${prefix}-${Date.now().toString(36)}-${Math.random()
    .toString(36)
    .slice(2)}`;

class MessageService {
  aiHistory: AIChatMessage[] = [];
  aiLoading = false;
  connected = false;
  fastMode = false;
  liveChatOpen = false;
  selectedResponses: string[] = [];
  sentMessages: Message[] = [];
  timeouts: number[] = [];
  typingCompletedMessages = new Set<string>();

  connect() {
    if (this.connected) return;

    this.connected = true;
    this.resumeMessages();
  }

  disconnect() {
    if (!this.connected) return;

    this.connected = false;
    this.timeouts.forEach((timeout) => window.clearTimeout(timeout));
    this.timeouts = [];
  }

  finishMessage() {
    const writingMessage = this.sentMessages.find(
      (message) => message.status === "writing",
    );

    if (!writingMessage) return;

    const writingMessageStatus: Message = {
      ...writingMessage,
      status: "visible",
    };

    this.updateSentMessage(writingMessageStatus);
    this.onMessage(writingMessageStatus);
    this.queueSendNextMessage();
  }

  getTime(base: number, variance: number) {
    const varianceSignal = Math.random() < 0.5 ? 1 : -1;

    return (
      (base + varianceSignal * Math.random() * variance) /
      (this.fastMode ? 5 : 1)
    );
  }

  handleStale() {
    if (this.shouldResendOptionSelect()) this.queueResendOptionSelect();
  }

  onAIChatOpen(_isOpen: boolean) {}

  onAILoading(_loading: boolean) {}

  onMessage(_message: Message) {}

  onMessages(_messages: Message[]) {}

  onEditQuestion(messageId: string, question: string) {
    const trimmedQuestion = question.trim();
    if (!trimmedQuestion || this.aiLoading) return;

    this.editAIQuestion(messageId, trimmedQuestion);
  }

  onResponse(option: Option) {
    if (option.disabled || this.aiLoading) return;

    if (option.action === "open-live-chat") {
      this.openLiveChat();
      return;
    }

    if (option.action === "ask-ai") {
      this.selectedResponses.push(option.id);
      this.askAI(option.prompt || option.label, {
        displayQuestion: option.label,
        resendOptions: true,
      });
      return;
    }

    this.selectedResponses.push(option.id);
    this.sentMessages.push(...(option.responses || []));
    this.sendNextMessage();
  }

  onLiveQuestion(question: string) {
    if (!question.trim() || this.aiLoading) return;

    this.askAI(question.trim(), { resendOptions: false });
  }

  closeLiveChat() {
    this.liveChatOpen = false;
    this.selectedResponses = this.selectedResponses.filter(
      (responseId) => responseId !== LIVE_CHAT_OPTION_ID,
    );
    this.onAIChatOpen(false);
    this.resendOptionSelect();
  }

  onTypingComplete(message: TextMessage) {
    if (
      !message.resendOptionsOnTypingComplete ||
      this.typingCompletedMessages.has(message.id)
    ) {
      return;
    }

    this.typingCompletedMessages.add(message.id);
    this.queueResendOptionSelect();
  }

  openLiveChat() {
    if (this.liveChatOpen) {
      this.onAIChatOpen(true);
      return;
    }

    this.liveChatOpen = true;
    this.onAIChatOpen(true);

    const message: TextMessage = {
      content:
        "Hi! I'm Kajal Hatekar's AI portfolio assistant. I can help you explore her projects, frontend skills, experience, and technical work. What would you like to know?",
      direction: "incoming",
      id: createId("live-ai-ready"),
      shouldAnimateText: true,
      status: "visible",
      type: "text",
    };

    this.sentMessages.push(message);
    this.onMessage(message);
  }

  queueFinishMessage() {
    this.timeouts.push(
      window.setTimeout(
        () => this.finishMessage(),
        this.getTime(MESSAGE_WRITE_BASE_MS, MESSAGE_WRITE_VARIANCE_MS),
      ),
    );
  }

  queueResendOptionSelect() {
    this.timeouts.push(
      window.setTimeout(
        () => this.resendOptionSelect(),
        this.getTime(MESSAGE_START_BASE_MS, MESSAGE_START_VARIANCE_MS),
      ),
    );
  }

  queueSendNextMessage() {
    this.timeouts.push(
      window.setTimeout(
        () => this.sendNextMessage(),
        this.getTime(MESSAGE_START_BASE_MS, MESSAGE_START_VARIANCE_MS),
      ),
    );
  }

  resendOptionSelect() {
    if (this.liveChatOpen) return;

    const newOptionSelect: OptionSelectMessage = {
      ...optionSelect,
      content: optionSelect.content.map((option) => {
        if (!this.selectedResponses.includes(option.id)) return option;
        return { ...option, disabled: true };
      }),
      id: `${optionSelect.id}-${
        this.sentMessages.filter((message) => message.type === "option-select")
          .length + 1
      }`,
    };

    this.sentMessages.push(newOptionSelect);
    this.onMessage(newOptionSelect);
  }

  resumeMessages() {
    if (this.sentMessages.length === 0) {
      this.sendFirstMessage();
      return;
    }

    if (this.sentMessages.find((message) => message.status === "writing")) {
      this.queueFinishMessage();
      return;
    }

    this.queueSendNextMessage();
  }

  sendFirstMessage() {
    const firstMessage: Message = {
      ...messages[0],
      status: "writing",
    };

    this.sentMessages.push(firstMessage);
    this.onMessage(firstMessage);
    this.queueFinishMessage();
  }

  sendNextMessage() {
    const nextMessage =
      this.sentMessages.find((message) => message.status === "invisible") ||
      messages.find(
        (message) =>
          !this.sentMessages.some(
            (sentMessage) => sentMessage.id === message.id,
          ),
      );

    if (!nextMessage) {
      this.handleStale();
      return;
    }

    const isOutgoing = nextMessage.direction === "outgoing";
    const nextMessageStatus: Message = {
      ...nextMessage,
      status: isOutgoing ? "visible" : "writing",
    };

    if (nextMessage.status === "invisible") {
      this.updateSentMessage(nextMessageStatus);
    } else {
      this.sentMessages.push(nextMessageStatus);
    }

    this.onMessage(nextMessageStatus);

    if (isOutgoing) this.queueSendNextMessage();
    else this.queueFinishMessage();
  }

  shouldResendOptionSelect() {
    if (this.aiLoading || this.liveChatOpen) return false;
    if (this.sentMessages.every((message) => message.type !== "option-select")) {
      return false;
    }

    const lastSentMessage = this.sentMessages[this.sentMessages.length - 1];

    return lastSentMessage.type !== "option-select";
  }

  updateSentMessage(updated: Message) {
    this.sentMessages = this.sentMessages.map((sentMessage) => {
      if (sentMessage.id !== updated.id) return sentMessage;
      return updated;
    });
  }

  private async editAIQuestion(messageId: string, question: string) {
    const questionIndex = this.sentMessages.findIndex(
      (message) =>
        message.id === messageId &&
        message.type === "text" &&
        message.direction === "outgoing",
    );

    if (questionIndex === -1) {
      this.onLiveQuestion(question);
      return;
    }

    const userMessage = this.sentMessages[questionIndex] as TextMessage;
    const answerIndex = this.sentMessages.findIndex(
      (message, index) =>
        index > questionIndex &&
        message.type === "text" &&
        message.direction === "incoming",
    );
    const currentAnswer =
      answerIndex === -1
        ? undefined
        : (this.sentMessages[answerIndex] as TextMessage);
    const loadingMessage: TextMessage = currentAnswer
      ? {
          ...currentAnswer,
          content: "",
          shouldAnimateText: false,
          status: "writing",
        }
      : {
          content: "",
          direction: "incoming",
          id: createId("ai-answer"),
          status: "writing",
          type: "text",
        };
    const updatedUserMessage: TextMessage = {
      ...userMessage,
      content: question,
      status: "visible",
    };
    const historyQuestionIndex = this.aiHistory.findIndex(
      (message) => message.id === messageId,
    );
    const historyBeforeQuestion =
      historyQuestionIndex === -1
        ? this.aiHistory
        : this.aiHistory.slice(0, historyQuestionIndex);
    const nextHistory: AIChatMessage[] = [
      ...historyBeforeQuestion,
      {
        content: question,
        id: updatedUserMessage.id,
        role: "user",
      },
    ];

    this.aiLoading = true;
    this.onAILoading(true);
    this.typingCompletedMessages.delete(loadingMessage.id);

    this.sentMessages = [
      ...this.sentMessages.slice(0, questionIndex),
      updatedUserMessage,
      loadingMessage,
    ];
    this.onMessages(this.sentMessages);

    try {
      const answer = await askGemini(nextHistory);
      const answerMessage: TextMessage = {
        ...loadingMessage,
        content: answer,
        shouldAnimateText: true,
        status: "visible",
      };

      this.aiHistory = [
        ...nextHistory,
        {
          content: answer,
          id: answerMessage.id,
          role: "assistant",
        },
      ];
      this.updateSentMessage(answerMessage);
      this.onMessage(answerMessage);
    } catch (requestError) {
      const fallbackMessage =
        requestError instanceof Error
          ? requestError.message
          : "Something went wrong. Please try again.";
      const errorMessage: TextMessage = {
        ...loadingMessage,
        content: fallbackMessage,
        shouldAnimateText: true,
        status: "visible",
      };

      this.updateSentMessage(errorMessage);
      this.onMessage(errorMessage);
    } finally {
      this.aiLoading = false;
      this.onAILoading(false);
    }
  }

  private async askAI(
    question: string,
    {
      displayQuestion = question,
      resendOptions,
    }: { displayQuestion?: string; resendOptions: boolean },
  ) {
    const userMessage: TextMessage = {
      content: displayQuestion,
      direction: "outgoing",
      id: createId("ai-question"),
      status: "visible",
      type: "text",
    };
    const loadingMessage: TextMessage = {
      content: "",
      direction: "incoming",
      id: createId("ai-answer"),
      status: "writing",
      type: "text",
    };
    const nextHistory: AIChatMessage[] = [
      ...this.aiHistory,
      {
        content: question,
        id: userMessage.id,
        role: "user",
      },
    ];

    this.aiLoading = true;
    this.onAILoading(true);
    this.sentMessages.push(userMessage, loadingMessage);
    this.onMessage(userMessage);
    this.onMessage(loadingMessage);

    try {
      const answer = await askGemini(nextHistory);
      const answerMessage: TextMessage = {
        ...loadingMessage,
        content: answer,
        resendOptionsOnTypingComplete: resendOptions,
        shouldAnimateText: true,
        status: "visible",
      };

      this.aiHistory = [
        ...nextHistory,
        {
          content: answer,
          id: answerMessage.id,
          role: "assistant",
        },
      ];
      this.updateSentMessage(answerMessage);
      this.onMessage(answerMessage);
    } catch (requestError) {
      const fallbackMessage =
        requestError instanceof Error
          ? requestError.message
          : "Something went wrong. Please try again.";
      const errorMessage: TextMessage = {
        ...loadingMessage,
        content: fallbackMessage,
        resendOptionsOnTypingComplete: resendOptions,
        shouldAnimateText: true,
        status: "visible",
      };

      this.updateSentMessage(errorMessage);
      this.onMessage(errorMessage);
    } finally {
      this.aiLoading = false;
      this.onAILoading(false);
    }
  }
}

export const messageService = new MessageService();
