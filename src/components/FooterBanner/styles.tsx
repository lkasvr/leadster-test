import Image from 'next/image';

import Button from '@/elements/Button';
import { styled } from 'styled-components';

const BannerContainer = styled.section`
  overflow: hidden;
  position: relative;
  background-color: ${(props) => props.theme.palette.secondary.main};
  height: 65vh;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  gap: 0.25rem;

  @media ${({ theme }) => theme.breakpoints.max.lg} {
    height: 120vh;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0.75rem;
  }

  @media ${({ theme }) => theme.breakpoints.min.lg} and ${({ theme }) =>
    theme.breakpoints.max.xl} {
    height: 80vh;
  }
`;

// IMAGE CONTAINER

export const TriangleImage = styled(Image)`
  position: absolute;
  margin-top: 30%;
  right: 51%;
  z-index: 0;
`;

export const CTAImage = styled(Image)`
  @media ${({ theme }) => theme.breakpoints.max.sm} {
    width: 100%;
    height: 100%;
  }
`;

export const CTAImageContainer = styled.div`
  z-index: 1;
  width: 50%;
  padding: 0 0 0 7%;

  @media ${({ theme }) => theme.breakpoints.max.xl} {
    padding: 0;
    width: 100%;
    height: 45%;
    display: flex;
    justify-content: center;
  }
`;

// TEXT CONTAINER

export const CallWrapper = styled.article`
  z-index: 1;
  width: 50%;

  @media ${({ theme }) => theme.breakpoints.max.xl} {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;

    > hr {
      width: 90%;
    }
  }
`;

export const TextContainer = styled.article`
  width: 80%;
  display: flex;
  flex-flow: column wrap;

  @media ${({ theme }) => theme.breakpoints.max.xl} {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }
`;

export const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.black.light};
  margin-bottom: 1rem;

  > span {
    font-weight: 700;
  }

  @media ${({ theme }) => theme.breakpoints.max.xl} {
    width: 100%;
    font-size: 1.75rem;
    text-align: center;
  }
`;

export const SubTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.black.light};
  margin-bottom: 1rem;

  @media ${({ theme }) => theme.breakpoints.max.xl} {
    font-size: 1.25rem;
  }
`;

export const CallContainer = styled.article`
  width: 52%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  gap: 1rem;

  @media ${({ theme }) => theme.breakpoints.max.sm} {
    > button {
      padding: 0.25rem;
      font-size: 1rem;
    }
  }

  @media ${({ theme }) => theme.breakpoints.max.lg} {
    justify-content: center;
  }

  @media (min-width: 1025px) and (max-width: 1880px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

export const CallButton = styled(Button)`
  text-transform: uppercase;
  padding: 1.25rem;
  font-size: 1.25rem;
  font-weight: 600;
  height: 4.25rem;
`;

export const InfoContainer = styled.aside`
  width: 75%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;

  div {
    width: 42.21%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    margin-right: 0.5rem;

    font-weight: 500;
    color: ${({ theme }) => theme.palette.black.light};

    > span {
      margin-left: 0.5rem;
    }
  }

  div ~ div {
    width: 43%;
    margin-left: 0.5rem;
  }

  @media ${({ theme }) => theme.breakpoints.max.xl} {
    width: 100%;
    flex-flow: column wrap;
    justify-content: center;

    div,
    div ~ div {
      width: 100%;
      flex-flow: row wrap;
      justify-content: center;
      margin-right: 0;
      margin-left: 0;
    }
  }
`;

export default BannerContainer;
