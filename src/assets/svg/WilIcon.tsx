import * as React from 'react';
import { SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="8vw"
    height="4vh"
    viewBox="0 0 50.91 75" // Adjusted viewBox to remove extra space
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M50.91 5v23.247L38.67 40.909 25.455 28.247 12.237 40.909 0 28.247V5a5 5 0 0 1 5-5h40.91a5 5 0 0 1 5 5Z"
      fill="#F9C51C"
    />
    <path
      d="M50.91 75V41.874L38.67 53.94 25.455 40.91 12.237 53.94 0 41.874V75a5 5 0 0 0 5 5h40.91a5 5 0 0 0 5-5Z"
      fill="#1D2E88"
    />
  </svg>
);

export default SvgComponent;
