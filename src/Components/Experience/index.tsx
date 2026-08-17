// import {
//   useEffect,
//   useRef,
//   useState,
//   type CSSProperties,
//   type FC,
// } from "react";

// import ExperienceCard from "./ExperienceCard";
// import ExperienceVectors from "./ExperienceVectors";
// import { experiences } from "./experiences.const";

// import styles from "./Experience.module.css";

// const Experience: FC = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const titleRef = useRef<HTMLHeadingElement>(null);
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     let animationFrame: number | null = null;

//     const scrollHandler = () => {
//       if (animationFrame !== null) return;

//       animationFrame = window.requestAnimationFrame(() => {
//         animationFrame = null;

//         if (!containerRef.current || !titleRef.current) return;

//         const titleBounds = titleRef.current.getBoundingClientRect();
//         const titleTransform = window.getComputedStyle(
//           titleRef.current,
//         ).transform;
//         const titleTranslateY =
//           titleTransform === "none"
//             ? 0
//             : new DOMMatrixReadOnly(titleTransform).m42;
//         const animationDistance = containerRef.current.clientHeight;
//         const layoutBottom = titleBounds.bottom - titleTranslateY;
//         const visibleDistance = window.innerHeight - layoutBottom;
//         const percentage = visibleDistance / animationDistance;

//         setProgress(Math.min(1, Math.max(0, percentage)));
//       });
//     };

//     document.addEventListener("scroll", scrollHandler, { passive: true });
//     scrollHandler();

//     return () => {
//       document.removeEventListener("scroll", scrollHandler);

//       if (animationFrame !== null) {
//         window.cancelAnimationFrame(animationFrame);
//       }
//     };
//   }, []);

//   return (
//     <section className={styles.section}>
//       <ExperienceVectors />
//       <div aria-hidden className={styles.anchor} id="experience" />

//       <h2 className={styles.title} data-text="EXPERIENCE" ref={titleRef}>
//         Experience
//       </h2>
//       <div className={styles.transitionContainer} ref={containerRef}>
//         <div
//           className={styles.transitionOverflow}
//           style={{ "--scroll": `${progress}` } as CSSProperties}
//         >
//           <div className={styles.transitionLine} />
//         </div>
//       </div>

//       <ul className={styles.timeline}>
//         {experiences.map((experience) => (
//           <ExperienceCard
//             company={experience.company}
//             consultant={experience.consultant}
//             jobTitle={experience.jobTitle}
//             key={experience.id}
//             period={experience.period}
//             title={experience.title}
//           >
//             {experience.description}
//           </ExperienceCard>
//         ))}
//       </ul>
//     </section>
//   );
// };

// export default Experience;


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
import EndTransition from "./EndTransition";

const Experience: FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const [progress, setProgress] = useState(0);
  const [exitProgress, setExitProgress] = useState(0);

  useEffect(() => {
    let animationFrame: number | null = null;

    const scrollHandler = () => {
      if (animationFrame !== null) return;

      animationFrame = window.requestAnimationFrame(() => {
        animationFrame = null;

        // 1. Entrance Progress for Title & Lines
        if (containerRef.current && titleRef.current) {
          const titleBounds = titleRef.current.getBoundingClientRect();
          const titleTransform = window.getComputedStyle(titleRef.current).transform;
          const titleTranslateY =
            titleTransform === "none"
              ? 0
              : new DOMMatrixReadOnly(titleTransform).m42;
          const animationDistance = containerRef.current.clientHeight;
          const layoutBottom = titleBounds.bottom - titleTranslateY;
          const visibleDistance = window.innerHeight - layoutBottom;
          const percentage = visibleDistance / animationDistance;

          setProgress(Math.min(1, Math.max(0, percentage)));
        }

        // 2. Exit Shrink Progress when scrolling into Footer
        if (sectionRef.current) {
          const rect = sectionRef.current.getBoundingClientRect();
          const triggerDistance = window.innerHeight * 0.6; // Starts shrinking over 60vh
          const diff = window.innerHeight - rect.bottom;

          if (diff > 0) {
            const exit = Math.min(1, Math.max(0, diff / triggerDistance));
            setExitProgress(exit);
          } else {
            setExitProgress(0);
          }
        }
      });
    };

    document.addEventListener("scroll", scrollHandler, { passive: true });
    scrollHandler();

    return () => {
      document.removeEventListener("scroll", scrollHandler);
      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
   <div className={styles.container}>
    <section
      ref={sectionRef}
      className={styles.section}
      style={
        {
          "--exit-progress": exitProgress,
        } as CSSProperties
      }
    >
      <ExperienceVectors />
      <div aria-hidden className={styles.anchor} id="experience" />

      <h2 className={styles.title} data-text="EXPERIENCE" ref={titleRef}>
        Experience
      </h2>

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
      <EndTransition />
    </section>
    </div>
  );
};

export default Experience;