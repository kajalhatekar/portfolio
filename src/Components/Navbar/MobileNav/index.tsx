import React, { useEffect, useState } from "react";
import { IProps } from "Components/Navbar/MobileNav/types";

import {
  InnerWrapper,
  Listitems,
  MainContainer,
} from "style/Navbar";

const MobileView: React.FC<IProps> = ({setStateFunc}) => {
  const [activeLink, setActiveLink] = useState<string>("");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setStateFunc()
  };

  return (
    <div>
      <MainContainer className="landing-nav">
        <InnerWrapper>
          <Listitems
            isActive={activeLink === "home"}
            onClick={() => handleLinkClick("home")}
          >
            <a href="#home">Home</a>
          </Listitems>
          <Listitems
            isActive={activeLink === "skills"}
            onClick={() => handleLinkClick("skills")}
          >
            <a href="#skills">Skills</a>
          </Listitems>
          <Listitems
            isActive={activeLink === "education"}
            onClick={() => handleLinkClick("education")}
          >
            <a href="#education">Education</a>
          </Listitems>{" "}
          <Listitems
            isActive={activeLink === "experience"}
            onClick={() => handleLinkClick("experience")}
          >
            <a href="#experience">Experience</a>
          </Listitems>
          <Listitems
            isActive={activeLink === "project"}
            onClick={() => handleLinkClick("project")}
          >
            <a href="#project">Projects</a>
          </Listitems>
          <Listitems
            isActive={activeLink === "contact"}
            onClick={() => handleLinkClick("contact")}
          >
            <a href="#contact">Contact</a>
          </Listitems>
        </InnerWrapper>
      </MainContainer>
    </div>
  );
};

export default MobileView;
