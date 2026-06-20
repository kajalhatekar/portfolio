import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type FC,
} from "react";

import ExperienceCard from "./ExperienceCard";
import ExperienceVectors from "./ExperienceVectors";
import { experiences } from "./experiences.const";

import styles from "./Experience.module.css";

const Experience: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      if (!containerRef.current) {
        return;
      }

      const transitionTop = containerRef.current.getBoundingClientRect().top;
      const windowBottomY = window.scrollY + window.innerHeight;
      const targetHeight = containerRef.current.clientHeight;
      const targetY = transitionTop + window.scrollY;
      const transitionDistance = targetHeight + window.innerHeight * 1.2;
      const percentage = (windowBottomY - targetY) / transitionDistance;
      const nextProgress = Math.max(0, Math.min(1, percentage));

      setProgress(
        transitionTop > 0 ? Math.min(nextProgress, 0.48) : nextProgress,
      );
    };

    const animationFrameIds: number[] = [];
    const timeoutIds: number[] = [];
    let resizeObserver: ResizeObserver | undefined;

    const scheduleLayoutCheck = () => {
      updateProgress();
      animationFrameIds.push(window.requestAnimationFrame(updateProgress));
      animationFrameIds.push(
        window.requestAnimationFrame(() =>
          window.requestAnimationFrame(updateProgress),
        ),
      );
    };

    updateProgress();
    scheduleLayoutCheck();
    [150, 500, 1000].forEach((delay) => {
      timeoutIds.push(window.setTimeout(updateProgress, delay));
    });

    if ("ResizeObserver" in window) {
      resizeObserver = new ResizeObserver(updateProgress);
      resizeObserver.observe(document.body);
    }

    window.addEventListener("load", updateProgress);
    window.addEventListener("pageshow", scheduleLayoutCheck);
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      animationFrameIds.forEach((animationFrameId) =>
        window.cancelAnimationFrame(animationFrameId),
      );
      timeoutIds.forEach((timeoutId) => window.clearTimeout(timeoutId));
      resizeObserver?.disconnect();
      window.removeEventListener("load", updateProgress);
      window.removeEventListener("pageshow", scheduleLayoutCheck);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <section className={styles.section}>
      <ExperienceVectors />
      <div aria-hidden className={styles.anchor} id="experience" />

      <h2 className={styles.title}>Experience</h2>

      <div className={styles.transitionContainer} ref={containerRef}>
        <div
          className={styles.transitionOverflow}
          style={{ "--scroll": `${progress}` } as CSSProperties}
        >
          <div className={styles.transitionLine} />
        </div>
      </div>

      <ul className={styles.timeline}>
        {experiences.map((experience) => (
          <ExperienceCard
            company={experience.company}
            consultant={experience.consultant}
            jobTitle={experience.jobTitle}
            key={experience.id}
            period={experience.period}
            title={experience.title}
          >
            {experience.description}
          </ExperienceCard>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
