import { type FC } from "react";
import styles from "./EndTransition.module.css";

export const EndTransition: FC = () => (
  <div className={styles.container}>
    <svg
      className={styles.transition}
      viewBox="0 0 1920 400"
      preserveAspectRatio="none"
    >
      <defs>
        {/* Dynamic theme gradient 1 */}
        <linearGradient id="themeWaveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--theme-secondary-bright)" stopOpacity="0.75" />
          <stop offset="35%" stopColor="var(--theme-primary-bright)" stopOpacity="0.95" />
          <stop offset="70%" stopColor="var(--theme-secondary-bright)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--theme-primary-bright)" stopOpacity="0.75" />
        </linearGradient>

        {/* Dynamic theme gradient 2 */}
        <linearGradient id="themeWaveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--theme-primary-bright)" stopOpacity="0.7" />
          <stop offset="50%" stopColor="var(--theme-secondary-bright)" stopOpacity="1" />
          <stop offset="100%" stopColor="var(--theme-primary-bright)" stopOpacity="0.7" />
        </linearGradient>

        {/* Vertical beam drop gradient */}
        <linearGradient id="themeLaserBeam" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="var(--theme-primary-bright)" stopOpacity="1" />
          <stop offset="65%" stopColor="var(--theme-secondary-bright)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--theme-primary-bright)" stopOpacity="1" />
        </linearGradient>
      </defs>

      {/* Center Vertical Laser Line (Starts right at the top y=0 to touch the timeline line) */}
      <line
        x1="960"
        y1="0"
        x2="960"
        y2="148"
        stroke="url(#themeLaserBeam)"
        strokeWidth="2"
      />

      {/* Line 1: Upper slope dipping right through x=960, y=148 */}
      <path
        d="M 0 70 Q 550 120, 960 148 T 1920 125"
        fill="none"
        stroke="url(#themeWaveGradient1)"
        strokeWidth="1.2"
      />

      {/* Line 2: Signature upward arch touching at x=960, y=148 */}
      <path
        d="M 0 175 Q 960 148, 1920 155"
        fill="none"
        stroke="url(#themeWaveGradient2)"
        strokeWidth="1.2"
      />

      {/* Line 3: Intersecting horizontal crossline */}
      <path
        d="M 0 190 Q 960 195, 1920 185"
        fill="none"
        stroke="url(#themeWaveGradient1)"
        strokeWidth="1.1"
      />

      {/* Line 4: Shallow downward curve */}
      <path
        d="M 0 240 Q 960 270, 1920 235"
        fill="none"
        stroke="url(#themeWaveGradient2)"
        strokeWidth="1.2"
      />

      {/* Line 5: Bottom gentle slope */}
      <path
        d="M 0 325 Q 960 300, 1920 295"
        fill="none"
        stroke="url(#themeWaveGradient1)"
        strokeWidth="1.1"
      />
    </svg>
  </div>
);

export default EndTransition;