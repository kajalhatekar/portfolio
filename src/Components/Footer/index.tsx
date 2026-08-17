import { ChildContainer, FooterContainer, Para } from "style/Footer";
import { MadeBy } from "./MadeBy/MadeBy";

const Footer = () => {
  return (
    <FooterContainer>
      <ChildContainer>
        <Para>
        <MadeBy />
        </Para>
      </ChildContainer>
    </FooterContainer>
  );
};

export default Footer
