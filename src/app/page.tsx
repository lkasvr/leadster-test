import { Fragment } from 'react';

import { Theme } from '@/libs/styled-components/utils';

const theme = {
  bg: 'white',
};

export default function MainPAge() {
  return (
    <Fragment>
      <Theme theme={theme}>Olá mundo!</Theme>
    </Fragment>
  );
}
