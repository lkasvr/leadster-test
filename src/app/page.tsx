import { Fragment } from 'react';

import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import FooterBanner from '@/components/FooterBanner';
import Header from '@/components/Header';
import Main from '@/components/Main';
import {
  GlobalStyle,
  GlobalModal,
  Theme,
} from '@/libs/styled-components/clientOnly';

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
    black: {
      light: '#1c3c50',
      main: '#333333',
      dark: '#000',
    },
    yellow: {
      light: '#fff8d0',
      main: '#F9D949',
      dark: '#d2bd5b',
    },
    green: {
      light: '#1c3c50',
      main: '#9fefdf',
      dark: '#09be97',
    },
  },
  breakpoints: {
    max: {
      sm: '(max-width: 640px)',
      md: '(max-width: 768px)',
      lg: '(max-width: 1024px)',
      xl: '(max-width: 1280px)',
    },
    min: {
      sm: '(min-width: 640px)',
      md: '(min-width: 768px)',
      lg: '(min-width: 1024px)',
      xl: '(min-width: 1280px)',
    },
  },
};

export default function MainPAge() {
  return (
    <Fragment>
      <GlobalStyle />
      <Theme theme={theme}>
        <GlobalModal>
          <Header />
          <Banner />
          <Main />
          <FooterBanner />
          <Footer />
        </GlobalModal>
      </Theme>
    </Fragment>
  );
}
