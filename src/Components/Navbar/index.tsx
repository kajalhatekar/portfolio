import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Listitems, LogoWrapper, Navbar, Unorderli } from "style/Navbar";
import { FaArrowUp } from "react-icons/fa"; // Add an icon for the scroll-up button

const NavbarComponent: React.FC = () => {
  const [isSticky, setSticky] = useState(false);
  const [scrollUpBtnVisible, setScrollUpBtnVisible] = useState(false);
  const [activeLink, setActiveLink] = useState<string>(""); // State for active link

  const handleScroll = () => {
    const scrollY = window.scrollY;

    setSticky(scrollY > 20);
    setScrollUpBtnVisible(scrollY > 500);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <div>
      <Navbar className={isSticky ? "sticky" : ""}>
        <div className="max-width">
          <LogoWrapper>
            <div>{`{ KAJAL RAJ }`}</div>
          </LogoWrapper>
          <Unorderli>
            <Listitems
              isActive={activeLink === "skills"}
              onClick={() => handleLinkClick("skills")}
            >
              <a href="#skills">Skills</a>
            </Listitems>
            <Listitems
              isActive={activeLink === "contact"}
              onClick={() => handleLinkClick("contact")}
            >
              <a href="#contact">Projects</a>
            </Listitems>
            <Listitems
              isActive={activeLink === "education"}
              onClick={() => handleLinkClick("education")}
            >
              <a href="#education">Education</a>
            </Listitems>
          </Unorderli>
        </div>
      </Navbar>

      {scrollUpBtnVisible && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "50px",
            right: "30px",
            backgroundColor: "#964fdd",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            padding: "10px",
            cursor: "pointer",
            zIndex: 1000,
          }}
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default NavbarComponent;
