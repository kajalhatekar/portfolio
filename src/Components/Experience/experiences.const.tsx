import type { ReactNode } from "react";

export type Company = {
  color: string;
  logo: string;
  padding?: string;
};

export type Period = {
  from: Date;
  to?: Date;
};

type Experience = {
  company: Company;
  consultant?: boolean;
  description: ReactNode;
  id: string;
  jobTitle: string;
  period: Period;
  title: string;
};

const witsInnovationLab: Company = {
  color: "linear-gradient(135deg, #f9c51c 0%, #1d2e88 100%)",
  logo: "witsInnovationLab",
  padding: "9px",
};

export const experiences: Experience[] = [
  {
    company: witsInnovationLab,
    description: (
      <>
        <p>
          Built responsive, production-ready user interfaces with React,
          TypeScript, JavaScript, HTML, and CSS, turning product requirements and
          design handoffs into polished web experiences.
        </p>
        <p>
          Worked closely with UI/UX designers and backend teams to integrate
          REST APIs, refine component behavior, and improve usability across
          dashboards, forms, and customer-facing pages.
        </p>
        <p>
          Focused on frontend quality through performance improvements,
          reusable components, accessibility-minded interactions, and careful
          visual alignment across desktop, tablet, and mobile screens.
        </p>
      </>
    ),
    id: "wits-frontend-developer",
    jobTitle: "Front-End Developer / Software Engineer",
    period: {
      from: new Date(Date.UTC(2023, 0, 1)),
      to: new Date(Date.UTC(2025, 9, 1)),
    },
    title: "Wits Innovation Lab",
  },
  {
    company: witsInnovationLab,
    description: (
      <>
        <p>
          Contributed to web application development as part of an agile team,
          implementing features, fixing UI issues, and learning the development
          workflow inside real project delivery.
        </p>
        <p>
          Assisted with form validation, documentation, and application
          maintenance while strengthening fundamentals in JavaScript,
          frontend architecture, and collaborative debugging.
        </p>
      </>
    ),
    id: "wits-software-intern",
    jobTitle: "Software Developer Intern",
    period: {
      from: new Date(Date.UTC(2022, 6, 1)),
      to: new Date(Date.UTC(2022, 11, 1)),
    },
    title: "Wits Innovation Lab",
  },
];
