import type { Message, OptionSelectMessage } from "./messages.types";

const incoming: Message[] = [
  {
    content: (
      <>
        I&apos;m <strong>Kajal Raj</strong>, here are some quick facts about me:
        <ul style={{ listStyle: "none", margin: 0, padding: "0 1em" }}>
          <li>{"\u{1F4BB}"} Frontend Developer</li>
          <li>{"\u269B\uFE0F"} React and TypeScript focused</li>
          <li>{"\u{1F3A8}"} I love polished UI and smooth interactions</li>
          <li>{"\u{1F680}"} I enjoy building responsive web experiences</li>
          <li>{"\u2728"} Always learning and improving the details</li>
        </ul>
      </>
    ),
    direction: "incoming",
    id: "1",
    status: "writing",
    type: "text",
  },
  {
    content: <>What would you like to know about me? Ask right away!</>,
    direction: "incoming",
    id: "2",
    status: "writing",
    type: "text",
  },
];

export const optionSelect: OptionSelectMessage = {
  content: [
    {
      action: "ask-ai",
      id: "career",
      label: "Tell me about your career",
      prompt: "Tell me about the career and frontend experience.",
    },
    {
      action: "ask-ai",
      id: "projects",
      label: "Which projects should I see?",
      prompt: "Which projects should a visitor look at and why?",
    },
    {
      action: "ask-ai",
      id: "skills",
      label: "What are your strongest skills?",
      prompt: "What are your strongest skills?",
    },
    {
      action: "open-live-chat",
      id: "live-ai-chat",
      label: "Live AI Chat",
    },
  ],
  direction: "outgoing",
  id: "option-select",
  status: "visible",
  type: "option-select",
};

export const end: Message = {
  content: (
    <>
      Well, that was a lovely conversation {"\u{1F929}"}
      <br />
      <br />
      If you want to know more, feel free to keep scrolling!
    </>
  ),
  direction: "incoming",
  id: "end",
  status: "writing",
  type: "text",
};

export const messages = [...incoming, optionSelect];
