import { Fragment } from 'react';

import Banner from '@/components/Banner';
import Header from '@/components/Header';
import { Theme } from '@/libs/styled-components/themeProvider';

const theme = {
  bg: 'white',
  palette: {
    primary: {
      light: '#2c83fb',
      dark: '#1f76f0',
    },
  },
};

export default function MainPAge() {
  return (
    <Fragment>
      <Theme theme={theme}>
        <Header />
        <Banner />
      </Theme>
    </Fragment>
  );
}
