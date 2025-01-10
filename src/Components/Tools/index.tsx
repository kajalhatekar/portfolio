import {
  Container,
  FlexContainer,
  ToolsItem,
  Heading,
  WrapperContainer,
  SkilName,
  ToolsContainer,
} from "style/Skill";
import VsCodeIcon from "assets/svg/VsCodeIcon";
import PostmanIcon from "assets/svg/PostmanIcon";
import GithubIcon from "assets/svg/GithubIcon";
import GitlabIcon from "assets/svg/GitlabIcon";
import NetlifyIcon from "assets/svg/NetlifyIcon";
import { useInView } from "react-intersection-observer";
import HasuraIcon from "assets/svg/HasuraIcon";

const SkillsSec = () => {
  const key = new Date().getTime();
  const [ref] = useInView({
    triggerOnce: true, // Animation occurs only once
    threshold: 0.2, // 20% of the component should be in view to trigger the animation
  });
  return (
    <WrapperContainer ref={ref}>
      <ToolsContainer>
        <Heading key={key}>Tools I Use</Heading>
        <FlexContainer>
          <SkilName>
            <ToolsItem key={key}>
              <VsCodeIcon />
            </ToolsItem>
            <h3>Vs Code</h3>
          </SkilName>
          <SkilName>
            <ToolsItem key={key}>
              <PostmanIcon />
            </ToolsItem>
            <h3>Postman</h3>
          </SkilName>
          <SkilName>
            <ToolsItem key={key}>
              <GithubIcon />
            </ToolsItem>
            <h3>GitHub</h3>
          </SkilName>
          <SkilName>
            <ToolsItem key={key}>
              <GitlabIcon />
            </ToolsItem>
            <h3>Gitlab</h3>
          </SkilName>
          <SkilName>
            <ToolsItem key={key}>
              <NetlifyIcon />
            </ToolsItem>
            <h3>Netlify</h3>
          </SkilName>
          <SkilName>
            <ToolsItem key={key}>
              <HasuraIcon />
            </ToolsItem>
            <h3>Hasura</h3>
          </SkilName>
        </FlexContainer>
      </ToolsContainer>
    </WrapperContainer>
  );
};

export default SkillsSec;
