import { type CSSProperties } from "react";

import classNames from "classnames";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

import styles from "./Education.module.css";

type EducationItem = {
  campus: string;
  coursework: string[];
  degree: string;
  duration: string;
  highlights: string;
  icon: "cap" | "university";
  location: string;
};

const educationData: EducationItem[] = [
  {
    campus: "R.M College",
    coursework: ["Data Structures", "DBMS", "C/C++", "Web Programming"],
    degree: "Bachelor of Computer Applications",
    duration: "06/2017 - 06/2021",
    highlights:
      "Built the programming and computer science base that shaped Kajal's frontend path.",
    icon: "university",
    location: "Bihar, India",
  },
  {
    campus: "Lovely Professional University",
    coursework: ["DSA", "Operating Systems", "Software Engineering", "Web Technologies"],
    degree: "Master of Computer Applications",
    duration: "07/2021 - 07/2023",
    highlights:
      "Deepened software engineering fundamentals with stronger focus on web systems.",
    icon: "cap",
    location: "Jalandhar, India",
  },
];

const iconMap = {
  cap: FaGraduationCap,
  university: FaUniversity,
};

const Educations = () => {
  const { inView, ref } = useInView({
    threshold: 0.22,
    triggerOnce: true,
  });

  return (
    <section
      aria-labelledby="education-title"
      className={classNames(styles.section, {
        [styles.visible]: inView,
      })}
      id="education"
      ref={ref}
    >
      <div className={styles.inner}>
        <div className={styles.copy}>
          <span className={styles.kicker}>academic route</span>
          <h2 id="education-title">Education</h2>
          <p>
            Kajal&apos;s education moves from core computer applications into
            stronger software engineering and web technology foundations.
          </p>
        </div>

        <div className={styles.routeWrap}>
          <svg
            aria-hidden
            className={styles.route}
            focusable="false"
            viewBox="0 0 760 360"
          >
            <path
              className={styles.routeShadow}
              d="M78 272 C210 88 372 322 526 136 C590 58 660 74 714 116"
              pathLength={1}
            />
            <path
              className={styles.routeLine}
              d="M78 272 C210 88 372 322 526 136 C590 58 660 74 714 116"
              pathLength={1}
            />
          </svg>

          <div className={styles.milestones}>
            {educationData.map((item, index) => {
              const Icon = iconMap[item.icon];

              return (
                <article
                  className={styles.card}
                  key={item.degree}
                  style={
                    {
                      "--education-index": index,
                    } as CSSProperties
                  }
                >
                  <div className={styles.cardHeader}>
                    <span className={styles.badge}>
                      <Icon />
                    </span>
                    <span className={styles.meta}>
                      <strong>{item.duration}</strong>
                      <span>{item.location}</span>
                    </span>
                  </div>

                  <h3>{item.degree}</h3>
                  <p className={styles.campus}>{item.campus}</p>
                  <p className={styles.highlights}>{item.highlights}</p>

                  <div className={styles.coursework}>
                    {item.coursework.map((course, courseIndex) => (
                      <span
                        key={course}
                        style={
                          {
                            "--course-index": courseIndex,
                          } as CSSProperties
                        }
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Educations;
