export interface ITheme {
  color: {
    first: string;
    second: string;
    third: string;
    fourth: string;
    fifth: string;
    sixth: string;
    seventh: string;
  };
  font: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  fontWeight: {
    primary: string;
    secondary: string;
  };
  breakpoints: {
    desktop: string;
    mobile: string;
    tablet: string;
  };
}
