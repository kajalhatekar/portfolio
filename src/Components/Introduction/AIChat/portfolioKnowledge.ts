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
      "Answer directly and naturally. Prefer answers about Kajal, her work, skills, projects, education, experience, tools, resume, and contact. If a question is unrelated to Kajal, politely redirect toward Kajal's work or contact section. If a detail is unavailable, say 'I do not have that detail here.'",
    id: "answering-rules",
    keywords: ["rules"],
    title: "Answering Rules",
  },
  {
    content:
      "Current experience: Front-End Developer at Wits Innovation Lab from 01/2023 to Present. Work includes creating 40+ responsive landing pages for company and client projects, collaborating with UX/UI designers to turn wireframes into high-quality interfaces, building dynamic React.js interfaces with MUI and Ant Design, integrating REST APIs, and improving performance through code optimization, image compression, and lazy loading.",
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
      "Previous experience: Software Developer Intern at Wits Innovation Lab from 07/2022 to 12/2022. Work included developing and deploying web applications, contributing to features and bug fixes in an agile team, adding validations to web forms, and maintaining documentation for application integration.",
    id: "internship",
    keywords: ["experience", "intern", "internship", "previous", "wits"],
    title: "Internship",
  },
  {
    content:
      "Education: Bachelor of Computer Application from Rajindra Mishra College, August 2017 to February 2021. Master of Computer Application from Lovely Professional University, May 2021 to August 2023. Education entries include major as Electronics and Communication Engineering and minor as Information Technology.",
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
      "Core skills: React, HTML, CSS, Next.js, Git, Redux, JavaScript, TypeScript, MongoDB, React Vite, Node.js, and RegExp. Years of experience: HTML 5 years, CSS 5 years, React 4 years, JavaScript 4 years, Git 4 years, Redux 3.5 years, Next.js 3 years, React Vite 3 years, TypeScript 2 years, MongoDB 1 year, Node.js 1 year. React, CSS, JavaScript, and TypeScript are featured skills.",
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
      "Tools: VS Code, Postman, GitHub, GitLab, Netlify, and Hasura.",
    id: "tools",
    keywords: ["github", "gitlab", "hasura", "netlify", "postman", "tools", "vscode"],
    title: "Tools",
  },
  {
    content:
      "Project: LinkedIn Clone. It is a LinkedIn-like application built with modern web development technologies and replicates key professional networking features. Link for this project entry: https://www.linkedin.com/in/kajal-raj.",
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
      "Project: Basic Mining. A responsive e-commerce platform for Bitcoin mining devices using Next.js, TypeScript, and Material UI. Work included interactive UI elements, secure API integration, auction and payment interface optimization, Redux state management, testing, scalability, security, and cross-device responsiveness. Link: https://basicmining.com.",
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
      "Project: Plan-IT. Kajal designed and implemented task creation, story points, drag-and-drop dashboards, unlimited task management, themes, responsive UI, Redux Toolkit, hooks, React Query, and API integration. Work included improving load time by 20% through code optimization and collaboration with designers and backend developers. Link: https://planit.thewitslab.com/.",
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
