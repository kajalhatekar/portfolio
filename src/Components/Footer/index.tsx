import { ChildContainer, FooterContainer, Para } from "style/Footer";
import { MadeBy } from "./MadeBy/MadeBy";

const Footer = () => {
  return (
    <FooterContainer>
      <ChildContainer>
        <Para>
        <MadeBy />
        {/* © 2024 All rights reserved by Kajal Raj */}
        </Para>
      </ChildContainer>
    </FooterContainer>
  );
};

export default Footer
