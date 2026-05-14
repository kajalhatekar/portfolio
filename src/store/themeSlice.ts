import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITheme } from "interfaces";
import { theme as baseTheme } from "Theme";

export type ColorScheme = "dark" | "light";
export type ThemeName = "Orange" | "Cyan" | "Vice" | "Purple";

const listStyleImage = {
  dark: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PGxpbmUgeDE9IjUiIHkxPSIxNiIgeDI9IjE5IiB5Mj0iMTYiLz48cG9seWxpbmUgcG9pbnRzPSIxMiA5IDE5IDE2IDEyIDIzIi8+PC9zdmc+")',
  light:
    'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PGxpbmUgeDE9IjUiIHkxPSIxNiIgeDI9IjE5IiB5Mj0iMTYiLz48cG9seWxpbmUgcG9pbnRzPSIxMiA5IDE5IDE2IDEyIDIzIi8+PC9zdmc+")',
};

type ThemeColors = {
  accentColor: string;
  backdrop: string;
  background: string;
  backgroundOpaque: string;
  chatAccent: string;
  chatBackground: string;
  chatBorderSoft: string;
  chatOutgoingBackground: string;
  codeAccentRgb: string;
  experienceTransitionAdjust: string;
  glassBackground: string;
  glassBorder: string;
  highlightAccentRgb: string;
  highlightRgb: string;
  isContrast: string;
  isDark: string;
  listStyleImage: string;
  menuBackground: string;
  menuBackgroundFallback: string;
  mutedText: string;
  primaryBright: string;
  primaryDark: string;
  primarySoft: string;
  scrollbarTrackColor: string;
  secondaryBright: string;
  secondaryDark: string;
  shadow: string;
  surface: string;
  tableCellBackground: string;
  testimonialBackground: string;
  testimonialCardBackground: string;
  testimonialCardBorder: string;
  testimonialCardText: string;
  text: string;
  textRgb: string;
};

type ThemePalette = {
  name: ThemeName;
  label: string;
  dark: ThemeColors;
  light: ThemeColors;
  contrast: {
    dark: ThemeColors;
    light: ThemeColors;
  };
};

export type ThemeState = {
  colorScheme: ColorScheme;
  isContrastMode: boolean;
  themeName: ThemeName;
};

const light: ThemeColors = {
  accentColor: "auto",
  backdrop: "rgba(0, 0, 0, 0.5)",
  background: "#f8f9fa",
  backgroundOpaque: "rgba(255, 255, 255, 0.5)",
  chatAccent: "#0d0f12",
  chatBackground: "#e9e9e9",
  chatBorderSoft: "rgba(0, 0, 0, 0.08)",
  chatOutgoingBackground: "#e9e9e9",
  codeAccentRgb: "0, 0, 0",
  experienceTransitionAdjust: "#ebebeb",
  glassBackground: "rgba(255, 255, 255, 0.75)",
  glassBorder: "1px solid rgba(255, 255, 255, 0.5)",
  highlightAccentRgb: "255, 255, 255",
  highlightRgb: "0, 0, 0",
  isContrast: "0",
  isDark: "0",
  listStyleImage: listStyleImage.light,
  menuBackground: "rgba(0, 0, 0, 0.05)",
  menuBackgroundFallback: "rgba(255, 255, 255, 0.75)",
  mutedText: "rgba(41, 46, 49, 0.72)",
  primaryBright: "#383838",
  primaryDark: "#000000",
  primarySoft: "rgba(41, 46, 49, 0.14)",
  scrollbarTrackColor: "#838383",
  secondaryBright: "#525252",
  secondaryDark: "#282828",
  shadow: "rgba(0, 0, 0, 0.2)",
  surface: "#e9e9e9",
  tableCellBackground: "rgba(0, 0, 0, 0.02)",
  testimonialBackground: "#ebeced",
  testimonialCardBackground: "#f8f9fa",
  testimonialCardBorder: "#d3d3d3",
  testimonialCardText: "#292e31",
  text: "#292e31",
  textRgb: "41, 46, 49",
};

