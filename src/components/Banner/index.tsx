'use client';

import { useEffect, useMemo, useRef } from 'react';

import Image from 'next/image';

import Banner, { Tag, Title, SubTitle, CatchPhrase } from './styles';

import { FadeIn, BackInLeft } from '@/animations';
import { animateBase } from '@/animations/utils/animationBase';
import { useAnimationRef } from '@/customHooks/useAnimationRef';
import Divider from '@/elements/Divider';

const Index = () => {
  const tagRef = useAnimationRef<HTMLSpanElement>();
  const subTitleRef = useAnimationRef<HTMLSpanElement>();
  const titleRef = useAnimationRef<HTMLHeadingElement>();
  const dividerRef = useAnimationRef<HTMLHRElement>();
  const catchPhraseRef = useAnimationRef<HTMLParagraphElement>();

  useEffect(() => {
    const animationData = [
      {
        ref: tagRef,
        animation: FadeIn,
        options: {
          duration: 800,
          delay: 1000 * 3.2,
        },
      },
      {
        ref: subTitleRef,
        animation: BackInLeft,
        options: { duration: 1000 },
      },
      {
        ref: titleRef,
        animation: BackInLeft,
        options: { duration: 800, delay: 1400 },
      },
      {
        ref: dividerRef,
        animation: FadeIn,
        options: { duration: 800, delay: 1000 * 3.2 },
      },
      {
        ref: catchPhraseRef,
        animation: BackInLeft,
        options: { duration: 1000, delay: 1000 * 2.2 },
      },
    ];

    animationData.forEach(({ ref, animation, options }) => {
      animateBase(ref.current, options, animation);
    });
  }, [catchPhraseRef, dividerRef, subTitleRef, tagRef, titleRef]);

  return (
    <Banner>
      <Tag ref={tagRef}>WEBINARS EXCLUSIVOS</Tag>

      <SubTitle ref={subTitleRef}>Menos Conversinha,</SubTitle>

      <Title ref={titleRef}>
        Mais Conversão
        <Image
          src="/asset-header.png"
          width={49}
          height={32}
          alt="Raios saindo da letra O"
        />
      </Title>

      <Divider ref={dividerRef} $width="40%" $mt="0.5rem" $mb="0.5rem" />

      <CatchPhrase ref={catchPhraseRef}>
        Conheça as estratégias que <b>mudaram o jogo</b> e como aplicá-las no
        seu negócio
      </CatchPhrase>
    </Banner>
  );
};

export default Index;
