'use client';

import Image from 'next/image';

import Banner, { Tag, Title, SubTitle, CatchPhrase } from './styles';

import Divider from '@/elements/Divider';
import { FadeIn, BackInLeft } from '@/styles/animations/index';

const Index = () => {
  return (
    <Banner>
      <FadeIn $duration="0.8s" $delay="3.2s">
        <Tag>WEBINARS EXCLUSIVOS</Tag>
      </FadeIn>

      <BackInLeft $duration="1s">
        <SubTitle>Menos Conversinha,</SubTitle>
      </BackInLeft>

      <BackInLeft $duration="0.8s" $delay="1.4s">
        <Title>
          Mais Conversão
          <Image
            src="/asset-header.png"
            width={49}
            height={32}
            alt="Raios saindo da letra O"
          />
        </Title>
      </BackInLeft>

      <FadeIn $duration="0.8s" $delay="3.2s">
        <Divider $width="40vw" $mt="0.5rem" $mb="0.5rem" />
      </FadeIn>

      <BackInLeft $duration="1s" $delay="2.2s">
        <CatchPhrase>
          Conheça as estratégias que <b>mudaram o jogo</b> e como aplicá-las no
          seu negócio
        </CatchPhrase>
      </BackInLeft>
    </Banner>
  );
};

export default Index;
