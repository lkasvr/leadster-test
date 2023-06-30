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
`;

// IMAGE CONTAINER

export const TriangleImage = styled(Image)`
  position: absolute;
  margin-top: 30%;
  right: 51%;
  z-index: 0;
`;

export const CTAImage = styled(Image)``;

export const CTAImageContainer = styled.div`
  z-index: 1;
  width: 50%;
  padding: 0 0 0 7%;
`;

// TEXT CONTAINER

export const CallWrapper = styled.article`
  z-index: 1;
  width: 50%;
`;

export const TextContainer = styled.article`
  width: 50%;
  display: flex;
  flex-flow: row wrap;
`;

export const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.black.light};
  margin-bottom: 1rem;

  > span {
    font-weight: 700;
  }
`;

export const SubTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.black.light};
  margin-bottom: 1rem;
`;

export const CallContainer = styled.article`
  width: 52%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
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
`;

export default BannerContainer;
