import { type FC } from "react";

import classNames from "classnames";

import { type Project } from "../projects.const";

import { RepositoryDetails } from "./RepositoryDetails/RepositoryDetails";

import styles from "./ProjectCard.module.css";

type Props = {
  order: number;
  project: Project;
};

export const ProjectCard: FC<Props> = ({ order, project }) => {
  return (
    <div className={styles.container}>
      <div className={classNames(styles.stickyContainer, styles.size)}>
        <span className={styles.sideTitle}>
          {String(order).padStart(2, "0")}.{project.name}
        </span>

        <div
          className={classNames(styles.imageContainer, {
            [styles.noImageGradient]: project.name === "basic mining",
          })}
        >
          <img
            alt={`${project.title} project preview`}
            className={styles.image}
            loading="lazy"
            src={project.image}
          />
        </div>
      </div>

      <article className={classNames(styles.card, styles.size)}>
        <div className={styles.cardContent}>
          <header className={styles.cardHeader}>
            <div>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardSubtitle}>{project.subtitle}</p>
            </div>

            <RepositoryDetails
              links={project.links}
              role={project.role}
              tags={project.tags}
            />
          </header>

          <div className={styles.cardDescription}>{project.description}</div>
        </div>
      </article>
    </div>
  );
};
