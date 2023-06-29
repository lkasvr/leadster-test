'use client';
import { ThemeProvider, DefaultTheme } from 'styled-components';

interface ITheme {
  children: React.ReactNode;
  theme: DefaultTheme;
}

export const Theme = ({ children, theme }: ITheme) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
