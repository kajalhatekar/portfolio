// import React, { useState, useEffect, useRef } from "react";
// import {
//   BackToTopButton,
//   ControlCluster,
//   LogoWrapper,
//   NavBrandLogo,
//   Navbar,
//   SocialCluster,
//   SocialIconLink,
//   ThemeCheckbox,
//   ThemeControlButton,
//   ThemeGrid,
//   ThemeOptions,
//   ThemePickerWrapper,
//   ThemePopover,
//   ThemePopoverSubtitle,
//   ThemePopoverTitle,
//   ThemeSelectedMark,
//   ThemeSwatchButton,
//   ThemeSwatchLabel,
//   ThemeSwatchOption,
// } from "style/Navbar";
// import { FaArrowUp } from "react-icons/fa"; // Add an icon for the scroll-up button
// import { BsMoonStars, BsPalette, BsStars, BsSun } from "react-icons/bs";
// import { FiCheck, FiFileText, FiGithub, FiLinkedin } from "react-icons/fi";
// import KajalLogo from "assets/svg/KajalLogo";
// import { useAppDispatch, useAppSelector } from "store/hooks";
// import {
//   setContrastMode,
//   setThemeName,
//   themePalettes,
//   toggleColorScheme,
// } from "store/themeSlice";
// import type { ThemeName } from "store/themeSlice";

// const EmailIcon = () => (
//   <svg aria-hidden="true" viewBox="0 0 24 24">
//     <path
//       data-icon-fill="true"
//       d="M3.75 6.25 L12 12.35 L20.25 6.25 Z"
//     />
//     <rect x="3" y="5" width="18" height="14" rx="2" />
//     <polyline points="4 7 12 13 20 7" />
//   </svg>
// );

// const socialLinks = [
//   { label: "Email", href: "#contact", icon: <EmailIcon /> },
//   {
//     label: "Resume",
//     href: `${process.env.PUBLIC_URL}/resume/resume.pdf`,
//     icon: <FiFileText />,
//   },
//   {
//     label: "LinkedIn",
//     href: "https://www.linkedin.com/in/kajal-raj",
//     icon: <FiLinkedin />,
//   },
//   {
//     label: "GitHub",
//     href: "https://github.com/kaaju-11",
//     icon: <FiGithub />,
//   },
// ];

// const HERO_LOGO_DOCK_RATIO = 0.62;
// const HERO_LOGO_NAV_REVEAL_RATIO = 0.3;
// const HERO_LOGO_SLOT_RATIO = 0.56;

// const NavbarComponent: React.FC = () => {
//   const dispatch = useAppDispatch();
//   const { colorScheme, isContrastMode, themeName } = useAppSelector(
//     (state) => state.theme,
//   );
//   const [isSticky, setSticky] = useState(false);
//   const [isLogoSlotOpen, setLogoSlotOpen] = useState(false);
//   const [isLogoDocked, setLogoDocked] = useState(false);
//   const [isLogoReturning, setLogoReturning] = useState(false);
//   const [scrollUpBtnVisible, setScrollUpBtnVisible] = useState(false);
//   const [isThemePickerOpen, setThemePickerOpen] = useState(false);
//   const [hasNavbarIconIntroPlayed, setNavbarIconIntroPlayed] = useState(false);
//   const themePickerRef = useRef<HTMLDivElement>(null);
//   const previousScrollY = useRef(0);

//   useEffect(() => {
//     if (!isThemePickerOpen) return;

//     const closePicker = (event: MouseEvent) => {
//       if (
//         themePickerRef.current &&
//         !themePickerRef.current.contains(event.target as Node)
//       ) {
//         setThemePickerOpen(false);
//       }
//     };

//     const closePickerWithEscape = (event: KeyboardEvent) => {
//       if (event.key === "Escape") setThemePickerOpen(false);
//     };

//     document.addEventListener("mousedown", closePicker);
//     document.addEventListener("keydown", closePickerWithEscape);

//     return () => {
//       document.removeEventListener("mousedown", closePicker);
//       document.removeEventListener("keydown", closePickerWithEscape);
//     };
//   }, [isThemePickerOpen]);

//   useEffect(() => {
//     const introTimer = window.setTimeout(() => {
//       setNavbarIconIntroPlayed(true);
//     }, 4200);

//     return () => window.clearTimeout(introTimer);
//   }, []);

//   const handleScroll = () => {
//     const scrollY = window.scrollY;
//     const navRevealPoint = window.innerHeight * HERO_LOGO_NAV_REVEAL_RATIO;
//     const logoSlotPoint = window.innerHeight * HERO_LOGO_SLOT_RATIO;
//     const logoDockPoint = window.innerHeight * HERO_LOGO_DOCK_RATIO;
//     const logoReturnPoint = window.innerHeight * 0.58;
//     const isScrollingUp = scrollY < previousScrollY.current - 1;
//     const isScrollingDown = scrollY > previousScrollY.current + 1;

