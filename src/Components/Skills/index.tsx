import {
  Container,
  FlexContainer,
  Heading,
  WrapperContainer,
  SkilName,
  ToolsItem,
} from "style/Skill";
import { skillData } from "./data";

const SkillsSec = () => {
  const key = new Date().getTime();
  return (
    <WrapperContainer id="skills">
      <Container>
        <Heading key={key}>Professional Skills</Heading>
        <FlexContainer>
          {skillData.map(({ id, name, Icon }) => (
            <SkilName key={id}>
              <ToolsItem>
                <Icon />
              </ToolsItem>
              <h3>{name}</h3>
            </SkilName>
          ))}
        </FlexContainer>
      </Container>
    </WrapperContainer>
  );
};

export default SkillsSec;
