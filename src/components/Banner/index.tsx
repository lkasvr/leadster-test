'use client';

import Image from 'next/image';

import Banner, { Tag, Title, SubTitle, CatchPhrase } from './styles';

import Divider from '@/elements/Divider';

const Index = () => {
  return (
    <Banner>
      <Tag>WEBINARS EXCLUSIVOS</Tag>
      <SubTitle>Menos Conversinha,</SubTitle>
      <Title>
        Mais Conversão
        <Image
          src="/asset-header.png"
          width={49}
          height={32}
          alt="Raios saindo da letra O"
        />
      </Title>
      <Divider $width="42%" $mt="0.5rem" $mb="0.5rem" />
      <CatchPhrase>
        Conheça as estratégias que <b>mudaram o jogo</b> e como aplicá-las no
        seu negócio
      </CatchPhrase>
    </Banner>
  );
};

export default Index;
