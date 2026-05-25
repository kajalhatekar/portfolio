import { useInView } from "react-intersection-observer";
import { SkillCard } from "./SkillCard/SkillCard";
import { SkillVectors } from "./SkillVectors/SkillVectors";
import { getColors, skills } from "./skills.const";

import styles from "./Skills.module.css";

const HEADER = "skills";

const SkillsSec = () => {
  const { entry, ref } = useInView({
    rootMargin: "100% 0% -25% 0%",
    threshold: Array.from(`${HEADER} `).map((_, i) => i / HEADER.length),
  });

  const currentCharacterIndex = Math.round(
    HEADER.length * (entry?.intersectionRatio || 0),
  );

  const isContrastMode = true;

  const VisuallyHidden = ({ children }: any) => (
    <div
      style={{
        position: "absolute",
        width: "1px",
        height: "1px",
        padding: "0",
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        border: "0",
      }}
    >
      {children}
    </div>
  );

  return (
    <section className={styles.section}>
      <SkillVectors />

      {/* <div className={styles.scroll}>
        <h2 className={styles.title}>
          <span aria-hidden>{`>${HEADER.slice(
            0,
            currentCharacterIndex,
          )}`}</span>
          <span aria-hidden className={styles.caret}>
            _
          </span>

          <VisuallyHidden>{HEADER}</VisuallyHidden>
        </h2>

        <div className={styles.trigger} ref={ref} />
      </div> */}

      <div aria-hidden className={styles.anchor} id="skills" />
      <div className={styles.grid}>
        {skills.map((skill) => {
          const colors = getColors(skill, isContrastMode);

          return (
            <SkillCard
              backgroundColor={colors.background}
              brief={skill.brief}
              description={skill.description}
              featured={skill.featured}
              icon={skill?.icon?.(isContrastMode)}
              id={skill.id}
              key={skill.id}
              name={skill.name}
              scrollBarTrackColor={skill.colors.scrollBar?.trackColor}
              studying={skill.studying}
              textColor={colors.text}
              usageLevel={skill.usageLevel}
              yearsExperience={skill.yearsExperience}
            />
          );
        })}
      </div>
    </section>
  );
};

export default SkillsSec;
