'use client';

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

import Divider from '@/elements/Divider';
import { useTheme } from 'styled-components';

//import Divider from '@/elements/Divider';

const Index = () => {
  const theme = useTheme();

  return (
    <BannerContainer>
      <TriangleImage src="/triangle-bg.png" width={1400} height={1200} alt="" />
      <CTAImageContainer>
        <CTAImage
          src="/comparativo_img_CTA.png"
          width={520}
          height={480}
          alt=""
        />
      </CTAImageContainer>
      <CallWrapper>
        <TextContainer>
          <Title>
            Pronto para triplicar sua <br />
            <span>Geração de Leads?</span>
          </Title>
          <SubTitle>
            Criação e ativação em <b>4 minutos</b>
          </SubTitle>
        </TextContainer>

        <Divider $width="75%" $mt="0rem" $mb="1rem" />

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
