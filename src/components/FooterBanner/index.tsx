'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

import Image from 'next/image';

import BannerContainer, {
  TriangleImage,
  CTAImageContainer,
  CTAImage,
  CallWrapper,
  TextContainer,
  Title,
  SubTitle,
  CallContainer,
  CallButton,
  InfoContainer,
} from './styles';

import { FadeIn, BackInRight, BackInLeft } from '@/animations';
import { animateBase } from '@/animations/utils/animationBase';
import { useAnimationRef } from '@/customHooks/useAnimationRef';
import { useOnScreen } from '@/customHooks/useOnScreen';
import Divider from '@/elements/Divider';
import { useTheme } from 'styled-components';

const Index = () => {
  const theme = useTheme();

  const imageContainer = useAnimationRef<HTMLDivElement>();
  const dividerRef = useAnimationRef<HTMLHRElement>();
  const callWrapper = useAnimationRef<HTMLElement>();

  const ref = useRef<HTMLElement>(null);

  const visible = useOnScreen(ref);
  const [playState, setPlayState] = useState<'paused' | 'running'>('paused');
  const [delay] = useState<number>(1000);

  useEffect(() => {
    if (visible) setPlayState('running');
    if (!visible) setPlayState('paused');
  }, [visible]);

  useEffect(() => {
    const animationData = [
      {
        ref: imageContainer,
        animation: BackInLeft,
        options: {
          playState,
          delay,
          duration: 2000,
        },
      },
      {
        ref: callWrapper,
        animation: BackInRight,
        options: {
          playState,
          delay,
          duration: 2000,
        },
      },
      {
        ref: dividerRef,
        animation: FadeIn,
        options: {
          playState,
          delay,
        },
      },
    ];

    animationData.forEach(({ ref, animation, options }) => {
      animateBase(ref.current, options, animation);
    });
  }, [playState, delay, callWrapper, dividerRef, imageContainer]);

  return (
    <BannerContainer ref={ref}>
      <TriangleImage src="/triangle-bg.png" width={1400} height={1200} alt="" />
      <CTAImageContainer ref={imageContainer}>
        <CTAImage
          src="/comparativo_img_CTA.png"
          width={520}
          height={480}
          alt=""
        />
      </CTAImageContainer>

      <CallWrapper ref={callWrapper}>
        <TextContainer>
          <Title>
            Pronto para triplicar sua <br />
            <span>Geração de Leads?</span>
          </Title>
          <SubTitle>
            Criação e ativação em <b>4 minutos</b>
          </SubTitle>
        </TextContainer>

        <Divider ref={dividerRef} $width="75%" $mt="0rem" $mb="1rem" />

        <CallContainer>
          <CallButton $bg={theme.palette.primary.main} $color="white">
            Ver Demonstração
          </CallButton>
          <Image src="/selo_RD.png" width={205} height={73} alt="Selo RD" />
        </CallContainer>

        <InfoContainer>
          <div>
            <Image
              src="/no-card-dark.webp"
              width={16}
              height={16}
              alt="Cartão com risco em cima"
            />
            <span>
              <b>Não</b> é necessário Cartão de Crédito
            </span>
          </div>
          &nbsp;|&nbsp;
          <div>
            <Image
              src="/rating.webp"
              width={92}
              height={16}
              alt="Cartão com risco em cima"
            />
            <span>
              <b>4.9</b>/5 média de satisfação
            </span>
          </div>
        </InfoContainer>
      </CallWrapper>
    </BannerContainer>
  );
};

export default Index;
