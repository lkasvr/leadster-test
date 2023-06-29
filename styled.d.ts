import 'styled-components';

type colors = {
  light: string;
  main: string;
  dark: string;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    bg: string;
    palette: {
      primary: colors;
      secondary: colors;
      gray: colors;
      black: colors;
    };
  }
}
