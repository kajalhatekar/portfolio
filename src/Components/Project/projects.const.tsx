import type { ReactNode } from "react";

import basicMiningImage from "assets/images/basic-mining.png";
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
  image: string;
  links: ProjectLink[];
  name: string;
  role: string;
  subtitle: string;
  tags: string[];
  title: string;
};

export const projects: Project[] = [
  {
    description: (
      <>
        <p>
          A LinkedIn-style social platform focused on professional networking,
          profile presentation, and a familiar feed experience.
        </p>
        <p>
          The project helped Kajal practice building structured layouts,
          reusable React components, and responsive screens that feel close to a
          real product interface.
        </p>
      </>
    ),
    image: linkedinCloneImage,
    links: [
      {
        href: "https://www.linkedin.com/in/kajal-raj",
        label: "Profile",
        type: "live",
      },
    ],
    name: "linkedin clone",
    role: "Frontend build",
    subtitle: "A professional networking interface inspired by LinkedIn",
    tags: ["React", "UI Components", "Responsive"],
    title: "LinkedIn Clone",
  },
  {
    description: (
      <>
        <p>
          A full-stack blog application with authentication, content
          management, user interactions, and theme support.
        </p>
        <p>
          The frontend was built with React, Redux, and TypeScript, while the
          backend used Node.js, Express, and MongoDB for API and data handling.
        </p>
      </>
    ),
    image: blogProjectImage,
    links: [],
    name: "blog project",
    role: "Full-stack practice",
    subtitle: "Authenticated blog platform with frontend and backend flow",
    tags: ["React", "TypeScript", "Node.js", "MongoDB"],
    title: "Blog Project",
  },
  {
    description: (
      <>
        <p>
          A responsive food ordering interface with menu browsing, cart
          management, quantity updates, and order placement flow.
        </p>
        <p>
          It focuses on everyday ecommerce interactions: clear product cards,
          predictable cart behavior, and a smooth responsive layout across
          device sizes.
        </p>
      </>
    ),
    image: foodDeliveryImage,
    links: [
      {
        href: "https://github.com/kaaju-11/food-delivery",
        label: "GitHub",
        type: "source",
      },
    ],
    name: "food delivery",
    role: "Frontend build",
    subtitle: "Food menu and cart workflow for a delivery experience",
    tags: ["React", "Redux", "Bootstrap"],
    title: "Food Delivery",
  },
  {
    description: (
      <>
        <p>
          A responsive ecommerce platform for Bitcoin mining devices, built with
          attention to product browsing, auction flows, and payment-related UI
          states.
        </p>
        <p>
          Kajal worked on interactive UI elements, API integration, Redux state
          management, and cross-device responsiveness while improving the
          reliability of purchase-oriented flows.
        </p>
      </>
    ),
    image: basicMiningImage,
    links: [
      {
        href: "https://basicmining.com",
        label: "Live",
        type: "live",
      },
    ],
    name: "basic mining",
    role: "Software Engineer",
    subtitle: "Ecommerce and auction experience for mining hardware",
    tags: ["Next.js", "TypeScript", "MUI", "Redux"],
    title: "Basic Mining",
  },
  {
    description: (
      <>
        <p>
          A planning and task management product with task creation, story
          points, drag-and-drop boards, and unlimited task workflows.
        </p>
        <p>
          Kajal implemented core UI features, optimized theme behavior,
          integrated APIs, and improved load time through Redux Toolkit, React
          Query, hooks, and focused code optimization.
        </p>
      </>
    ),
    image: planItImage,
    links: [
      {
        href: "https://planit.thewitslab.com/",
        label: "Live",
        type: "live",
      },
    ],
    name: "plan-it",
    role: "Frontend Developer",
    subtitle: "Task planning platform with board and workflow features",
    tags: ["React", "Redux Toolkit", "React Query", "API Integration"],
    title: "Plan-IT",
  },
];