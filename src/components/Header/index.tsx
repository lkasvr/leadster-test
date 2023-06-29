'use client';
import Image from 'next/image';

import { styled } from 'styled-components';

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const index = () => {
  return (
    <Header>
      <Image
        src="/logo.png"
        alt="Logo leadster"
        width={194}
        height={42}
        priority
      />
    </Header>
  );
};

export default index;
