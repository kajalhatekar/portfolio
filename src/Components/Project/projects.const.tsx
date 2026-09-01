import type { ReactNode } from "react";

import blogProjectImage from "assets/images/blog-project.png";
import foodDeliveryImage from "assets/images/food-delivery.png";
import linkedinCloneImage from "assets/images/linkedin-clone.png";
import planItImage from "assets/images/plan-it.png";

export type ProjectLink = {
  href: string;
  label: string;
  type: "live" | "source";
};

export type Project = {
  description: ReactNode;
  image?: string;
  video?: string;
  links: ProjectLink[];
  name: string;
  role: string;
  subtitle: string;
  tags: string[];
  title: string;
};

export const projects: Project[] = [
    {
    title: "linkedin-clone",
    name: "linkedin clone",
    role: "Full-stack Developer",
    subtitle: "Full-stack professional networking platform with feed, profiles, and APIs",
    tags: ["React", "Node.js", "Express", "MongoDB", "REST API", "Responsive Design"],
    image: linkedinCloneImage,
    links: [
      {
        href: "https://www.linkedin.com/in/kajal-raj",
        label: "Profile",
        type: "live",
      },
    ],
    description: (
      <>
        <div>
          <p>
            A full-stack professional networking platform inspired by LinkedIn,
            built with a responsive feed, user profiles, post sharing, and real backend data flow.
          </p>
          <p>
            It incorporates standard social media capabilities: authentication,
            profile management, posts, comments, connection requests, notifications,
            and recommendation-style interface sections.
          </p>
        </div>

        <div>
          <p>
            I built the frontend with reusable <strong>React</strong> UI components,
            structured layouts, controlled interaction states, and responsive styling for
            desktop and mobile screens.
          </p>
          <p>
            The backend was developed with <strong>Node.js</strong> and{" "}
            <strong>Express</strong>, exposing REST APIs for user, post, connection,
            and notification workflows.
          </p>
        </div>

        <div>
          <p>
            Data persistence is handled with <strong>MongoDB</strong>, supporting
            user records, feed content, comments, and relationship-based features.
          </p>
          <p>
            This build strengthened my understanding of connecting polished frontend UI
            with API handling, backend services, database models, and production-style
            social platform behavior.
          </p>
        </div>
      </>
    ),
  },
  {
    title: "personal-portfolio",
    name: "personal portfolio",
    role: "Frontend Developer & Designer",
    subtitle: "Interactive portfolio with AI assistant & theme engine",
    tags: [
      "React",
      "TypeScript",
      "Google Gemini LLM",
      "Styled Components",
      "Redux Toolkit",
      "AI Workflows",
    ],
    video: `${process.env.PUBLIC_URL}/videos/portfolio.mp4`,
    links: [
      {
        href: "https://github.com/kaaju-11",
        label: "GitHub",
        type: "source",
      },
      {
        href: "#",
        label: "Live",
        type: "live",
      },
    ],
    description: (
      <>
        <div>
          <p>
            This portfolio started as a simple idea and grew into a much more expressive,
            polished showcase of my work, skills, and personality.
          </p>
          <p>
            Everything here was created by me, from the visual direction, custom sections,
            interactions, and assets through implementation, AI integration, and deployment.
          </p>
        </div>

        <div>
          <p>
            I treated this portfolio as a personal creative project, rebuilding sections
            multiple times until the layout, motion, responsiveness, and mood felt right.
          </p>
          <p>
            The experience includes smooth scroll-linked card scaling, SVG path-drawing
            micro-interactions, multi-mode theme customization, and a terminal-inspired
            interface designed to feel unique instead of template-based.
          </p>
        </div>

        <div>
          <p>
            Integrated an intelligent AI portfolio assistant powered by{" "}
            <strong>Google Gemini LLM</strong> with serverless functions, allowing visitors
            to ask about my background, projects, skills, and contact details in real time.
          </p>
          <p>
            Built with <strong>React</strong>, <strong>TypeScript</strong>,{" "}
            <strong>Redux Toolkit</strong>, and modern AI-assisted workflows, with focus on
            accessible UI, cross-device polish, performance, and thoughtful details.
          </p>
        </div>
      </>
    ),
  },
  {
    title: "blog-project",
    name: "blog project",
    role: "Full-stack Developer",
    subtitle: "Authenticated publishing platform with interactive user engagement",
    tags: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "JWT", "Redux"],
    image: blogProjectImage,
    links: [],
    description: (
      <>
        <div>
          <p>
            A full-featured digital publication platform built from scratch to support
            technical writing, markdown authoring, category filtering, and rich reader interactions.
          </p>
          <p>
            The project features a secure end-to-end flow supporting user registration,
            session persistence, content creation, comment threads, and dynamic light/dark theming.
          </p>
        </div>

        <div>
          <p>
            The frontend application is constructed with <strong>React</strong>,{" "}
            <strong>TypeScript</strong>, and <strong>Redux</strong>, enforcing strict schema
            contracts between user actions and backend APIs.
          </p>
          <p>
            On the server side, I engineered RESTful endpoints with <strong>Node.js</strong> and{" "}
            <strong>Express</strong>, implementing JWT token verification, password hashing, and input validation.
          </p>
        </div>

        <div>
          <p>
            Data persistence is managed via <strong>MongoDB</strong> with Mongoose models,
            leveraging compound indexing for fast search queries, tag filtering, and pagination.
          </p>
          <p>
            This full-stack build strengthened my expertise in secure authentication flows,
            stateful client-server architectures, and relational modeling within document stores.
          </p>
        </div>
      </>
    ),
  },
  {
    title: "food-delivery",
    name: "food delivery",
    role: "Frontend Developer",
    subtitle: "Interactive food menu, cart management, and ordering workflow",
    tags: ["React", "Redux", "Bootstrap", "Client Validation", "Responsive UI"],
    image: foodDeliveryImage,
    links: [
      {
        href: "https://github.com/kaaju-11/food-delivery",
        label: "GitHub",
        type: "source",
      },
    ],
    description: (
      <>
        <div>
          <p>
            An interactive food ordering interface created to deliver a frictionless
            e-commerce experience from menu browsing to final order confirmation.
          </p>
          <p>
            The UI highlights intuitive dish categorization, instant keyword filtering,
            customizable dietary tags, and an accessible drawer-based checkout process.
          </p>
        </div>

        <div>
          <p>
            A central challenge was maintaining reliable cart state across multiple views.
            Using <strong>Redux</strong>, I synchronized cart quantity updates, item addons,
            and real-time order pricing across product cards and modal dialogs.
          </p>
          <p>
            I built form validation guards to ensure customer contact details, addresses,
            and delivery notes are verified before payload submission.
          </p>
        </div>

        <div>
          <p>
            The user interface was crafted with a mobile-first responsive architecture using{" "}
            <strong>Bootstrap</strong> and custom CSS modules.
          </p>
          <p>
            This project deepened my focus on micro-interactions, responsive touch targets,
            and building intuitive consumer-facing checkout flows.
          </p>
        </div>
      </>
    ),
  },
  {
    title: "basic-mining",
    name: "basic mining",
    role: "Software Engineer",
    subtitle: "Hardware e-commerce & real-time crypto auction platform",
    tags: ["Next.js", "TypeScript", "MUI", "Redux", "E-commerce", "WebSockets"],
    video: `${process.env.PUBLIC_URL}/videos/mining.mp4`,
    links: [
      {
        href: "https://basicmining.com",
        label: "Live",
        type: "live",
      },
    ],
    description: (
      <>
        <div>
          <p>
            Basic Mining is a high-traffic e-commerce and live auction platform built
            specifically for high-ticket Bitcoin ASIC mining hardware and enterprise hosting services.
          </p>
          <p>
            I was responsible for developing high-conversion storefront flows, real-time
            bidding dashboards, detailed hardware specification tables, and multi-currency checkout.
          </p>
        </div>

        <div>
          <p>
            To ensure fast First Contentful Paint (FCP) and optimal SEO indexing across
            search engines, I architected server-rendered pages using <strong>Next.js</strong> and{" "}
            <strong>TypeScript</strong>.
          </p>
          <p>
            For the design system, I developed a scalable library of reusable UI components
            using <strong>Material UI (MUI)</strong>, tailored with custom brand tokens and strict layout grids.
          </p>
        </div>

        <div>
          <p>
            I implemented dynamic auction status updates and responsive bidding timers using{" "}
            <strong>Redux</strong> to handle real-time inventory and pricing adjustments.
          </p>
          <p>
            Additionally, I focused on end-to-end performance optimization, incorporating
            image optimization pipelines and responsive layouts that maintain speed on mobile networks.
          </p>
        </div>
      </>
    ),
  },
  {
    title: "plan-it",
    name: "plan-it",
    role: "Frontend Developer",
    subtitle: "Enterprise task planning & collaborative kanban platform",
    tags: ["React", "Redux Toolkit", "React Query", "TypeScript", "Dnd-Kit"],
    image: planItImage,
    links: [
      {
        href: "https://planit.thewitslab.com/",
        label: "Live",
        type: "live",
      },
    ],
    description: (
      <>
        <div>
          <p>
            Plan-IT is a comprehensive agile project management platform designed
            to give engineering teams full visibility over sprint velocity, task
            lifecycle states, and backlog prioritization through real-time kanban boards.
          </p>
          <p>
            I engineered the core workspace features, including multi-tier boards,
            story point estimators, custom label taxonomies, and multi-user permission guards.
          </p>
        </div>

        <div>
          <p>
            Building the interactive drag-and-drop mechanics required careful performance
            profiling. I utilized specialized React hooks alongside targeted memoization
            patterns to eliminate unnecessary re-renders across long lists and nested subtasks.
          </p>
          <p>
            To manage asynchronous server communication cleanly, I introduced{" "}
            <strong>React Query (TanStack Query)</strong> for optimistic UI updates,
            automatic background refetching, and intelligent data caching.
          </p>
        </div>

        <div>
          <p>
            Global application state was architected using <strong>Redux Toolkit</strong>,
            delivering predictable state transitions and type safety across complex task workflows.
          </p>
          <p>
            I also implemented dynamic theme customization with custom CSS custom properties,
            ensuring smooth transition effects and consistent contrast across light and dark modes.
          </p>
        </div>
      </>
    ),
  },
];
