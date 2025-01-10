import React, { useState, useEffect } from "react";
import { Drawer } from "@mui/material";
import {
  BackToTopButton,
  Listitems,
  LogoWrapper,
  MobileMenuIconWrapper,
  MobileRightSection,
  Navbar,
  Unorderli,
} from "style/Navbar";
import { FaArrowUp } from "react-icons/fa"; // Add an icon for the scroll-up button
import MobileNav from "./MobileNav";
import CloseNavMenu from "assets/svg/CloseNavMenu";
import MenuIcon from "assets/svg/MenuIcon";

const NavbarComponent: React.FC = () => {
  const [isSticky, setSticky] = useState(false);
  const [scrollUpBtnVisible, setScrollUpBtnVisible] = useState(false);
  const [activeLink, setActiveLink] = useState<string>(""); // State for active link
  const [showMenu, setShowMenu] = useState(false);
  const [screenType, setScreenType] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setScreenType("mobile");
      } else if (window.innerWidth > 767 && window.innerWidth <= 1224) {
        setScreenType("tab");
      } else {
        setScreenType("desktop");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const setStateFunc = () => {
    setShowMenu(false);
  };
  const disableScrolling = () => {
    const x = window.scrollX;
    const y = window.scrollY;
    window.onscroll = () => {
      window.scrollTo(x, y);
    };
  };
  const enableScrolling = () => {
    window.onscroll = () => {
      return false;
    };
  };

  useEffect(() => {
    if (showMenu) disableScrolling();
    else enableScrolling();
  }, [showMenu]);

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
            <div>{`KAJAL RAJ`}</div>
          </LogoWrapper>

          {screenType === "desktop" && (
            <Unorderli>
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
              </Listitems>
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
            </Unorderli>
          )}

          {/* <LogoMenuWrapper> */}
          {(screenType === "mobile" || screenType === "tab") && (
            <MobileRightSection>
              <MobileMenuIconWrapper onClick={() => setShowMenu(!showMenu)}>
                {showMenu ? <CloseNavMenu /> : <MenuIcon />}
              </MobileMenuIconWrapper>
            </MobileRightSection>
          )}
          {/* </LogoMenuWrapper> */}
        </div>
      </Navbar>

      {scrollUpBtnVisible && (
        <BackToTopButton onClick={scrollToTop}>
          <FaArrowUp />
        </BackToTopButton>
      )}

      <Drawer
        anchor="right"
        open={showMenu}
        onClose={() => {
          setShowMenu(false);
        }}
        sx={{ pt: 50, marginTop: "10vw", position: "unset" }}
        PaperProps={{
          sx: { width: "100%" },
        }}
      >
        <MobileNav setStateFunc={setStateFunc} />
      </Drawer>
    </div>
  );
};

export default NavbarComponent;