const dark: ThemeColors = {
  accentColor: "auto",
  backdrop: "rgba(255, 255, 255, 0.05)",
  background: "#0e141b",
  backgroundOpaque: "rgba(0, 0, 0, 0.2)",
  chatAccent: "#e9e9e9",
  chatBackground: "#1f242a",
  chatBorderSoft: "rgba(255, 255, 255, 0.055)",
  chatOutgoingBackground: "#1f242a",
  codeAccentRgb: "255, 255, 255",
  experienceTransitionAdjust: "#202020",
  glassBackground: "rgba(0, 0, 0, 0.85)",
  glassBorder: "1px solid rgba(0, 0, 0, 0.5)",
  highlightAccentRgb: "0, 0, 0",
  highlightRgb: "255, 255, 255",
  isContrast: "0",
  isDark: "1",
  listStyleImage: listStyleImage.dark,
  menuBackground: "rgba(255, 255, 255, 0.05)",
  menuBackgroundFallback: "rgba(0, 0, 0, 0.75)",
  mutedText: "rgba(255, 255, 255, 0.78)",
  primaryBright: "#ffffff",
  primaryDark: "#bfbfbf",
  primarySoft: "rgba(255, 255, 255, 0.14)",
  scrollbarTrackColor: "#424242",
  secondaryBright: "#ededed",
  secondaryDark: "#b3b3b3",
  shadow: "rgba(100, 100, 100, 0.2)",
  surface: "#1f242a",
  tableCellBackground: "rgba(255, 255, 255, 0.02)",
  testimonialBackground: "#1a1a1a",
  testimonialCardBackground: "#282828",
  testimonialCardBorder: "#3e3e3e",
  testimonialCardText: "#f3f3f3",
  text: "#ffffff",
  textRgb: "255, 255, 255",
};

const contrast = {
  dark: {
    ...dark,
    accentColor: "black",
    backdrop: "rgba(255, 255, 255, 0.5)",
    background: "black",
    chatAccent: "#e9e9e9",
    chatBackground: "#0d0f12",
    chatBorderSoft: "rgba(255, 255, 255, 0.22)",
    chatOutgoingBackground: "#0d0f12",
    codeAccentRgb: "255, 255, 255",
    experienceTransitionAdjust: "#202020",
    glassBackground: "rgba(0, 0, 0, 1)",
    glassBorder: "1px solid rgba(255, 255, 255, 0.5)",
    highlightAccentRgb: "0, 0, 0",
    highlightRgb: "255, 255, 255",
    isContrast: "1",
    menuBackground: "black",
    menuBackgroundFallback: "black",
    primaryBright: "white",
    primaryDark: "#bfbfbf",
    primarySoft: "rgba(255, 255, 255, 0.14)",
    secondaryBright: "#ededed",
    secondaryDark: "#b3b3b3",
    shadow: "transparent",
    surface: "#0d0f12",
    tableCellBackground: "rgba(255, 255, 255, 0.01)",
    testimonialBackground: "black",
    testimonialCardBackground: "black",
    testimonialCardBorder: "white",
    testimonialCardText: "white",
    text: "white",
    textRgb: "255, 255, 255",
  },
  light: {
    ...light,
    accentColor: "white",
    backdrop: "rgba(0, 0, 0, 0.8)",
    background: "white",
    chatAccent: "#0d0f12",
    chatBackground: "#e9e9e9",
    chatBorderSoft: "rgba(0, 0, 0, 0.22)",
    chatOutgoingBackground: "#e9e9e9",
    codeAccentRgb: "0, 0, 0",
    experienceTransitionAdjust: "#ebebeb",
    glassBackground: "rgba(255, 255, 255, 1)",
    glassBorder: "1px solid rgba(0, 0, 0, 0.5)",
    highlightAccentRgb: "255, 255, 255",
    highlightRgb: "0, 0, 0",
    isContrast: "1",
    menuBackground: "white",
    menuBackgroundFallback: "white",
    primaryBright: "#383838",
    primaryDark: "black",
    primarySoft: "rgba(0, 0, 0, 0.12)",
    secondaryBright: "#525252",
    secondaryDark: "#282828",
    shadow: "transparent",
    surface: "#e9e9e9",
    tableCellBackground: "rgba(0, 0, 0, 0.01)",
    testimonialBackground: "white",
    testimonialCardBackground: "white",
    testimonialCardBorder: "black",
    testimonialCardText: "black",
    text: "black",
    textRgb: "0, 0, 0",
  },
};

