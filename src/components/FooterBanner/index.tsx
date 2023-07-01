'use client';

import { useEffect, useRef, useState } from 'react';

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
import BaseAnimation from '@/animations/styles';
import { animateBase } from '@/animations/utils/animationBase';
import { useOnScreen } from '@/customHooks/useOnScreen';
import Divider from '@/elements/Divider';
import { useTheme } from 'styled-components';

const Index = () => {
  const theme = useTheme();

  const animations = useRef<HTMLDivElement[]>([]);
  const ref = useRef<HTMLElement>(null);

  const visible = useOnScreen(ref);
  const [playState, setPlayState] = useState<'paused' | 'running'>('paused');
  const [delay] = useState<number>(2);

  useEffect(() => {
    if (visible) setPlayState('running');
    if (!visible) setPlayState('paused');
  }, [visible]);

  useEffect(() => {
    const animationData = [
      {
        ref: animations.current[0],
        animation: BackInLeft,
        options: {
          playState,
          delay,
        },
      },
      {
        ref: animations.current[1],
        animation: BackInRight,
        options: {
          playState,
          delay,
        },
      },
      {
        ref: animations.current[2],
        animation: BackInRight,
        options: {
          playState,
          delay,
        },
      },
      {
        ref: animations.current[3],
        animation: FadeIn,
        options: {
          playState,
          delay,
        },
      },
      {
        ref: animations.current[4],
        animation: BackInRight,
        options: {
          playState,
          delay,
        },
      },
    ];

    animationData.forEach(({ ref, animation, options }) => {
      animateBase(ref, options, animation);
    });
  }, [playState, delay]);

  return (
    <BannerContainer ref={ref}>
      <TriangleImage src="/triangle-bg.png" width={1400} height={1200} alt="" />
      <CTAImageContainer>
        <BaseAnimation
          ref={(el: HTMLDivElement) => (animations.current[0] = el)}
        >
          <CTAImage
            src="/comparativo_img_CTA.png"
            width={520}
            height={480}
            alt=""
          />
        </BaseAnimation>
      </CTAImageContainer>

      <CallWrapper>
        <TextContainer>
          <Title>
            <BaseAnimation
              ref={(el: HTMLDivElement) => (animations.current[1] = el)}
            >
              Pronto para triplicar sua <br />
              <span>Geração de Leads?</span>
            </BaseAnimation>
          </Title>
          <SubTitle>
            <BaseAnimation
              ref={(el: HTMLDivElement) => (animations.current[2] = el)}
            >
              Criação e ativação em <b>4 minutos</b>
            </BaseAnimation>
          </SubTitle>
        </TextContainer>

        <BaseAnimation
          ref={(el: HTMLDivElement) => (animations.current[3] = el)}
        >
          <Divider $width="75%" $mt="0rem" $mb="1rem" />
        </BaseAnimation>

        <BaseAnimation
          ref={(el: HTMLDivElement) => (animations.current[4] = el)}
        >
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
        </BaseAnimation>
      </CallWrapper>
    </BannerContainer>
  );
};

export default Index;
