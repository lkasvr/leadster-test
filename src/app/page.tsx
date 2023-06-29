import { Fragment } from 'react';

import Banner from '@/components/Banner';
import Header from '@/components/Header';
import { GlobalStyle, Theme } from '@/libs/styled-components/clientOnly';

const theme = {
  bg: 'white',
  palette: {
    primary: {
      light: '#569bfb',
      main: '#2c83fb',
      dark: '#1f76f0',
    },
    secondary: {
      light: '#f3f9ff',
      main: '#f0f8ff',
      dark: '#a8adb2',
    },
    gray: {
      light: '#dde2e4',
      main: '#d5dbde',
      dark: '#95999b',
    },
  },
};

export default function MainPAge() {
  return (
    <Fragment>
      <GlobalStyle />
      <Theme theme={theme}>
        <Header />
        <Banner />
      </Theme>
    </Fragment>
  );
}
