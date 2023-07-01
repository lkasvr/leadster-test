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

import { useOnScreen } from '@/customHooks/useOnScreen';
import Divider from '@/elements/Divider';
import { FadeIn, BackInRight, BackInLeft } from '@/styles/animations/index';
import { useTheme } from 'styled-components';

const Index = () => {
  const theme = useTheme();

  const ref = useRef<HTMLElement>(null);
  const visible = useOnScreen(ref);
  const [playState, setPlayState] = useState<'paused' | 'running'>('paused');
  const [delay] = useState<number>(2);

  useEffect(() => {
    if (visible) setPlayState('running');
    if (!visible) setPlayState('paused');
  }, [visible]);

  return (
    <BannerContainer ref={ref}>
      <TriangleImage src="/triangle-bg.png" width={1400} height={1200} alt="" />
      <CTAImageContainer>
        <BackInLeft $delay={`${delay}s`} $playState={playState}>
          <CTAImage
            src="/comparativo_img_CTA.png"
            width={520}
            height={480}
            alt=""
          />
        </BackInLeft>
      </CTAImageContainer>

      <CallWrapper>
        <TextContainer>
          <Title>
            <BackInRight $delay={`${delay}s`} $playState={playState}>
              Pronto para triplicar sua <br />
              <span>Geração de Leads?</span>
            </BackInRight>
          </Title>
          <SubTitle>
            <BackInRight $delay={`${delay}s`} $playState={playState}>
              Criação e ativação em <b>4 minutos</b>
            </BackInRight>
          </SubTitle>
        </TextContainer>

        <FadeIn $delay={`${delay}s`} $playState={playState}>
          <Divider $width="75%" $mt="0rem" $mb="1rem" />
        </FadeIn>

        <BackInRight $delay={`${delay}s`} $playState={playState}>
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
        </BackInRight>
      </CallWrapper>
    </BannerContainer>
  );
};

export default Index;
