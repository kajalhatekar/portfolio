import type { ReactNode } from "react";

export type Testimonial = {
  author: {
    accent: string;
    initials: string;
    name: string;
    role: string;
  };
  quote: ReactNode;
};

export const testimonials: Testimonial[] = [
  {
    author: {
      accent: "#7ebcff",
      initials: "RJ",
      name: "Ritu Jaiswal",
      role: "Backend Developer",
    },
    quote: (
      <>
        <p>
          Kajal communicates requirements clearly and coordinates well during
          API integration.
        </p>
        <p>
          She checks API responses properly, handles loading and error states,
          and makes sure frontend logic works correctly with backend data.
        </p>
      </>
    ),
  },
  {
    author: {
      accent: "#9d5cff",
      initials: "SJ",
      name: "Sakshi Jha",
      role: "Frontend Developer",
    },
    quote: (
      <>
        <p>
          Working with Kajal has always been smooth. She writes clean and
          manageable code and handles tasks with good attention to detail.
        </p>
      </>
    ),
  },
  {
    author: {
      accent: "#f05fa8",
      initials: "PM",
      name: "Product Team",
      role: "Project Collaboration",
    },
    quote: (
      <>
        <p>
          Kajal understands requirements well and pays attention to both design
          and feature behavior while working on tasks.
        </p>
        <p>
          She communicates clearly with the team, handles changes smoothly, and
          keeps working on improvements until the feature feels complete.
        </p>
      </>
    ),
  },
  {
    author: {
      accent: "#ffb86c",
      initials: "QA",
      name: "Quality Team",
      role: "Quality Review",
    },
    quote: (
      <>
        <p>
          Kajal is proactive when issues are reported and works quickly on fixes
          without affecting existing functionality. She understands bugs
          properly before making changes, which helps avoid repeated issues.
        </p>
        <p>
          She understands bugs properly before making changes, which helps avoid
          repeated issues.
        </p>
      </>
    ),
  },
];
