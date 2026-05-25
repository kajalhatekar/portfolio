import { SkillCard } from "./SkillCard/SkillCard";
import { SkillVectors } from "./SkillVectors/SkillVectors";
import { getColors, skills } from "./skills.const";

import styles from "./Skills.module.css";

const SkillsSec = () => {
  const isContrastMode = true;

  return (
    <section className={styles.section}>
      <SkillVectors />

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
