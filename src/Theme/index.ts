import { ITheme } from "interfaces";

export const theme: ITheme = {
  color: {
    first: "#000000",
    second: "#ffffff",
    third: " #964fdd",
    // third: " rgb(12, 158, 231)",
    fourth: "#c770f0",
    fifth: "#5b2c89",
    sixth: "rgba(99, 30, 167, 0.46)",
  },
  font: {
    primary: `"Rajdhani", sans-serif`,
    secondary: `"Roboto", sans-serif`,
    tertiary: `"Chakra Petch", sans-serif`,
  },
  fontWeight: {
    primary: "500",
    secondary: "700",
  },
  breakpoints: {
    mobile: "480px",
    tablet: "768px",
    desktop: "1024px",
  },
};