export const themePalettes: ThemePalette[] = [
  {
    name: "Orange",
    label: "Orange",
    dark: {
      ...dark,
      accentColor: "#ee0979",
      chatAccent: "#ff5444",
      chatOutgoingBackground: "#b71607",
      codeAccentRgb: "255, 106, 0",
      experienceTransitionAdjust: "#ffffffd9",
      highlightAccentRgb: "255, 106, 0",
      highlightRgb: "238, 9, 121",
      primaryBright: "#ff2828",
      primaryDark: "#8f160a",
      primarySoft: "rgba(238, 9, 121, 0.18)",
      secondaryBright: "#ff815b",
      secondaryDark: "#ff6f0d",
      shadow: "rgba(238, 9, 121, 0.24)",
    },
    light: {
      ...light,
      accentColor: "#ee0979",
      chatAccent: "#ff7c69",
      chatOutgoingBackground: "#ff9486",
      codeAccentRgb: "255, 106, 0",
      experienceTransitionAdjust: "#ffffffbf",
      highlightAccentRgb: "255, 106, 0",
      highlightRgb: "238, 9, 121",
      primaryBright: "#f93d3d",
      primaryDark: "#b11a1a",
      primarySoft: "rgba(238, 9, 121, 0.14)",
      secondaryBright: "#ff8833",
      secondaryDark: "#dd5c00",
      shadow: "rgba(238, 9, 121, 0.18)",
    },
    contrast,
  },
  {
    name: "Cyan",
    label: "Cyan",
    dark: {
      ...dark,
      accentColor: "#4ca1af",
      chatAccent: "#85ffdb",
      chatOutgoingBackground: "#017855",
      codeAccentRgb: "196, 224, 229",
      experienceTransitionAdjust: "#686868",
      highlightAccentRgb: "196, 224, 229",
      highlightRgb: "76, 161, 175",
      primaryBright: "#35a8e1",
      primaryDark: "#306a87",
      primarySoft: "rgba(76, 161, 175, 0.18)",
      secondaryBright: "#40d8ab",
      secondaryDark: "#379f80",
      shadow: "rgba(76, 161, 175, 0.24)",
    },
    light: {
      ...light,
      accentColor: "#4ca1af",
      chatAccent: "#039a6e",
      chatOutgoingBackground: "#86d7bf",
      codeAccentRgb: "55, 165, 132",
      experienceTransitionAdjust: "#686868",
      highlightAccentRgb: "55, 165, 132",
      highlightRgb: "76, 161, 175",
      primaryBright: "#39b5f3",
      primaryDark: "#0d5a81",
      primarySoft: "rgba(76, 161, 175, 0.14)",
      secondaryBright: "#00c98e",
      secondaryDark: "#30725f",
      shadow: "rgba(76, 161, 175, 0.18)",
    },
    contrast,
  },
  {
    name: "Vice",
    label: "Vice",
    dark: {
      ...dark,
      accentColor: "#ec6ead",
      chatAccent: "#c1e1ff",
      chatOutgoingBackground: "#0f4170",
      codeAccentRgb: "52, 148, 230",
      experienceTransitionAdjust: "#747474",
      highlightAccentRgb: "52, 148, 230",
      highlightRgb: "236, 110, 173",
      primaryBright: "#ff81c0",
      primaryDark: "#f14a9c",
      primarySoft: "rgba(236, 110, 173, 0.18)",
      secondaryBright: "#81c5ff",
      secondaryDark: "#4ea7f9",
      shadow: "rgba(236, 110, 173, 0.24)",
    },
    light: {
      ...light,
      accentColor: "#ec6ead",
      chatAccent: "#2189e7",
      chatOutgoingBackground: "#abd7ff",
      codeAccentRgb: "52, 148, 230",
      experienceTransitionAdjust: "#cbcbcb",
      highlightAccentRgb: "52, 148, 230",
      highlightRgb: "236, 110, 173",
      primaryBright: "#e31d81",
      primaryDark: "#97004a",
      primarySoft: "rgba(236, 110, 173, 0.14)",
      secondaryBright: "#127ed9",
      secondaryDark: "#0366c1",
      shadow: "rgba(236, 110, 173, 0.18)",
    },
    contrast,
  },
  {
    name: "Purple",
    label: "Purple",
    dark: {
      ...dark,
      accentColor: "#7f00ff",
      chatAccent: "#ff7aec",
      chatOutgoingBackground: "#630370",
      codeAccentRgb: "225, 0, 255",
      experienceTransitionAdjust: "#ffffffc7",
      highlightAccentRgb: "225, 0, 255",
      highlightRgb: "72, 0, 145",
      primaryBright: "#7d54ff",
      primaryDark: "#5435b3",
      primarySoft: "rgba(72, 0, 145, 0.18)",
      secondaryBright: "#ea47ff",
      secondaryDark: "#9a24ab",
      shadow: "rgba(127, 0, 255, 0.24)",
    },
    light: {
      ...light,
      accentColor: "#7f00ff",
      chatAccent: "#a833b8",
      chatOutgoingBackground: "#dd98e7",
      codeAccentRgb: "225, 0, 255",
      experienceTransitionAdjust: "#ffffffc7",
      highlightAccentRgb: "225, 0, 255",
      highlightRgb: "127, 0, 255",
      primaryBright: "#9240ff",
      primaryDark: "#7126d5",
      primarySoft: "rgba(127, 0, 255, 0.14)",
      secondaryBright: "#ce3ee1",
      secondaryDark: "#aa00c3",
      shadow: "rgba(127, 0, 255, 0.18)",
    },
    contrast,
  },
];

