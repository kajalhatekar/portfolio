import HtmlIcon from "assets/svg/HtmlIcon";
import NextJsIcon from "assets/svg/NextJsIcon";
import MongoDB from "assets/svg/MongoDB";
import { type ReactElement } from "react";

export const skills: Skill[] = [
  {
    brief: (
      <>
        <span>
          Ever since I started using <strong>React</strong> in 2021, it’s been a
          game-changer for me. I love how its component-based structure keeps
          things modular and reusable, and the fact that it’s all JavaScript
          makes it feel natural and powerful.
        </span>
        <span>
          The ecosystem around React—tools, libraries, and community—just makes
          everything better. Building interactive, scalable UIs is where I
          thrive, and React is my tool of choice." 🛠️💡
        </span>
      </>
    ),
    colors: {
      contrast: {
        background: "#61dbfb",
        text: "black",
      },
      normal: {
        background: "#61dbfb",
        text: "#222222",
      },
      scrollBar: { trackColor: "#2e4f58" },
    },
    description: <></>,
    featured: true,
    icon(isContrastMode: boolean): ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            stroke={colors.background}
            strokeWidth={30}
            xlinkHref={`#${this.id}`}
          />
          <use fill={colors.text} xlinkHref={`#${this.id}`} />
        </svg>
      );
    },
    id: "react",
    name: "React",
    studying: true,
    usageLevel: 3,
    yearsExperience: 4,
  },
  {
    colors: {
      contrast: {
        background: "#d5470f",
        text: "white",
      },
      normal: {
        background: "#ef842d",
        text: "#f3f3f3",
      },
      scrollBar: { trackColor: "#ffd8bd" },
    },
    description: <></>,
    featured: false,
    icon(isContrastMode: boolean): ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            stroke={colors.background}
            strokeLinejoin="round"
            strokeWidth={30}
            xlinkHref={`#${this.id}`}
          />
          <HtmlIcon />
        </svg>
      );
    },
    id: "html",
    name: "HTML",
    studying: false,
    usageLevel: 3,
    yearsExperience: 5,
  },
  {
    colors: {
      contrast: {
        background: "#c0c0c0",
        text: "black",
      },
      normal: {
        background: "#c0c0c0",
        text: "#292e31",
      },
      scrollBar: { trackColor: "#4c4c4c" },
    },
    description: <></>,
    featured: false,
    icon(isContrastMode: boolean): ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            fill={colors.background}
            stroke={colors.background}
            strokeLinejoin="round"
            strokeWidth={100}
          />
          <NextJsIcon />
        </svg>
      );
    },
    id: "next",
    name: "Next Js",
    studying: false,
    usageLevel: 3,
    yearsExperience: 3,
  },
  {
    brief: (
      <>
        <span>
          <strong>CSS is not exactly easy</strong>. There are loads of concepts,
          properties, selectors, and functions to understand, animations and
          transitions to tinker with, responsive design to consider, and
          cross-browser compatibility to work around...
        </span>
        <span>... CSS isn’t just code—it’s my canvas!" 🎨✨</span>
      </>
    ),
    colors: {
      contrast: {
        background: "#1b73ba",
        text: "#ffffff",
      },
      normal: {
        background: "#1b73ba",
        text: "#ffffff",
      },
      scrollBar: { trackColor: "#5fbbd3" },
    },
    description: (
      <>
        <p>
          As a frontend developer,{" "}
          <strong>
            learning CSS is an essential part of mastering web development
          </strong>
          .
        </p>
        <p>
          I&apos;ve been improving my CSS skills for the best part of the last 2
          decades: I was there when we had to use <code>table</code>s to create
          layouts, when <em>tableless</em> was a thing, and when vertical
          aligning an element was close to impossible 🤣
        </p>
        <p>
          My journey learning CSS has been a continuous one. I like to keep
          myself up to date with new CSS features by reading the{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            rel="noopener noreferrer"
            target="_blank"
          >
            CSS MDN Docs
          </a>{" "}
          and{" "}
          <a
            href="https://web.dev/blog/"
            rel="noopener noreferrer"
            target="_blank"
          >
            web.dev&apos;s blog
          </a>{" "}
          every once in a while.
        </p>
        <p>
          Call me weird, but I have the habit of inspecting every website that
          makes me wonder{" "}
          <em>&ldquo;how would I implement something like that?&rdquo;</em> 🤔 —
          and I learned a lot doing that!
        </p>
        <p>
          I also like checking{" "}
          <a
            href="https://www.awwwards.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Awwwarded
          </a>{" "}
          websites for design inspiration, and implementing and tweaking
          animations and transitions — but you probably noticed this already 😅
        </p>
        <p>
          I do have experience configuring and using pre-processors like{" "}
          <a
            href="https://sass-lang.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            SASS
          </a>
          , but not so much with CSS frameworks like{" "}
          <a
            href="https://getbootstrap.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Bootstrap
          </a>{" "}
          or{" "}
          <a
            href="https://tailwindcss.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Tailwind
          </a>
          , and that&apos;s something I&apos;d like to fix soon 📖
        </p>
      </>
    ),
    featured: true,
    icon(isContrastMode: boolean): ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            fill={colors.background}
            stroke={colors.background}
            strokeWidth={10}
            xlinkHref={`#${this.id}-1`}
          />
          <use fill="#1c88c7" xlinkHref={`#${this.id}-2`} />
          <use fill={colors.text} xlinkHref={`#${this.id}-3`} />
        </svg>
      );
    },
    id: "css",
    name: "CSS",
    studying: true,
    usageLevel: 3,
    yearsExperience: 5,
  },
  {
    colors: {
      contrast: {
        background: "#a92709",
        text: "white",
      },
      normal: {
        background: "#f34f29",
        text: "#f3f3f3",
      },
      scrollBar: { trackColor: "#ffbdaf" },
    },
    description: <></>,
    featured: false,
    icon(isContrastMode: boolean): ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            fill={colors.background}
            stroke={colors.background}
            strokeWidth={10}
            xlinkHref={`#${this.id}-1`}
          />
          <use fill={colors.text} xlinkHref={`#${this.id}-2`} />
        </svg>
      );
    },
    id: "git",
    name: "Git",
    studying: false,
    usageLevel: 3,
    yearsExperience: 4,
  },
  {
    colors: {
      contrast: {
        background: "#795dbb",
        text: "white",
      },
      normal: {
        background: "#6e50b5",
        text: "#f3f3f3",
      },
      scrollBar: { trackColor: "#b0a0d7" },
    },
    description: (
      <>
        <p>
          I get it, I get it... Redux is not the cool kid in the block these
          days. But I believe{" "}
          <strong>it&apos;s still a notable state management library</strong>{" "}
          when used adequately. It has incredible tooling and a large community
          around it. Libraries like{" "}
          <a
            href="https://redux-toolkit.js.org"
            rel="noopener noreferrer"
            target="_blank"
          >
            Redux Toolkit
          </a>{" "}
          also help reduce boilerplate code, one of the main concerns devs seem
          to have with Redux.
        </p>
        <p>
          I&apos;ve got experience using Redux with <code>redux-thunk</code> and{" "}
          <code>redux-saga</code>. They&apos;ve been used mainly for API
          fetching, though, and, for that purpose, I&apos;d prefer using{" "}
          <code>react-query</code>, RTK Query, or <code>swr</code> nowadays
          instead.
        </p>
      </>
    ),
    featured: false,
    icon(isContrastMode: boolean): ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            stroke={colors.background}
            strokeWidth={30}
            xlinkHref={`#${this.id}`}
          />
          <use fill={colors.text} xlinkHref={`#${this.id}`} />
        </svg>
      );
    },
    id: "redux",
    name: "Redux",
    studying: false,
    usageLevel: 3,
    yearsExperience: 3.5,
  },
  {
    brief: (
      <>
        <span>
          <strong>JavaScript</strong> has been a key part of my journey as a
          developer. At that time, From manipulating the DOM to exploring modern
          features, Whether it’s vanilla JS or modern ES6+ features, I enjoy the
          flexibility and power it brings to development.
        </span>
        <span>
          I’m constantly learning and enjoying the process of building with JS."
          💻✨
        </span>
      </>
    ),
    colors: {
      contrast: {
        background: "#f7df1e",
        text: "black",
      },
      normal: {
        background: "#f7df1e",
        text: "#292e31",
      },
      scrollBar: { trackColor: "#645a0a" },
    },
    description: (
      <>
      </>
    ),
    featured: true,
    icon(isContrastMode: boolean): ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            stroke={colors.background}
            strokeLinejoin="round"
            strokeWidth={35}
            xlinkHref={`#${this.id}`}
          />
          <use fill={colors.text} xlinkHref={`#${this.id}`} />
        </svg>
      );
    },
    id: "javascript",
    name: "JavaScript",
    studying: true,
    usageLevel: 3,
    yearsExperience: 4,
  },
  {
    brief: (
      <>
        <span>
          <strong>TypeScript</strong> is one of those things that you might ask
          yourself: <em>&quot;why do I need that?&quot;</em> — but when you get
          used to it, you&apos;ll never look back.
        </span>
        <span>
          I&apos;ve been using <strong>TypeScript</strong> since 2022, and
          I&apos;ll add it to every project I start today, no matter how small
          it might be.
        </span>
      </>
    ),
    colors: {
      contrast: {
        background: "#005c9a",
        text: "white",
      },
      normal: {
        background: "#007acd",
        text: "#f3f3f3",
      },
      scrollBar: { trackColor: "#8dd1ff" },
    },
    description: (
      <>
        <p>
          To be honest, when I first heard about TypeScript, I did not get super
          hyped. My first experience with types in JavaScript was with Flow +
          AngularJS, and the lack of proper documentation made the whole
          experience a kind of a mess.
        </p>
        <p>
          But when I started using TypeScript professionally in 2019, everything
          changed. TypeScript makes everything much more explicit, easy, and
          reliable that{" "}
          <strong>
            it&apos;s hard for me to think about starting a new project without
            it these days
          </strong>
          .
        </p>
        <p>
          I do realize that not everything about TypeScript is perfect, though.
          Libraries with incorrect or incompatible typings can be a pain to deal
          with. Also, assigning the correct type for complex scenarios gets hard
          pretty fast.
        </p>
        <p>
          But TypeScript has come a long way. Having such a great community also
          helps: any problem you might have has probably already been solved by
          someone (Google for the rescue 😅).
        </p>
      </>
    ),
    featured: true,
    icon(isContrastMode: boolean): ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            stroke={colors.background}
            strokeLinejoin="round"
            strokeWidth={35}
            xlinkHref={`#${this.id}`}
          />
          <use fill={colors.text} xlinkHref={`#${this.id}`} />
        </svg>
      );
    },
    id: "typescript",
    name: "TypeScript",
    studying: true,
    usageLevel: 3,
    yearsExperience: 2,
  },
  {
    colors: {
      contrast: {
        background: "#03a813",
        text: "#84fb7e",
      },
      normal: {
        background: "#31ee1f",
        text: "#61fb6e",
      },
      scrollBar: { trackColor: "#79c872" },
    },
    description: <></>,
    featured: false,
    icon(isContrastMode: boolean): ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use stroke={colors.background} strokeWidth={30} />
          <MongoDB />
        </svg>
      );
    },
    id: "MongoDB",
    name: "MongoDB",
    studying: true,
    usageLevel: 1,
    yearsExperience: 1,
  },

  {
    colors: {
      contrast: {
        background: "#7dd1ac",
        text: "black",
      },
      normal: {
        background: "#41b883",
        text: "#292e31",
      },
      scrollBar: { trackColor: "#292e31" },
    },
    description: <></>,
    featured: false,
    icon(isContrastMode: boolean): ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            stroke={colors.background}
            strokeWidth={10}
            xlinkHref={`#${this.id}-1`}
          />
          <use fill={colors.background} xlinkHref={`#${this.id}-2`} />
          <use xlinkHref={`#${this.id}-3`} />
        </svg>
      );
    },
    id: "vue",
    name: "React Vite",
    studying: false,
    usageLevel: 3,
    yearsExperience: 3,
  },
  {
    colors: {
      contrast: {
        background: "#aae06a",
        text: "black",
      },
      normal: {
        background: "#82cd2a",
        text: "#292e31",
      },
      scrollBar: { trackColor: "#3c6011" },
    },
    description: (
      <>
        <p>
          Even though I&apos;ve been focusing my career on the frontend path
          these last few years, I have experience building Node.js applications.
        </p>
        <p>
          My experience with server-side Node.js includes small backends
          developed using Express and multi-system Kafka integration
          applications.
        </p>
        <p>
          I&apos;ve been also helping building and maintaining pipeline
          monitoring tools built in Node.js, like for instance an automated{" "}
          <a
            href="https://www.ada.gov/"
            rel="noopener noreferrer"
            target="_blank"
          >
            ADA compliance
          </a>{" "}
          checker.
        </p>
      </>
    ),
    featured: false,
    icon(isContrastMode: boolean): ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            stroke={colors.background}
            strokeWidth={10}
            xlinkHref={`#${this.id}`}
          />
          <use fill={colors.text} xlinkHref={`#${this.id}`} />
        </svg>
      );
    },
    id: "node-js",
    name: "Node.js",
    studying: true,
    usageLevel: 1,
    yearsExperience: 1,
  },
  {
    colors: {
      contrast: {
        background: "#039158",
        text: "white",
      },
      normal: {
        background: "#18d086",
        text: "#f3f3f3",
      },
      scrollBar: { trackColor: "#69d7ab" },
    },
    description: (
      <>
        <p>
          <strong>Regular expressions are like a Swiss Army Knife</strong> for
          developers. It can be super convenient, but you must know how to use
          it — and it isn&apos;t always easy.
        </p>

        <p>
          My skills in RegExp allow me to fetch data and refactor code more
          efficiently.
        </p>
        <p>
          RegExp is a fantastic and powerful tool, and this is why I&apos;m
          always eager to learn more about it!
        </p>
      </>
    ),
    featured: false,
    icon(isContrastMode: boolean): ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            stroke={colors.background}
            strokeLinejoin="round"
            strokeWidth={125}
            xlinkHref={`#${this.id}`}
          />
          <use fill={colors.text} xlinkHref={`#${this.id}`} />
        </svg>
      );
    },
    id: "regexp",
    name: "RegExp",
    studying: true,
    usageLevel: 1,
  },
];

export const getColors = (skill: Skill, isContrastMode: boolean) =>
  isContrastMode ? skill.colors.contrast : skill.colors.normal;

export type Skill = {
  brief?: ReactElement;
  colors: {
    contrast: {
      background: string;
      text: string;
    };
    normal: {
      background: string;
      text: string;
    };
    scrollBar?: {
      trackColor?: string;
    };
  };
  description: ReactElement;
  featured: boolean;
  icon?: (isContrastMode: boolean) => ReactElement;
  id: string;
  name: string;
  studying: boolean;
  usageLevel: -1 | -2 | -3 | 1 | 2 | 3;
  yearsExperience?: number;
};
