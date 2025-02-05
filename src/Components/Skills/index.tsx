// import {
//   Container,
//   FlexContainer,
//   Heading,
//   WrapperContainer,
//   SkilName,
//   ToolsItem,
// } from "style/Skill";
// import { skillData } from "./data";

// const SkillsSec = () => {
//   const key = new Date().getTime();
//   return (
//     <WrapperContainer id="skills">
//       <Container>
//         <Heading key={key}>Professional Skills</Heading>
//         <FlexContainer>
//           {skillData.map(({ id, name, Icon }) => (
//             <SkilName key={id}>
//               <ToolsItem>
//                 <Icon />
//               </ToolsItem>
//               <h3>{name}</h3>
//             </SkilName>
//           ))}
//         </FlexContainer>
//       </Container>
//     </WrapperContainer>
//   );
// };

// export default SkillsSec;


import { useInView } from 'react-intersection-observer';
import { VisuallyHidden } from 'reakit/VisuallyHidden';
import { SkillCard } from './SkillCard/SkillCard';
import { SkillVectors } from './SkillVectors/SkillVectors';
import { getColors, skills } from './skills.const';

import styles from './Skills.module.css';
import { TestimonialDivider } from 'Components/Devider';

const HEADER = 'skills';

const SkillsSec = () => {

  const { entry, ref } = useInView({
    rootMargin: '100% 0% -25% 0%',
    threshold: Array.from(`${HEADER} `).map(
      (_, i) => i / HEADER.length,
    ),
  });

  const currentCharacterIndex = Math.round(
    HEADER.length * (entry?.intersectionRatio || 0),
  );

  const isContrastMode = true

  return (
    <section className={styles.section}>
      <TestimonialDivider position="bottom" />
      <SkillVectors />

      <div className={styles.scroll}>
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
      </div>

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
