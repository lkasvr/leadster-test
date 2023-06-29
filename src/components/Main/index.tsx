'use client';
import Image from 'next/image';

import videoMockup from './mockup.json';
import Main, {
  HeaderElement,
  Label,
  Select,
  DropdownItem,
  Thumb,
} from './styles';

import Button from '@/elements/Button';
import Divider from '@/elements/Divider';
import Wrapper from '@/elements/Wrapper';
import { useTheme } from 'styled-components';

const Index = () => {
  const theme = useTheme();

  return (
    <Main>
      <HeaderElement>
        <Wrapper
          $width="60%"
          $flexFlow="row nowrap"
          $justifyContent="space-between"
          $alignItems="center"
        >
          <Button
            $bg="transparent"
            $color={theme.palette.black.light}
            $hoverColor={theme.palette.primary.main}
          >
            Agências
          </Button>

          <Button
            $bg="transparent"
            $color={theme.palette.black.light}
            $hoverColor={theme.palette.primary.main}
          >
            Chatbot
          </Button>

          <Button
            $bg="transparent"
            $color={theme.palette.black.light}
            $hoverColor={theme.palette.primary.main}
          >
            Marketing Digital
          </Button>

          <Button
            $bg="transparent"
            $color={theme.palette.black.light}
            $hoverColor={theme.palette.primary.main}
          >
            Geração de Leads
          </Button>

          <Button
            $bg="transparent"
            $color={theme.palette.black.light}
            $hoverColor={theme.palette.primary.main}
          >
            Mídia Paga
          </Button>
        </Wrapper>

        <Wrapper
          $width="25%"
          $flexFlow="row nowrap"
          $justifyContent="space-between"
          $alignItems="center"
        >
          <Label htmlFor="cat">Ordernar por</Label>

          <Select name="cat" id="cars">
            <DropdownItem value="volvo">Data de Publicação</DropdownItem>
          </Select>
        </Wrapper>

        <Divider $width="100%" $mt="1.25rem" $mb="2rem" />
      </HeaderElement>
      <Wrapper
        $width="50%"
        $flexFlow="row nowrap"
        $justifyContent="space-between"
        $alignItems="center"
      >
        {videoMockup.map(({ id, title, imgSrc }) => (
          <Thumb key={id}>
            <Image
              src={imgSrc}
              alt="MArketing 2024, e busto de um homem loiro "
              width={362}
              height={204}
            />
            <p>{title}</p>
          </Thumb>
        ))}
      </Wrapper>
    </Main>
  );
};

export default Index;
