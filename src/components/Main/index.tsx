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
  PlayThumbnail,
  ThumbDesc,
} from './styles';

import Button from '@/elements/Button';
import Divider from '@/elements/Divider';
import Modal from '@/elements/Modal';
import Wrapper from '@/elements/Wrapper';
import { useTheme } from 'styled-components';

const pageSize = 9;

const Index = () => {
  const theme = useTheme();

  const [currentPage, setCurrentPage] = useState(1);
  const [currentTab, setCurrentTab] = useState<string>('Geração de Leads');

  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);

  const toggleModal = () => {
    setOpacity(0);
    setIsOpen(!isOpen);
  };

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
            $active={currentTab === 'Agências'}
            onClick={() => setCurrentTab('Agências')}
          >
            Agências
          </Button>

          <Button
            $bg="transparent"
            $color={theme.palette.black.light}
            $hoverColor={theme.palette.primary.main}
            $active={currentTab === 'Chatbot'}
            onClick={() => setCurrentTab('Chatbot')}
          >
            Chatbot
          </Button>

          <Button
            $bg="transparent"
            $color={theme.palette.black.light}
            $hoverColor={theme.palette.primary.main}
            $active={currentTab === 'Marketing Digital'}
            onClick={() => setCurrentTab('Marketing Digital')}
          >
            Marketing Digital
          </Button>

          <Button
            $bg="transparent"
            $color={theme.palette.black.light}
            $hoverColor={theme.palette.primary.main}
            $active={currentTab === 'Geração de Leads'}
            onClick={() => setCurrentTab('Geração de Leads')}
          >
            Geração de Leads
          </Button>

          <Button
            $bg="transparent"
            $color={theme.palette.black.light}
            $hoverColor={theme.palette.primary.main}
            $active={currentTab === 'Mídia Paga'}
            onClick={() => setCurrentTab('Mídia Paga')}
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
          <Thumb
            key={id}
            $width={`${300}px`}
            $height={`${154}px`}
            onClick={toggleModal}
          >
            <Image src={img.src} alt={img.alt} width={300} height={154} />
            <ThumbFilter />
            <PlayThumbnail
              src="/play-thumbnail.svg"
              alt="Thumbnail do botão play"
              width={140}
              height={67}
            />
            <ThumbDesc>
              {title} - {id}
            </ThumbDesc>
          </Thumb>
        ))}
        <Pagination
          label="Página"
          currentPage={currentPage}
          totalCount={videoMockup.length}
          pageSize={pageSize}
          onPageChange={(page) => setCurrentPage(page)}
          arrows={false}
        />
      </Wrapper>
      <Modal
        toggleModal={toggleModal}
        isOpen={isOpen}
        opacity={opacity}
        content={'olá mundo'}
      />
    </Main>
  );
};

export default Index;