//     setSticky(scrollY > navRevealPoint);
//     setLogoSlotOpen(scrollY >= logoSlotPoint);
//     setLogoDocked(scrollY >= logoDockPoint);
//     if (isScrollingUp && scrollY > 8 && scrollY < logoReturnPoint) {
//       setLogoReturning(true);
//     }

//     if (isScrollingDown || scrollY <= 8 || scrollY >= logoReturnPoint) {
//       setLogoReturning(false);
//     }

//     setScrollUpBtnVisible(scrollY > 500);
//     previousScrollY.current = scrollY;
//   };

//   useEffect(() => {
//     handleScroll();
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handleThemeSelect = (selectedThemeName: ThemeName) => {
//     dispatch(setThemeName(selectedThemeName));
//   };

//   const handleColorSchemeToggle = () => {
//     setNavbarIconIntroPlayed(true);
//     dispatch(toggleColorScheme());
//   };

//   return (
//     <div>
//       <Navbar
//         className={`${isSticky ? "sticky" : ""} ${
//           isLogoSlotOpen ? "logo-slot-ready" : ""
//         } ${
//           isLogoDocked ? "logo-docked" : ""
//         } ${isLogoReturning ? "logo-returning" : ""} ${
//           hasNavbarIconIntroPlayed ? "icons-ready" : ""
//         }`}
//       >
//         <div className="max-width">
//           <LogoWrapper>
//             <NavBrandLogo aria-hidden="true">
//               <KajalLogo />
//             </NavBrandLogo>
//             <ControlCluster aria-label="Quick navigation">
//               <ThemeControlButton
//                 type="button"
//                 aria-label={
//                   colorScheme === "dark"
//                     ? "Switch to light mode"
//                     : "Switch to dark mode"
//                 }
//                 aria-pressed={colorScheme === "light"}
//                 onClick={handleColorSchemeToggle}
//                 title={
//                   colorScheme === "dark"
//                     ? "Switch to light mode"
//                     : "Switch to dark mode"
//                 }
//               >
//                 {colorScheme === "dark" ? (
//                   <BsMoonStars key="moon-icon" />
//                 ) : (
//                   <BsSun key="sun-icon" />
//                 )}
//               </ThemeControlButton>

//               <ThemePickerWrapper ref={themePickerRef}>
//                 <ThemeControlButton
//                   type="button"
//                   aria-controls="theme-picker-popover"
//                   aria-expanded={isThemePickerOpen}
//                   aria-label="Switch theme color"
//                   onClick={() => setThemePickerOpen((isOpen) => !isOpen)}
//                   title="Switch theme color"
//                 >
//                   <BsPalette />
//                 </ThemeControlButton>

//                 {isThemePickerOpen && (
//                   <ThemePopover
//                     aria-label="Theme color select popover"
//                     id="theme-picker-popover"
//                     role="dialog"
//                   >
//                     <ThemePopoverTitle>
//                       <BsStars aria-hidden="true" />
//                       <span>Select your theme</span>
//                     </ThemePopoverTitle>
//                     <ThemePopoverSubtitle>
//                       Choose a color theme that matches your vibe.
//                     </ThemePopoverSubtitle>
//                     <ThemeGrid>
//                       {themePalettes.map((palette) => {
//                         const colors = palette.dark;
//                         const isSelected = palette.name === themeName;

//                         return (
//                           <ThemeSwatchOption key={palette.name}>
//                             <ThemeSwatchButton
//                               type="button"
//                               $primary={colors.primaryBright}
//                               $secondary={colors.secondaryBright}
//                               $shadow={colors.shadow}
//                               aria-label={`Apply ${palette.label} theme`}
//                               aria-pressed={isSelected}
//                               onClick={() => handleThemeSelect(palette.name)}
//                               title={palette.label}
//                             >
//                               {isSelected && (
//                                 <ThemeSelectedMark
//                                   $primary={colors.primaryBright}
//                                   $secondary={colors.secondaryBright}
//                                   $shadow={colors.shadow}
//                                   aria-hidden="true"
//                                 >
//                                   <FiCheck />
//                                 </ThemeSelectedMark>
//                               )}
//                             </ThemeSwatchButton>
//                             <ThemeSwatchLabel>{palette.label}</ThemeSwatchLabel>
//                           </ThemeSwatchOption>
//                         );
//                       })}
//                     </ThemeGrid>

//                     <ThemeOptions>
//                       <ThemeCheckbox>
//                         <input
//                           checked={isContrastMode}
//                           onChange={(event) =>
//                             dispatch(setContrastMode(event.target.checked))
//                           }
//                           type="checkbox"
//                         />
//                         Contrast mode
//                       </ThemeCheckbox>
//                     </ThemeOptions>
//                   </ThemePopover>
//                 )}
//               </ThemePickerWrapper>
//             </ControlCluster>
//           </LogoWrapper>

//           <SocialCluster aria-label="Social links">
//             {socialLinks.map((link) => (
//               <SocialIconLink
//                 key={link.label}
//                 href={link.href}
//                 aria-label={link.label}
//                 data-social={link.label.toLowerCase()}
//                 target={
//                   link.href.startsWith("http") || link.href.endsWith(".pdf")
//                     ? "_blank"
//                     : undefined
//                 }
//                 rel={
//                   link.href.startsWith("http") || link.href.endsWith(".pdf")
//                     ? "noopener noreferrer"
//                     : undefined
//                 }
//               >
//                 {link.icon}
//               </SocialIconLink>
//             ))}
//           </SocialCluster>
//         </div>
//       </Navbar>

//       {scrollUpBtnVisible && (
//         <BackToTopButton onClick={scrollToTop} aria-label="Scroll to top">
//           <FaArrowUp />
//         </BackToTopButton>
//       )}
//     </div>
//   );
// };

// export default NavbarComponent;


import React, { useState, useEffect, useRef } from "react";
import {
  BackToTopButton,
  ControlCluster,
  LogoWrapper,
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
} from "style/Navbar";
import { FaArrowUp } from "react-icons/fa";
import { BsMoonStars, BsPalette, BsStars, BsSun } from "react-icons/bs";
import { FiCheck, FiFileText, FiGithub, FiLinkedin } from "react-icons/fi";
import KajalLogo from "assets/svg/KajalLogo";
import { useAppDispatch, useAppSelector } from "store/hooks";
import {
  setContrastMode,
  setThemeName,
  themePalettes,
  toggleColorScheme,
} from "store/themeSlice";
import type { ThemeName } from "store/themeSlice";

const EmailIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24">
    <path
      data-icon-fill="true"
      d="M3.75 6.25 L12 12.35 L20.25 6.25 Z"
    />
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <polyline points="4 7 12 13 20 7" />
  </svg>
);

