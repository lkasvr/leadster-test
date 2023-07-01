'use client';

import { useEffect, useRef } from 'react';

import Image from 'next/image';

import Banner, { Tag, Title, SubTitle, CatchPhrase } from './styles';

import { FadeIn, BackInLeft } from '@/animations';
import BaseAnimation from '@/animations/styles';
import { animateBase } from '@/animations/utils/animationBase';
import Divider from '@/elements/Divider';

const Index = () => {
  const animations = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const animationData = [
      {
        ref: animations.current[0],
        animation: FadeIn,
        options: {
          duration: 800,
          delay: 1000 * 3.2,
        },
      },
      {
        ref: animations.current[1],
        animation: BackInLeft,
        options: { duration: 1000 },
      },
      {
        ref: animations.current[2],
        animation: BackInLeft,
        options: { duration: 800, delay: 1400 },
      },
      {
        ref: animations.current[3],
        animation: FadeIn,
        options: { duration: 800, delay: 1000 * 3.2 },
      },
      {
        ref: animations.current[4],
        animation: BackInLeft,
        options: { duration: 1000, delay: 1000 * 2.2 },
      },
    ];

    animationData.forEach(({ ref, animation, options }) => {
      animateBase(ref, options, animation);
    });
  }, []);

  return (
    <Banner>
      <BaseAnimation ref={(el: HTMLDivElement) => (animations.current[0] = el)}>
        <Tag>WEBINARS EXCLUSIVOS</Tag>
      </BaseAnimation>

      <BaseAnimation ref={(el: HTMLDivElement) => (animations.current[1] = el)}>
        <SubTitle>Menos Conversinha,</SubTitle>
      </BaseAnimation>

      <BaseAnimation ref={(el: HTMLDivElement) => (animations.current[2] = el)}>
        <Title>
          Mais Conversão
          <Image
            src="/asset-header.png"
            width={49}
            height={32}
            alt="Raios saindo da letra O"
          />
        </Title>
      </BaseAnimation>

      <BaseAnimation ref={(el: HTMLDivElement) => (animations.current[3] = el)}>
        <Divider $width="40vw" $mt="0.5rem" $mb="0.5rem" />
      </BaseAnimation>

      <BaseAnimation ref={(el: HTMLDivElement) => (animations.current[4] = el)}>
        <CatchPhrase>
          Conheça as estratégias que <b>mudaram o jogo</b> e como aplicá-las no
          seu negócio
        </CatchPhrase>
      </BaseAnimation>
    </Banner>
  );
};

export default Index;
