import { Fragment, type CSSProperties } from "react";

import classNames from "classnames";
import { useInView } from "react-intersection-observer";

import { VisuallyHidden } from "Components/VisuallyHidden/VisuallyHidden";

import { ProjectCard } from "./ProjectCard/ProjectCard";
import { projects } from "./projects.const";

import styles from "./Projects.module.css";

const Projects = () => {
  const { inView, ref } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const title = "personal projects";

  return (
    <section className={styles.section} id="project">
      <div aria-hidden className={styles.anchor} id="projects" />

      <h2 className={styles.title} ref={ref}>
        <VisuallyHidden>{title}</VisuallyHidden>

        <span aria-hidden>
          {title.split(" ").map((word) => {
            const wordIndex = title.indexOf(word);

            return (
              <Fragment key={word}>
                <span>
                  {Array.from(word).map((character, characterIndex) => {
                    const index = wordIndex + characterIndex;

                    return (
                      <span
                        className={classNames({
                          [styles.animate]: inView,
                        })}
                        key={index}
                        style={
                          {
                            "--i": 0.3 + 0.1 * index,
                          } as CSSProperties
                        }
                      >
                        {character}
                      </span>
                    );
                  })}
                </span>
                {wordIndex === 0 && <br />}
              </Fragment>
            );
          })}
        </span>
      </h2>

      {projects.map((project, index) => (
        <ProjectCard
          key={project.title}
          order={index + 1}
          project={project}
        />
      ))}
    </section>
  );
};

export default Projects;
