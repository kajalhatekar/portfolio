import type { AIChatMessage } from "./types";

type PortfolioKnowledgeSection = {
  content: string;
  id: string;
  keywords: string[];
  title: string;
  alwaysInclude?: boolean;
};

const portfolioKnowledgeSections: PortfolioKnowledgeSection[] = [
  {
    alwaysInclude: true,
    content:
      "Name: Kajal Raj. Primary role: Front-End Developer. Location/from: Maharastra, India. Education also includes Lovely Professional University (LPU), Jalandhar, India. Positioning: frontend developer, React developer, web developer, UI engineer. Kajal focuses on polished UI, smooth interactions, responsive web experiences, clean implementation, and continuous learning.",
    id: "profile",
    keywords: [
      "about",
      "Maharastra",
      "bio",
      "from",
      "india",
      "intro",
      "jalandhar",
      "kajal",
      "live",
      "location",
      "profile",
      "role",
      "where",
      "who",
    ],
    title: "Profile",
  },
  {
    alwaysInclude: true,
    content:
      "Answer directly and naturally as Kajal Raj's portfolio assistant. Speak about Kajal in third person using Kajal, she, and her. If a visitor says you or your, understand that they mean Kajal, but do not answer as Kajal in first person. Prefer answers about Kajal, her work, skills, projects, education, experience, tools, resume, and contact. When a visitor asks for multiple details in one question, use short natural paragraphs separated by a blank line. Do not add labels or headings such as Languages, Education, Experience, Projects, or Skills. If a question is unrelated to Kajal, politely redirect toward Kajal's work or contact section. If a detail is unavailable, say 'That detail is not available here.'",
    id: "answering-rules",
    keywords: ["rules"],
    title: "Answering Rules",
  },
  {
    content:
      "Resume experience: Front-End Developer / Software Engineer at Wits Innovation Lab, Chandigarh, India from 07/2022 to 10/2025. Work included developing and maintaining responsive, high-performance web applications used in production, building scalable reusable UI components, integrating RESTful APIs, handling dynamic data, improving performance with lazy loading, code splitting, and efficient state handling, and collaborating with designers and backend developers in agile workflows.",
    id: "current-experience",
    keywords: [
      "current",
      "experience",
      "front-end",
      "job",
      "wits",
      "work",
    ],
    title: "Current Experience",
  },
  {
    content:
      "Backend and system exposure from resume: Kajal has hands-on experience contributing to API integration and basic server-side logic using Node.js and Express. She applies system design fundamentals such as component architecture, state management, and performance optimization to build scalable applications. She contributed to feature development, bug fixes, and continuous code improvements across multiple projects.",
    id: "internship",
    keywords: ["backend", "experience", "express", "node", "system", "wits"],
    title: "Backend and System Exposure",
  },
  {
    content:
      "Education from resume: Master of Computer Applications from Lovely Professional University (LPU), Jalandhar, India, 07/2021 to 07/2023. Key coursework included Data Structures and Algorithms, DBMS, Operating Systems, Computer Networks, Software Engineering, Object-Oriented Programming, Data Mining, and Web Technologies. Bachelor of Computer Applications from R.M College, Bihar, India, 06/2017 to 06/2021. Key coursework included Data Structures, DBMS, Software Engineering, Computer Fundamentals, C/C++, Object-Oriented Programming, Web Programming, and Mathematics.",
    id: "education",
    keywords: [
      "bachelor",
      "bca",
      "college",
      "degree",
      "education",
      "mca",
      "study",
      "university",
    ],
    title: "Education",
  },
  {
    content:
      "Core skills: React, HTML, CSS, Next.js, Git, Redux, JavaScript, TypeScript, MongoDB, React Vite, Node.js, and RegExp. Years of experience: HTML 5 years, CSS 5 years, React 4 years, JavaScript 4 years, Git 4 years, Redux 3.5 years, Next.js 3 years, React Vite 3 years, TypeScript 2 years, MongoDB 1 year, Node.js 1 year. Resume technical skills: React.js, Next.js, JavaScript, TypeScript, HTML, CSS, Tailwind CSS, Material UI, Ant Design, Styled Components, Redux Toolkit, React Query, Context API, GraphQL with Apollo Client, basic Node.js, Express.js, MySQL, MongoDB, OpenAI API, GitHub Copilot, Claude, Prompt Engineering, Git, GitHub, GitLab, Postman, and VS Code.",
    id: "skills",
    keywords: [
      "css",
      "git",
      "html",
      "javascript",
      "mongodb",
      "next",
      "node",
      "react",
      "redux",
      "regexp",
      "skills",
      "typescript",
      "vite",
    ],
    title: "Skills",
  },
  {
    content:
      "Tools: VS Code, Postman, GitHub, GitLab, Netlify, Hasura, OpenAI API, GitHub Copilot, Claude, and prompt engineering workflows.",
    id: "tools",
    keywords: ["github", "gitlab", "hasura", "netlify", "postman", "tools", "vscode"],
    title: "Tools",
  },
  {
    content:
      "Project: LinkedIn Clone. Resume stack: React, TypeScript, Tailwind CSS, DaisyUI, Node.js, Express, and MongoDB. Built a full-stack social platform with user authentication, profiles, post sharing, feed, comments, connection requests, notifications, responsive UI, backend services, API handling, data management, and email notifications. Link for this project entry: https://www.linkedin.com/in/kajal-raj.",
    id: "project-linkedin",
    keywords: ["linkedin", "project", "projects"],
    title: "Project - LinkedIn Clone",
  },
  {
    content:
      "Project: Blog Project. A full-stack blog website with authentication. Frontend uses React, Redux, TypeScript, and React libraries. Backend uses Node.js and Express. Database uses MongoDB. Mobile project copy also mentions blog management, user interactions, and dark/light mode.",
    id: "project-blog",
    keywords: ["authentication", "blog", "express", "mongodb", "node", "project", "redux"],
    title: "Project - Blog Project",
  },
  {
    content:
      "Project: Food Delivery. Built with React, Redux, and Bootstrap. Features include a food menu, adding items to cart, viewing and managing cart contents, adjusting quantities, placing orders, and responsive design. Link: https://github.com/kaaju-11/food-delivery.",
    id: "project-food-delivery",
    keywords: ["bootstrap", "cart", "delivery", "food", "project", "react", "redux"],
    title: "Project - Food Delivery",
  },
  {
    content:
      "Project: Basic Mining. Resume stack: Next.js, TypeScript, Redux Toolkit, and Material UI. Kajal developed the frontend of a cryptocurrency mining platform with buy, sell, and auction functionality. Work included responsive product listing, pricing and auction management interfaces, CRUD workflows through RESTful API integration, reusable UI components, scalable Redux Toolkit state management, performance optimization, and cross-device responsiveness. Link: https://basicmining.com.",
    id: "project-basic-mining",
    keywords: [
      "basic",
      "bitcoin",
      "ecommerce",
      "mining",
      "next",
      "payment",
      "project",
      "typescript",
    ],
    title: "Project - Basic Mining",
  },
  {
    content:
      "Project: Plan-IT / Plan IT project management tool. Resume stack: React.js, TypeScript, Ant Design, Redux Toolkit, and React Query. Kajal built an agile project management tool for sprint planning and task tracking. Work included drag-and-drop dashboards, customizable workflow lanes, backlog management, CRUD operations for tasks, responsive UI, API integration with React Query, Redux Toolkit state management, performance optimization, and backend collaboration. Link: https://planit.thewitslab.com/.",
    id: "project-plan-it",
    keywords: [
      "dashboard",
      "drag",
      "plan",
      "plan-it",
      "project",
      "react-query",
      "redux",
      "task",
    ],
    title: "Project - Plan-IT",
  },
  {
    content:
      "Contact and links: Contact form powered by EmailJS. Navbar links include email/contact section, resume PDF at /resume/resume.pdf, LinkedIn at https://www.linkedin.com/in/kajal-raj, and GitHub at https://github.com/kaaju-11.",
    id: "contact",
    keywords: ["contact", "email", "github", "linkedin", "resume", "social"],
    title: "Contact and Links",
  },
  {
    content:
      "Team style and personality: Kajal is calm, curious, detail focused, collaborative, likes understanding the design goal before implementation, asks clear questions, and keeps code readable for the next person. Her name pronunciation is roughly kaa-jal raaj.",
    id: "team-personality",
    keywords: [
      "collaboration",
      "personality",
      "pronounce",
      "team",
      "working",
    ],
    title: "Team Style and Name",
  },
  {
    content:
      "Resume personal details: Kajal speaks English with professional proficiency, Hindi with professional proficiency, and German at elementary A1 level. Hobbies are not listed in the resume or portfolio context, so do not invent hobbies; say that detail is not available here and suggest using the contact section if someone asks.",
    id: "resume-personal-details",
    keywords: [
      "a1",
      "english",
      "german",
      "hindi",
      "hobbies",
      "hobby",
      "interest",
      "interests",
      "language",
      "languages",
      "personal",
      "resume",
      "speak",
      "speack",
      "speaks",
      "spoken",
    ],
    title: "Resume Personal Details",
  },
];

