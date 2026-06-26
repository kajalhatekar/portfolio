import type { SVGProps } from "react";

const KajalLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    focusable="false"
    viewBox="0 0 96 64"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* K */}
    <path
      d="M14 10V54"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="5.5"
    />
    <path
      d="M42 10L17 32L43 54"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="5.5"
    />

    {/* H */}
    <path
      d="M54 10V54"
      stroke="var(--theme-secondary-bright, #33d6f4)"
      strokeLinecap="round"
      strokeWidth="5.5"
    />
    <path
      d="M86 10V54"
      stroke="var(--theme-secondary-bright, #33d6f4)"
      strokeLinecap="round"
      strokeWidth="5.5"
    />
    <path
      d="M54 32H86"
      stroke="var(--theme-secondary-bright, #33d6f4)"
      strokeLinecap="round"
      strokeWidth="5.5"
    />

    {/* Accent */}
    <path
      d="M47 32H57"
      stroke="var(--theme-primary-bright, #964fdd)"
      strokeLinecap="round"
      strokeWidth="4"
    />
  </svg>
);

export default KajalLogo;