import { ThemeProvider } from "styled-components";
import { useEffect, useMemo } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Home from "pages/home";
import { ToastContainer } from 'react-toastify'
import { useAppSelector } from "store/hooks";
import { getStyledTheme, getThemeColors } from "store/themeSlice";
// import AnimatedCursor from "react-animated-cursor";

function App() {
  const themeState = useAppSelector((state) => state.theme);
  const selectedTheme = useMemo(() => getStyledTheme(themeState), [themeState]);
  const themeColors = useMemo(() => getThemeColors(themeState), [themeState]);

  useEffect(() => {
    const root = document.documentElement;
    const cssVariables: Record<string, string> = {
      "--theme-accent-color": themeColors.accentColor,
      "--theme-backdrop": themeColors.backdrop,
      "--theme-background": themeColors.background,
      "--theme-background-opaque": themeColors.backgroundOpaque,
      "--theme-chat-accent": themeColors.chatAccent,
      "--theme-chat-background": themeColors.chatBackground,
      "--theme-chat-border-soft": themeColors.chatBorderSoft,
      "--theme-chat-outgoing-background": themeColors.chatOutgoingBackground,
      "--theme-code-accent-rgb": themeColors.codeAccentRgb,
      "--theme-experience-transition-adjust":
        themeColors.experienceTransitionAdjust,
      "--theme-glass-background": themeColors.glassBackground,
      "--theme-glass-border": themeColors.glassBorder,
      "--theme-highlight-accent-rgb": themeColors.highlightAccentRgb,
      "--theme-highlight-rgb": themeColors.highlightRgb,
      "--theme-is-contrast": themeColors.isContrast,
      "--theme-is-dark": themeColors.isDark,
      "--theme-list-style-image": themeColors.listStyleImage,
      "--theme-menu-background": themeColors.menuBackground,
      "--theme-menu-background-fallback": themeColors.menuBackgroundFallback,
      "--theme-muted-text": themeColors.mutedText,
      "--theme-primary-bright": themeColors.primaryBright,
      "--theme-primary-dark": themeColors.primaryDark,
      "--theme-primary-soft": themeColors.primarySoft,
      "--theme-scrollbar-track-color": themeColors.scrollbarTrackColor,
      "--theme-secondary-bright": themeColors.secondaryBright,
      "--theme-secondary-dark": themeColors.secondaryDark,
      "--theme-shadow": themeColors.shadow,
      "--theme-surface": themeColors.surface,
      "--theme-table-cell-background": themeColors.tableCellBackground,
      "--theme-testimonial-background": themeColors.testimonialBackground,
      "--theme-testimonial-card-background":
        themeColors.testimonialCardBackground,
      "--theme-testimonial-card-border": themeColors.testimonialCardBorder,
      "--theme-testimonial-card-text": themeColors.testimonialCardText,
      "--theme-text": themeColors.text,
      "--theme-text-rgb": themeColors.textRgb,
    };

    Object.entries(cssVariables).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });

    root.dataset.colorScheme = themeState.colorScheme;
    root.dataset.contrastMode = String(themeState.isContrastMode);
    document.body.style.background = themeColors.background;
  }, [themeColors, themeState.colorScheme, themeState.isContrastMode]);

  return (
    <BrowserRouter>
          <ThemeProvider theme={selectedTheme}>
            {/* <AnimatedCursor
              innerSize={10}
              outerSize={30}
              color = "221, 160, 221"
              outerAlpha={0.4}
              innerScale={0.6}
              outerScale={0}
            /> */}
            <ToastContainer autoClose={1000} />
            <Home />
          </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
