import { type FC, useEffect, useRef } from "react";
import classNames from "classnames";
import { type Project } from "../projects.const";
import { RepositoryDetails } from "./RepositoryDetails/RepositoryDetails";
import styles from "./ProjectCard.module.css";

type Props = {
  order: number;
  project: Project;
};

export const ProjectCard: FC<Props> = ({ order, project }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (project.video && videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.defaultMuted = true;
      videoRef.current.play().catch((err) => {
        console.warn("Autoplay was prevented:", err);
      });
    }
  }, [project.video]);

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
          {project.video ? (
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className={styles.image}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            >
              <source src={project.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              alt={`${project.title} project preview`}
              className={styles.image}
              loading="lazy"
              src={project.image}
            />
          )}
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