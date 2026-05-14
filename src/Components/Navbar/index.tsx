import React, { useState, useEffect, useRef } from "react";
import { Drawer } from "@mui/material";
import {
  BackToTopButton,
  ControlCluster,
  Listitems,
  LogoWrapper,
  MobileMenuIconWrapper,
  MobileRightSection,
  NavBrandLogo,
  Navbar,
  SocialCluster,
  SocialIconLink,
  ThemeCheckbox,
  ThemeControlButton,
  ThemeGrid,
  ThemeOptions,
  ThemePickerWrapper,
  ThemePopover,
  ThemePopoverSubtitle,
  ThemePopoverTitle,
  ThemeSelectedMark,
  ThemeSwatchButton,
  ThemeSwatchLabel,
  ThemeSwatchOption,
  Unorderli,
} from "style/Navbar";
import { FaArrowUp } from "react-icons/fa"; // Add an icon for the scroll-up button
import { BsMoonStars, BsPalette, BsStars, BsSun } from "react-icons/bs";
import { FiCheck, FiFileText, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import MobileNav from "./MobileNav";
import CloseNavMenu from "assets/svg/CloseNavMenu";
import KajalLogo from "assets/svg/KajalLogo";
import MenuIcon from "assets/svg/MenuIcon";
import { useAppDispatch, useAppSelector } from "store/hooks";
import {
  setContrastMode,
  setThemeName,
  themePalettes,
  toggleColorScheme,
} from "store/themeSlice";
import type { ThemeName } from "store/themeSlice";

const navLinks = [
  { id: "home", label: "Home", href: "#home" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "education", label: "Education", href: "#education" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "project", label: "Projects", href: "#project" },
  { id: "contact", label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "Email", href: "#contact", icon: <FiMail /> },
  {
    label: "Resume",
    href: `${process.env.PUBLIC_URL}/resume/kajal-resume.pdf`,
    icon: <FiFileText />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kajal-raj",
    icon: <FiLinkedin />,
  },
  {
    label: "GitHub",
    href: "https://github.com/kaaju-11",
    icon: <FiGithub />,
  },
];

const HERO_LOGO_DOCK_RATIO = 0.72;

const NavbarComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const { colorScheme, isContrastMode, themeName } = useAppSelector(
    (state) => state.theme,
  );
  const [isSticky, setSticky] = useState(false);
  const [isLogoDocked, setLogoDocked] = useState(false);
  const [isLogoReturning, setLogoReturning] = useState(false);
  const [showNavLinks, setShowNavLinks] = useState(false);
  const [scrollUpBtnVisible, setScrollUpBtnVisible] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("home");
  const [showMenu, setShowMenu] = useState(false);
  const [isThemePickerOpen, setThemePickerOpen] = useState(false);
  const [hasNavbarIconIntroPlayed, setNavbarIconIntroPlayed] = useState(false);
  const themePickerRef = useRef<HTMLDivElement>(null);
  const previousScrollY = useRef(0);

  useEffect(() => {
    document.body.style.overflow = showMenu ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [showMenu]);

  useEffect(() => {
    const closeMenuOnDesktop = () => {
      if (window.innerWidth > 1100) setShowMenu(false);
    };

    window.addEventListener("resize", closeMenuOnDesktop);

    return () => window.removeEventListener("resize", closeMenuOnDesktop);
  }, []);

  useEffect(() => {
    if (!isThemePickerOpen) return;

    const closePicker = (event: MouseEvent) => {
      if (
        themePickerRef.current &&
        !themePickerRef.current.contains(event.target as Node)
      ) {
        setThemePickerOpen(false);
      }
    };

    const closePickerWithEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setThemePickerOpen(false);
    };

    document.addEventListener("mousedown", closePicker);
    document.addEventListener("keydown", closePickerWithEscape);

    return () => {
      document.removeEventListener("mousedown", closePicker);
      document.removeEventListener("keydown", closePickerWithEscape);
    };
  }, [isThemePickerOpen]);

  useEffect(() => {
    const introTimer = window.setTimeout(() => {
      setNavbarIconIntroPlayed(true);
    }, 4200);

    return () => window.clearTimeout(introTimer);
  }, []);

  const setStateFunc = () => {
    setShowMenu(false);
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const navRevealPoint = window.innerHeight * 0.52;
    const logoDockPoint = window.innerHeight * HERO_LOGO_DOCK_RATIO;
    const logoReturnPoint = window.innerHeight * 0.58;
    const isScrollingUp = scrollY < previousScrollY.current - 1;
    const isScrollingDown = scrollY > previousScrollY.current + 1;
    const skillsSection = document.getElementById("skills");
    const navLinksRevealPoint = skillsSection
      ? skillsSection.offsetTop - window.innerHeight * 0.16
      : window.innerHeight * 2.2;

    setSticky(scrollY > navRevealPoint);
    setLogoDocked(scrollY >= logoDockPoint);
    setShowNavLinks(scrollY >= navLinksRevealPoint);
    if (isScrollingUp && scrollY > 8 && scrollY < logoReturnPoint) {
      setLogoReturning(true);
    }

    if (isScrollingDown || scrollY <= 8 || scrollY >= logoReturnPoint) {
      setLogoReturning(false);
    }

    setScrollUpBtnVisible(scrollY > 500);

    let currentSection = "home";
    navLinks.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section && section.offsetTop - 180 <= scrollY) {
        currentSection = link.id;
      }
    });

    setActiveLink(currentSection);
    previousScrollY.current = scrollY;
  };

  useEffect(() => {
    handleScroll();
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

  const handleThemeSelect = (selectedThemeName: ThemeName) => {
    dispatch(setThemeName(selectedThemeName));
  };

  const handleColorSchemeToggle = () => {
    setNavbarIconIntroPlayed(true);
    dispatch(toggleColorScheme());
  };

  return (
    <div>
      <Navbar
        className={`${isSticky ? "sticky" : ""} ${
          isLogoDocked ? "logo-docked" : ""
        } ${isLogoReturning ? "logo-returning" : ""} ${
          hasNavbarIconIntroPlayed ? "icons-ready" : ""
        } ${showNavLinks ? "nav-links-visible" : ""}`}
      >
        <div className="max-width">
          <LogoWrapper>
            <NavBrandLogo aria-hidden="true">
              <KajalLogo />
            </NavBrandLogo>
            <ControlCluster aria-label="Quick navigation">
              <ThemeControlButton
                type="button"
                aria-label={
                  colorScheme === "dark"
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                }
                aria-pressed={colorScheme === "light"}
                onClick={handleColorSchemeToggle}
                title={
                  colorScheme === "dark"
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                }
              >
                {colorScheme === "dark" ? (
                  <BsMoonStars key="moon-icon" />
                ) : (
                  <BsSun key="sun-icon" />
                )}
              </ThemeControlButton>

              <ThemePickerWrapper ref={themePickerRef}>
                <ThemeControlButton
                  type="button"
                  aria-controls="theme-picker-popover"
                  aria-expanded={isThemePickerOpen}
                  aria-label="Switch theme color"
                  onClick={() => setThemePickerOpen((isOpen) => !isOpen)}
                  title="Switch theme color"
                >
                  <BsPalette />
                </ThemeControlButton>

                {isThemePickerOpen && (
                  <ThemePopover
                    aria-label="Theme color select popover"
                    id="theme-picker-popover"
                    role="dialog"
                  >
                    <ThemePopoverTitle>
                      <BsStars aria-hidden="true" />
                      <span>Select your theme</span>
                    </ThemePopoverTitle>
                    <ThemePopoverSubtitle>
                      Choose a color theme that matches your vibe.
                    </ThemePopoverSubtitle>
                    <ThemeGrid>
                      {themePalettes.map((palette) => {
                        const colors = palette.dark;
                        const isSelected = palette.name === themeName;

                        return (
                          <ThemeSwatchOption key={palette.name}>
                            <ThemeSwatchButton
                              type="button"
                              $primary={colors.primaryBright}
                              $secondary={colors.secondaryBright}
                              $shadow={colors.shadow}
                              aria-label={`Apply ${palette.label} theme`}
                              aria-pressed={isSelected}
                              onClick={() => handleThemeSelect(palette.name)}
                              title={palette.label}
                            >
                              {isSelected && (
                                <ThemeSelectedMark
                                  $primary={colors.primaryBright}
                                  $secondary={colors.secondaryBright}
                                  $shadow={colors.shadow}
                                  aria-hidden="true"
                                >
                                  <FiCheck />
                                </ThemeSelectedMark>
                              )}
                            </ThemeSwatchButton>
                            <ThemeSwatchLabel>{palette.label}</ThemeSwatchLabel>
                          </ThemeSwatchOption>
                        );
                      })}
                    </ThemeGrid>

                    <ThemeOptions>
                      <ThemeCheckbox>
                        <input
                          checked={isContrastMode}
                          onChange={(event) =>
                            dispatch(setContrastMode(event.target.checked))
                          }
                          type="checkbox"
                        />
                        Contrast mode
                      </ThemeCheckbox>
                    </ThemeOptions>
                  </ThemePopover>
                )}
              </ThemePickerWrapper>
            </ControlCluster>
          </LogoWrapper>

          <Unorderli aria-label="Primary navigation">
            {navLinks.map((link) => (
              <Listitems
                key={link.id}
                isActive={activeLink === link.id}
                onClick={() => handleLinkClick(link.id)}
              >
                <a href={link.href}>{link.label}</a>
              </Listitems>
            ))}
          </Unorderli>

          <SocialCluster aria-label="Social links">
            {socialLinks.map((link) => (
              <SocialIconLink
                key={link.label}
                href={link.href}
                aria-label={link.label}
                target={
                  link.href.startsWith("http") || link.href.endsWith(".pdf")
                    ? "_blank"
                    : undefined
                }
                rel={
                  link.href.startsWith("http") || link.href.endsWith(".pdf")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {link.icon}
              </SocialIconLink>
            ))}
          </SocialCluster>

          <MobileRightSection>
            <MobileMenuIconWrapper
              type="button"
              aria-label={showMenu ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={showMenu}
              aria-controls="mobile-navigation"
              onClick={() => setShowMenu(!showMenu)}
            >
              {showMenu ? <CloseNavMenu /> : <MenuIcon />}
            </MobileMenuIconWrapper>
          </MobileRightSection>
        </div>
      </Navbar>

      {scrollUpBtnVisible && (
        <BackToTopButton onClick={scrollToTop} aria-label="Scroll to top">
          <FaArrowUp />
        </BackToTopButton>
      )}

      <Drawer
        anchor="right"
        open={showMenu}
        onClose={() => {
          setShowMenu(false);
        }}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          id: "mobile-navigation",
          sx: {
            width: { xs: "100%", sm: 390 },
            background:
              "linear-gradient(180deg, var(--theme-surface), var(--theme-background))",
            borderLeft: "1px solid var(--theme-shadow)",
            color: "var(--theme-text)",
          },
        }}
      >
        <MobileNav setStateFunc={setStateFunc} />
      </Drawer>
    </div>
  );
};

export default NavbarComponent;
