import { type CSSProperties, type FC, type SVGProps } from "react";

import classNames from "classnames";
import { useInView } from "react-intersection-observer";

import GithubIcon from "assets/svg/GithubIcon";
import GitlabIcon from "assets/svg/GitlabIcon";
import HasuraIcon from "assets/svg/HasuraIcon";
import NetlifyIcon from "assets/svg/NetlifyIcon";
import PostmanIcon from "assets/svg/PostmanIcon";
import VsCodeIcon from "assets/svg/VsCodeIcon";

import styles from "./Tools.module.css";

type Tool = {
  accent: string;
  description: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
  name: string;
};

type AiTool = {
  accent: string;
  description: string;
  initials: string;
  name: string;
};

const tools: Tool[] = [
  {
    accent: "#32b5f1",
    description: "Code editor",
    Icon: VsCodeIcon,
    name: "VS Code",
  },
  {
    accent: "#ff6c37",
    description: "API testing",
    Icon: PostmanIcon,
    name: "Postman",
  },
  {
    accent: "#f3f3f3",
    description: "Source control",
    Icon: GithubIcon,
    name: "GitHub",
  },
  {
    accent: "#fc6d26",
    description: "Repository workflow",
    Icon: GitlabIcon,
    name: "GitLab",
  },
  {
    accent: "#21c6b7",
    description: "Frontend deployment",
    Icon: NetlifyIcon,
    name: "Netlify",
  },
  {
    accent: "#2f6df6",
    description: "GraphQL services",
    Icon: HasuraIcon,
    name: "Hasura",
  },
];

const aiTools: AiTool[] = [
  {
    accent: "#7c3aed",
    description: "Code suggestions inside the development workflow",
    initials: "CP",
    name: "GitHub Copilot",
  },
  {
    accent: "#10a37f",
    description: "Planning, explanations, debugging, and content polish",
    initials: "CG",
    name: "ChatGPT",
  },
  {
    accent: "#8ab4f8",
    description: "Portfolio AI chat and Gemini API experimentation",
    initials: "GM",
    name: "Gemini",
  },
];

const ToolsSection = () => {
  const { inView, ref } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section
      aria-labelledby="tools-title"
      className={classNames(styles.section, {
        [styles.visible]: inView,
      })}
      ref={ref}
    >
      <div className={styles.inner}>
        <div className={styles.heading}>
          <span className={styles.kicker}>toolchain</span>
          <h2 id="tools-title">Tools I Use</h2>
          <p>
            A focused setup for building interfaces, testing APIs, managing
            source control, and shipping reliable frontend work.
          </p>
        </div>

        <div className={styles.showcase} aria-hidden>
          <div className={styles.globe}>
            <span className={styles.globeLine} />
            <span className={styles.globeLine} />
            <span className={styles.globeLine} />
            <span className={styles.globePulse} />
          </div>
          <div className={styles.orbit}>
            <span className={styles.orbitSweepPrimary} />
            <span className={styles.orbitSweepSecondary} />
            <svg
              className={styles.orbitLines}
              focusable="false"
              viewBox="0 0 100 100"
            >
              <circle
                className={styles.orbitLineOuter}
                cx="50"
                cy="50"
                pathLength={1}
                r="49"
              />
              <circle
                className={styles.orbitLineInner}
                cx="50"
                cy="50"
                pathLength={1}
                r="37"
              />
            </svg>
            {tools.map(({ Icon, accent, name }, index) => (
              <span
                className={styles.orbitIcon}
                key={name}
                style={
                  {
                    "--tool-accent": accent,
                    "--tool-index": index,
                  } as CSSProperties
                }
              >
                <Icon />
              </span>
            ))}
          </div>
        </div>

        <div className={styles.grid}>
          {tools.map(({ Icon, accent, description, name }, index) => (
            <article
              className={styles.card}
              key={name}
              style={
                {
                  "--tool-accent": accent,
                  "--tool-index": index,
                } as CSSProperties
              }
            >
              <span className={styles.icon}>
                <Icon />
              </span>
              <span className={styles.cardText}>
                <strong>{name}</strong>
                <span>{description}</span>
              </span>
            </article>
          ))}
        </div>

        <div className={styles.aiPanel}>
          <div className={styles.aiHeading}>
            <span className={styles.kicker}>comfortable with ai tools</span>
            <p>
              Tools I use to support planning, debugging, API testing, and
              faster development while maintaining code quality.
            </p>
          </div>

          <div className={styles.aiGrid}>
            {aiTools.map(({ accent, description, initials, name }, index) => (
              <article
                className={styles.aiCard}
                key={name}
                style={
                  {
                    "--tool-accent": accent,
                    "--tool-index": index + tools.length,
                  } as CSSProperties
                }
              >
                <span className={styles.aiBadge}>{initials}</span>
                <span className={styles.cardText}>
                  <strong>{name}</strong>
                  <span>{description}</span>
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