const THEME_STORAGE_KEY = "portfolio-theme";

const defaultState: ThemeState = {
  colorScheme: "dark",
  isContrastMode: false,
  themeName: "Purple",
};

const legacyThemeNames: Record<string, ThemeName> = {
  aqua: "Cyan",
  bubblegum: "Vice",
  ember: "Orange",
  violet: "Purple",
};

const isThemeName = (value: unknown): value is ThemeName =>
  typeof value === "string" &&
  themePalettes.some((palette) => palette.name === value);

const isColorScheme = (value: unknown): value is ColorScheme =>
  value === "dark" || value === "light";

const normalizeThemeName = (value: unknown): ThemeName => {
  if (isThemeName(value)) return value;
  if (typeof value === "string" && legacyThemeNames[value]) {
    return legacyThemeNames[value];
  }

  return defaultState.themeName;
};

const getInitialState = (): ThemeState => {
  if (typeof window === "undefined") return defaultState;

  try {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (!savedTheme) return defaultState;

    const parsedTheme = JSON.parse(savedTheme) as Partial<ThemeState>;

    return {
      colorScheme: isColorScheme(parsedTheme.colorScheme)
        ? parsedTheme.colorScheme
        : defaultState.colorScheme,
      isContrastMode:
        typeof parsedTheme.isContrastMode === "boolean"
          ? parsedTheme.isContrastMode
          : defaultState.isContrastMode,
      themeName: normalizeThemeName(parsedTheme.themeName),
    };
  } catch {
    return defaultState;
  }
};

const getPalette = (state: ThemeState) =>
  themePalettes.find((palette) => palette.name === state.themeName) ||
  themePalettes[0];

export const getThemeColors = (state: ThemeState) => {
  const palette = getPalette(state);

  return state.isContrastMode
    ? palette.contrast[state.colorScheme]
    : palette[state.colorScheme];
};

export const getStyledTheme = (state: ThemeState): ITheme => {
  const colors = getThemeColors(state);

  return {
    ...baseTheme,
    color: {
      ...baseTheme.color,
      first: colors.background,
      second: colors.text,
      third: colors.primaryBright,
      fourth: colors.secondaryBright,
      fifth: colors.primaryBright,
      sixth: colors.primarySoft,
      seventh: colors.surface,
    },
  };
};

const themeSlice = createSlice({
  name: "theme",
  initialState: getInitialState(),
  reducers: {
    setColorScheme: (state, action: PayloadAction<ColorScheme>) => {
      state.colorScheme = action.payload;
    },
    setContrastMode: (state, action: PayloadAction<boolean>) => {
      state.isContrastMode = action.payload;
    },
    setThemeName: (state, action: PayloadAction<ThemeName>) => {
      state.themeName = action.payload;
    },
    toggleColorScheme: (state) => {
      state.colorScheme = state.colorScheme === "dark" ? "light" : "dark";
    },
  },
});

export const {
  setColorScheme,
  setContrastMode,
  setThemeName,
  toggleColorScheme,
} = themeSlice.actions;

export const persistThemeState = (state: ThemeState) => {
  if (typeof window === "undefined") return;

  window.localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(state));
};

export default themeSlice.reducer;
