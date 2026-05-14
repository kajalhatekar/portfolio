import type { Message, OptionSelectMessage } from "./messages.types";

export const FAST_MODE_ID = "fast-mode";

const incoming: Message[] = [
  {
    content: (
      <>
        I&apos;m <strong>Kajal Raj</strong>, here are some quick facts about me:
        <ul style={{ listStyle: "none", margin: 0, padding: "0 1em" }}>
          <li>💻 Frontend Developer</li>
          <li>⚛️ React and TypeScript focused</li>
          <li>🎨 I love polished UI and smooth interactions</li>
          <li>🚀 I enjoy building responsive web experiences</li>
          <li>✨ Always learning and improving the details</li>
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
      id: "career",
      label: "Tell me about your career",
      responses: [
        {
          content: (
            <>
              I work as a frontend developer and enjoy turning ideas into clean,
              responsive interfaces.
            </>
          ),
          direction: "incoming",
          id: "career-1",
          status: "invisible",
          type: "text",
        },
        {
          content: (
            <>
              My main stack is <strong>React</strong>, <strong>TypeScript</strong>,
              Redux, styled-components, and modern UI tooling.
            </>
          ),
          direction: "incoming",
          id: "career-2",
          status: "invisible",
          type: "text",
        },
        {
          content: (
            <>
              I care about the little things: spacing, motion, contrast,
              responsiveness, and making the final screen feel intentional.
            </>
          ),
          direction: "incoming",
          id: "career-3",
          status: "invisible",
          type: "text",
        },
      ],
    },
    {
      id: "team",
      label: "Who are you in a team?",
      responses: [
        {
          content: (
            <>
              I am calm, curious, and detail focused. I like understanding the
              design goal before jumping into implementation.
            </>
          ),
          direction: "incoming",
          id: "team-1",
          status: "invisible",
          type: "text",
        },
        {
          content: (
            <>
              I enjoy collaborating, asking clear questions, and keeping code
              readable so the next person can work with it easily.
            </>
          ),
          direction: "incoming",
          id: "team-2",
          status: "invisible",
          type: "text",
        },
      ],
    },
    {
      id: "pronounce",
      label: "How do you pronounce your name?",
      responses: [
        {
          content: (
            <>
              <strong>Kajal</strong> is pronounced almost like{" "}
              <strong>
                <em>kaa-jal</em>
              </strong>
              .
              <br />
              <br />
              <strong>Raj</strong> is short and simple, like{" "}
              <strong>
                <em>raaj</em>
              </strong>
              .
            </>
          ),
          direction: "incoming",
          id: "pronounce-1",
          status: "invisible",
          type: "text",
        },
      ],
    },
    {
      id: "contact",
      label: "How can I contact you?",
      responses: [
        {
          content: (
            <>
              I&apos;m glad you asked 😄
              <br />
              <br />
              You can use the <strong><a href="#contact">Contact</a></strong>{" "}
              section below, or reach me through the email and LinkedIn icons in
              the navbar.
            </>
          ),
          direction: "incoming",
          id: "contact-1",
          status: "invisible",
          type: "text",
        },
      ],
    },
    {
      id: FAST_MODE_ID,
      label: "Can you please just type faster?",
      responses: [
        {
          content: (
            <>
              Absolutely!
              <br />
              <strong>
                <em style={{ fontSize: "0.8em" }}>*typing speed unlocked*</em>
              </strong>
            </>
          ),
          direction: "incoming",
          id: `${FAST_MODE_ID}-response`,
          status: "invisible",
          type: "text",
        },
      ],
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
      Well, that was a lovely conversation 🤩
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
