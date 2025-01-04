import {
  Container,
  FlexContainer,
  Heading,
  WrapperContainer,
  SkilName,
  ToolsItem,
} from "style/Skill";
import ReactVite from "assets/svg/ReactVite";
import HtmlIcon from "assets/svg/HtmlIcon";
import CssIcon from "assets/svg/CssIcon";
import JsIcon from "assets/svg/JsIcon";
import ReactIcon from "assets/svg/ReactIcon";
import GitIcon from "assets/svg/GitIcon";
import TypeScriptIcon from "assets/svg/TypeScriptIcon";
import NextJsIcon from "assets/svg/NextJsIcon";

const SkillsSec = () => {
  const key = new Date().getTime();
  return (
    <WrapperContainer>
      <Container>
        <Heading key={key}>
          Professional Skills
        </Heading>
        <FlexContainer>
          <SkilName>
            <ToolsItem key={key}>
              <HtmlIcon />
            </ToolsItem>
            <h3>Html</h3>
          </SkilName>
          <SkilName>
            <ToolsItem key={key}>
              <CssIcon />
            </ToolsItem>
            <h3>Css</h3>
          </SkilName>
          <SkilName>
            <ToolsItem key={key}>
              <JsIcon />
            </ToolsItem>
            <h3>JavaScript</h3>
          </SkilName>
          <SkilName>
            <ToolsItem key={key}>
              <ReactIcon />
            </ToolsItem>
            <h3>React</h3>
          </SkilName>
          <SkilName>
            <ToolsItem key={key}>
              <GitIcon />
            </ToolsItem>
            <h3>Git</h3>
          </SkilName>
          <SkilName>
            <ToolsItem key={key}>
              <TypeScriptIcon />
            </ToolsItem>
            <h3>TypeScript</h3>
          </SkilName>

          <SkilName>
            <ToolsItem key={key}>
              <NextJsIcon />
            </ToolsItem>
            <h3>Next Js</h3>
          </SkilName>
          <SkilName>
            <ToolsItem key={key}>
              <ReactVite />
            </ToolsItem>
            <h3>React Vite</h3>
          </SkilName>
        </FlexContainer>
      </Container>
    </WrapperContainer>
  );
};

export default SkillsSec;
