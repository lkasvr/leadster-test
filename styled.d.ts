import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      primary: {
        light: string;
        dark: string;
      };
    };
  }
}
