import { type FC } from "react";

import { FaExternalLinkAlt, FaGithub, FaPlay } from "react-icons/fa";

import { type ProjectLink } from "../../projects.const";

import styles from "./RepositoryDetails.module.css";

type Props = {
  links: ProjectLink[];
  role: string;
  tags: string[];
};

export const RepositoryDetails: FC<Props> = ({ links, role, tags }) => (
  <aside className={styles.container}>
    <div className={styles.links}>
      {links.map((link) => (
        <a
          href={link.href}
          key={`${link.type}-${link.href}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          {link.type === "source" ? <FaGithub /> : <FaPlay />}
          {link.label}
        </a>
      ))}
    </div>

    <span>
      role <strong>{role}</strong>
    </span>

    <span className={styles.tags}>
      {tags.slice(0, 3).map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
      {tags.length > 3 && (
        <span title={tags.slice(3).join(", ")}>
          +{tags.length - 3}
          <FaExternalLinkAlt aria-hidden />
        </span>
      )}
    </span>
  </aside>
);