const broadPortfolioTerms = new Set([
  "about",
  "anything",
  "bio",
  "cv",
  "her",
  "kajal",
  "me",
  "my",
  "portfolio",
  "profile",
  "resume",
  "she",
  "summary",
  "you",
]);

const tokenize = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9+.#-]+/g, " ")
    .split(" ")
    .filter((token) => token.length > 2);

const scoreSection = (section: PortfolioKnowledgeSection, queryTokens: string[]) => {
  const searchableText = `${section.title} ${section.keywords.join(" ")} ${
    section.content
  }`.toLowerCase();

  return queryTokens.reduce((score, token) => {
    if (section.keywords.some((keyword) => keyword.includes(token))) {
      return score + 4;
    }

    if (searchableText.includes(token)) {
      return score + 1;
    }

    return score;
  }, 0);
};

export const getPortfolioContext = (messages: AIChatMessage[]) => {
  const recentText = messages
    .slice(-6)
    .map((message) => message.content)
    .join(" ");
  const queryTokens = tokenize(recentText);
  const shouldIncludeAll = queryTokens.some((token) =>
    broadPortfolioTerms.has(token),
  );

  const selectedSections = shouldIncludeAll
    ? portfolioKnowledgeSections
    : [
        ...portfolioKnowledgeSections.filter((section) => section.alwaysInclude),
        ...portfolioKnowledgeSections
          .filter((section) => !section.alwaysInclude)
          .map((section) => ({
            score: scoreSection(section, queryTokens),
            section,
          }))
          .filter(({ score }) => score > 0)
          .sort((a, b) => b.score - a.score)
          .slice(0, 7)
          .map(({ section }) => section),
      ];

  const dedupedSections = Array.from(
    new Map(selectedSections.map((section) => [section.id, section])).values(),
  );

  return dedupedSections
    .map((section) => `## ${section.title}\n${section.content}`)
    .join("\n\n");
};
