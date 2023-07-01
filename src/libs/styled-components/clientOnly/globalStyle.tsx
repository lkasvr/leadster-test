import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    max-width: 100%;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: PlusJakartaSans, sans-serif;
    font-smooth: always;
    -webkit-font-smoothing: always;
    -moz-osx-font-smoothing: always;
  }
`;

export default GlobalStyle;