const socialLinks = [
  { label: "Email", href: "#contact", icon: <EmailIcon /> },
  {
    label: "Resume",
    href: `${process.env.PUBLIC_URL}/resume/resume.pdf`,
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

const HERO_LOGO_DOCK_RATIO = 0.62;
const HERO_LOGO_NAV_REVEAL_RATIO = 0.3;
const HERO_LOGO_SLOT_RATIO = 0.56;

const NavbarComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const { colorScheme, isContrastMode, themeName } = useAppSelector(
    (state) => state.theme,
  );
  const [isSticky, setSticky] = useState(false);
  const [isLogoSlotOpen, setLogoSlotOpen] = useState(false);
  const [isLogoDocked, setLogoDocked] = useState(false);
  const [isLogoReturning, setLogoReturning] = useState(false);
  const [scrollUpBtnVisible, setScrollUpBtnVisible] = useState(false);
  const [isThemePickerOpen, setThemePickerOpen] = useState(false);
  const [hasNavbarIconIntroPlayed, setNavbarIconIntroPlayed] = useState(false);
  const [isNavHidden, setNavHidden] = useState(false);
  const themePickerRef = useRef<HTMLDivElement>(null);
  const previousScrollY = useRef(0);

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

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const navRevealPoint = window.innerHeight * HERO_LOGO_NAV_REVEAL_RATIO;
    const logoSlotPoint = window.innerHeight * HERO_LOGO_SLOT_RATIO;
    const logoDockPoint = window.innerHeight * HERO_LOGO_DOCK_RATIO;
    const logoReturnPoint = window.innerHeight * 0.58;
    const isScrollingUp = scrollY < previousScrollY.current - 1;
    const isScrollingDown = scrollY > previousScrollY.current + 1;

    setSticky(scrollY > navRevealPoint);
    setLogoSlotOpen(scrollY >= logoSlotPoint);
    setLogoDocked(scrollY >= logoDockPoint);
    if (isScrollingUp && scrollY > 8 && scrollY < logoReturnPoint) {
      setLogoReturning(true);
    }

    if (isScrollingDown || scrollY <= 8 || scrollY >= logoReturnPoint) {
      setLogoReturning(false);
    }

    // Midpoint check for Experience section
    const expSection =
      document.getElementById("experience")?.closest("section") ||
      document.getElementById("experience");

    if (expSection) {
      const rect = expSection.getBoundingClientRect();
      const expMidPoint = rect.top + rect.height / 2;
      // When scroll passes the vertical middle of the Experience section
      setNavHidden(expMidPoint <= window.innerHeight / 2);
    }

    setScrollUpBtnVisible(scrollY > 500);
    previousScrollY.current = scrollY;
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
          isLogoSlotOpen ? "logo-slot-ready" : ""
        } ${
          isLogoDocked ? "logo-docked" : ""
        } ${isLogoReturning ? "logo-returning" : ""} ${
          hasNavbarIconIntroPlayed ? "icons-ready" : ""
        } ${isNavHidden ? "nav-hidden" : ""}`}
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

          <SocialCluster aria-label="Social links">
            {socialLinks.map((link) => (
              <SocialIconLink
                key={link.label}
                href={link.href}
                aria-label={link.label}
                data-social={link.label.toLowerCase()}
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
        </div>
      </Navbar>

      {scrollUpBtnVisible && (
        <BackToTopButton onClick={scrollToTop} aria-label="Scroll to top">
          <FaArrowUp />
        </BackToTopButton>
      )}
    </div>
  );
};

export default NavbarComponent;