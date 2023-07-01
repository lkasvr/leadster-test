'use client';
import { Fragment, useEffect, useRef, useMemo, useState } from 'react';

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
  VideoTitle,
  ContentVideoContainer,
  ContentVideoWrapper,
  MaterialWithVideo,
} from './styles';

import { FadeIn } from '@/animations';
import { animateBase } from '@/animations/utils/animationBase';
import VideoPlayer from '@/components/VideoPlayer';
import Button from '@/elements/Button';
import Divider from '@/elements/Divider';
import Modal from '@/elements/Modal';
import Wrapper from '@/elements/Wrapper';
import { CloudDownloadSVG } from '@/styles/icons/SVG';
import { useTheme } from 'styled-components';

type DataVideo = {
  id: number;
  title: string;
  videoURL: string;
  img: {
    src: string;
    alt: string;
  };
  files: { name: string }[];
};

const Index = () => {
  const theme = useTheme();

  const ref = useRef<HTMLElement>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [currentTab, setCurrentTab] = useState<string>('Geração de Leads');
  const [pageSize, setPageSize] = useState(9);

  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);

  const [currentCardVideo, setCurrentCardVideo] = useState<DataVideo>();

  const currentVideoData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return videoMockup.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, pageSize]);

  useEffect(() => {
    const { innerWidth } = window;
    if (innerWidth <= 1024) {
      setPageSize(6);
    } else setPageSize(9);
  }, []);

  useEffect(() => animateBase(ref.current, { delay: 1000 * 3.2 }, FadeIn), []);

  const toggleModal = () => {
    setOpacity(0);
    setIsOpen(!isOpen);
  };

  const handleClickCardVideo = ({
    id,
    title,
    videoURL,
    img,
    files,
  }: DataVideo) => {
    toggleModal();
    setCurrentCardVideo({ id, title, videoURL, img, files });
  };

  return (
    <Main ref={ref}>
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
        {currentVideoData.map(({ id, title, videoURL, img, files }) => (
          <Fragment key={id}>
            <Thumb
              key={id}
              $width={`${300}px`}
              $height={`${154}px`}
              onClick={() =>
                handleClickCardVideo({ id, title, videoURL, img, files })
              }
            >
              <Image src={img.src} alt={img.alt} width={300} height={154} />
              <ThumbFilter />
              <PlayThumbnail
                src="/icons/play-thumbnail.svg"
                alt="Thumbnail do botão play"
                width={140}
                height={67}
              />
              <ThumbDesc>
                {title} - {id}
              </ThumbDesc>
            </Thumb>
          </Fragment>
        ))}
        <Divider $width="100%" $mt="2rem" $mb="2rem" />
        <Pagination
          label="Página"
          currentPage={currentPage}
          totalCount={videoMockup.length}
          pageSize={pageSize}
          onPageChange={(page) => setCurrentPage(page)}
          arrows={false}
        />
      </Wrapper>
      <Modal toggleModal={toggleModal} isOpen={isOpen} opacity={opacity}>
        <VideoTitle>
          <span>Webinar:</span> Como aumentar sua Geração de Leads feat. Traktor
        </VideoTitle>
        <VideoPlayer
          url={
            currentCardVideo?.videoURL
              ? currentCardVideo?.videoURL
              : 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
          }
          width="100%"
          height="50%"
        />
        <ContentVideoContainer>
          <ContentVideoWrapper>
            <h4>Descrição</h4>
            <Divider $width="100%" $mt="0.5rem" $mb="0.5rem" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adiping elit. Morbi eu
              cursus massa. Etiam efficitur est at dolor et sollicitudin
              ullamcorper at et anim. Suspendisse eleifend metus ultrices
              iaculis aliquam.
            </p>
          </ContentVideoWrapper>
          <ContentVideoWrapper>
            <h4>Downloads</h4>
            <Divider $width="100%" $mt="0.5rem" $mb="0.5rem" />
            <div>
              {currentCardVideo?.files.map(({ name }) => {
                let color = '';

                switch (name) {
                  case 'Spreadsheet.xls':
                    color = theme.palette.green.dark;
                    break;
                  case 'Document.doc':
                    color = theme.palette.primary.main;
                    break;
                  case 'Presentation.ppt':
                    color = theme.palette.yellow.main;
                    break;
                  case 'Folder.zip':
                    color = theme.palette.gray.dark;
                    break;
                }

                return (
                  <MaterialWithVideo key={name} $color={color}>
                    <div>
                      <CloudDownloadSVG color={color} width={20} height={20} />
                    </div>
                    <aside>
                      <span>{name}</span>
                    </aside>
                  </MaterialWithVideo>
                );
              })}
            </div>
          </ContentVideoWrapper>
        </ContentVideoContainer>
      </Modal>
    </Main>
  );
};

export default Index;
