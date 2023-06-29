'use client';
import { useMemo, useState } from 'react';

import Image from 'next/image';

import Pagination from '../Pagination';
import videoMockup from './mockup.json';
import Main, {
  HeaderElement,
  Label,
  Select,
  DropdownItem,
  Thumb,
  ThumbFilter,
  ThumbDesc,
} from './styles';

import Button from '@/elements/Button';
import Divider from '@/elements/Divider';
import Wrapper from '@/elements/Wrapper';
import { useTheme } from 'styled-components';

const pageSize = 9;

const Index = () => {
  const theme = useTheme();

  const [currentPage, setCurrentPage] = useState(1);

  const currentVideoData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return videoMockup.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

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
        $flexFlow="row wrap"
        $justifyContent="space-between"
        $alignItems="center"
      >
        {currentVideoData.map(({ id, title, img }) => (
          <Thumb key={id} $width={`${300}px`} $height={`${154}px`}>
            <Image src={img.src} alt={img.alt} width={300} height={154} />
            <ThumbFilter />
            <ThumbDesc>{title}</ThumbDesc>
          </Thumb>
        ))}
        <Pagination
          currentPage={currentPage}
          totalCount={videoMockup.length}
          pageSize={pageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </Wrapper>
    </Main>
  );
};

export default Index;
