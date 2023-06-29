import { Fragment } from 'react';

import Banner from '@/components/Banner';
import Header from '@/components/Header';
import { Theme } from '@/libs/styled-components/utils';

const theme = {
  bg: 'white',
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
