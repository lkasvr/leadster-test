import Image from 'next/image';

import hexToRgba from 'hex-to-rgba';
import { styled } from 'styled-components';

const Main = styled.main`
  margin-top: 5rem;
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  @media ${({ theme }) => theme.breakpoints.max.lg} {
    margin-top: 2rem;

    > div {
      width: 100%;
      justify-content: center;
    }
  }

  @media ${({ theme }) => theme.breakpoints.min.lg} and ${({ theme }) =>
      theme.breakpoints.max.xl} {
    > div {
      width: 100%;
      justify-content: center;
    }
  }
`;

export const HeaderElement = styled.header`
  width: 50%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  @media ${({ theme }) => theme.breakpoints.max.md} {
    width: 100%;
    height: 25rem;
    flex-flow: column wrap;
    justify-content: space-evenly;

    > div {
      width: 60%;
      flex-flow: column nowrap;
      justify-content: center;
      gap: 1.25rem;

      > button {
        width: 100%;
      }

      > label {
        padding-top: 1rem;
      }

      > select {
        padding: 0.75rem;
        width: 80%;
      }
    }

    div + div {
      gap: 0;
    }

    > hr {
      width: 80%;
    }
  }

  @media ${({ theme }) => theme.breakpoints.min.md} and ${({ theme }) =>
      theme.breakpoints.max.xl} {
    width: 100%;
    height: 15rem;
    flex-flow: column wrap;
    justify-content: space-evenly;

    > div {
      width: 100%;
      flex-flow: row nowrap;
      justify-content: center;
      gap: 0.75rem;
    }

    > hr {
      width: 80%;
    }
  }
`;

export const Select = styled.select`
  background-color: transparent;
  padding: 0.25rem;
  border-radius: 0.5rem;
  -webkit-border-radius: 0.5rem;
  -moz-border-radius: 0.5rem;

  @media ${({ theme }) => theme.breakpoints.max.lg} {
    padding: 0.2rem;
  }
`;

export const Label = styled.label`
  padding: 0.25rem;
  font-size: 0.8rem;
  font-weight: bold;
`;

export const DropdownItem = styled.option``;

export const ThumbFilter = styled.div`
  display: none;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  -webkit-border-right-radius: 16px;
  -moz-border-left-radius: 16px;
  position: absolute;
  top: 0;
  opacity: 0.25;
`;

export const PlayThumbnail = styled(Image)`
  display: none;
`;

export const Thumb = styled.article<{ $width: string; $height: string }>`
  padding-bottom: 0.5rem;
  margin-bottom: 1.25rem;
  width: ${({ $width }) => $width ?? '33%'};
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  border-radius: 16px;
  -webkit-border-radius: 16px;
  -moz-border-radius: 16px;

  box-shadow: 6px 15px 30px -10px rgba(149, 153, 155, 0.75);
  -webkit-box-shadow: 6px 15px 30px -10px rgba(149, 153, 155, 0.75);
  -moz-box-shadow: 6px 15px 30px -10px rgba(149, 153, 155, 0.75);

  filter: grayscale(0%);
  -webkit-filter: grayscale(0%);

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.palette.primary.main};

    ${ThumbFilter} {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${({ theme }) => theme.palette.primary.main};
      width: ${({ $width }) => $width};
      height: ${({ $height }) => $height};
    }

    ${PlayThumbnail} {
      position: absolute;
      display: flex;
      margin-bottom: 4.25rem;
    }
  }

  > img {
    background-size: cover;
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
    -webkit-border-right-radius: 16px;
    -moz-border-left-radius: 16px;
  }

  @media ${({ theme }) => theme.breakpoints.max.xl} {
    margin-right: 1rem;
  }
`;

export const ThumbDesc = styled.p`
  padding: 1rem;
  width: 100%;
  font-size: 0.95rem;
  font-weight: bold;
`;

export const VideoTitle = styled.h3`
  border-radius: 10px;
  border-top: 5px solid ${({ theme }) => theme.palette.primary.main};
  width: 100%;
  height: 10%;
  text-align: center;
  padding: 8% 20% 0 20%;
  font-weight: 600;

  > span {
    color: ${({ theme }) => theme.palette.primary.main};
  }

  @media ${({ theme }) => theme.breakpoints.min.md} and ${({ theme }) =>
      theme.breakpoints.max.xl} {
    padding: 5% 20% 0 20%;
  }
`;

export const ContentVideoContainer = styled.section`
  padding: 0 5% 1% 5%;
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
`;

export const ContentVideoWrapper = styled.aside`
  width: 100%;

  > h4 {
    font-size: 1rem;
    font-weight: 600;
  }

  > p {
    font-size: 0.85rem;
  }

  > div {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
  }
`;

export const MaterialWithVideo = styled.div<{ $color: string }>`
  width: 30%;
  display: flex;
  flex-flow: row nowrap;

  > div {
    padding: 0.2rem;
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ $color }) => hexToRgba($color, 0.5)};
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  div ~ aside {
    padding: 0.2rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ $color }) => hexToRgba($color, 0.25)};
    font-size: 0.75rem;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;

    > span {
      color: ${({ $color }) => hexToRgba($color, 1)};
    }
  }
`;

export default Main;
