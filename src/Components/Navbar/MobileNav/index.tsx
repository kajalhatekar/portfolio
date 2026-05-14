import React, { useState } from "react";
import { IProps } from "Components/Navbar/MobileNav/types";
import { InnerWrapper, Listitems, MainContainer } from "style/Navbar";

const navLinks = [
  { id: "home", label: "Home", href: "#home" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "education", label: "Education", href: "#education" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "project", label: "Projects", href: "#project" },
  { id: "contact", label: "Contact", href: "#contact" },
];

const MobileView: React.FC<IProps> = ({ setStateFunc }) => {
  const [activeLink, setActiveLink] = useState<string>("");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setStateFunc();
  };

  return (
    <MainContainer className="landing-nav">
      <InnerWrapper>
        {navLinks.map((link) => (
          <Listitems
            key={link.id}
            isActive={activeLink === link.id}
            onClick={() => handleLinkClick(link.id)}
          >
            <a href={link.href}>{link.label}</a>
          </Listitems>
        ))}
      </InnerWrapper>
    </MainContainer>
  );
};

export default MobileView;
