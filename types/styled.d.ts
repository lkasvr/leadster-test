import 'styled-components';

type colors = {
  light: string;
  main: string;
  dark: string;
};

type breakpoints = {
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    bg: string;
    palette: {
      primary: colors;
      secondary: colors;
      gray: colors;
      black: colors;
      yellow: colors;
      green: colors;
    };
    breakpoints: {
      max: breakpoints;
      min: breakpoints;
    };
  }
}
