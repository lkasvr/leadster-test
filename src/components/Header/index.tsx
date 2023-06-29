'use client';
import Image from 'next/image';

import Header from './styles';

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
