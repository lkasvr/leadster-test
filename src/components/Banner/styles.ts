import { styled } from 'styled-components';

const Banner = styled.section`
  background-color: ${(props) => props.theme.palette.secondary.main};
  height: 50vh;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  @media ${({ theme }) => theme.breakpoints.max.lg} {
    padding: 0rem;

    > hr {
      width: 86%;
    }
  }

  @media ${({ theme }) => theme.breakpoints.min.lg} and ${({ theme }) =>
      theme.breakpoints.max.xl} {
    > hr {
      width: 75%;
    }
  }
`;

export const Tag = styled.span`
  background-color: transparent;
  border: 0.15rem solid ${(props) => props.theme.palette.primary.main};
  border-radius: 4rem 4rem 4rem 1rem;
  -webkit-border-radius: 4rem 4rem 4rem 1rem;
  -moz-border-radius: 4rem 4rem 4rem 1rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
  width: 14rem;
  text-align: center;
  font-size: 0.75rem;
  font-weight: 900;
  color: ${(props) => props.theme.palette.primary.main};
`;

export const Title = styled.h1`
  margin: 0 auto;
  color: ${(props) => props.theme.palette.primary.light};
  font-size: 5rem;
  background: -webkit-linear-gradient(
    45deg,
    ${(props) => props.theme.palette.primary.main} 0%,
    ${(props) => props.theme.palette.primary.dark} 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  position: relative;

  > img {
    position: absolute;
    margin-top: 0.5rem;
    margin-left: -2rem;
  }

  @media ${({ theme }) => theme.breakpoints.max.sm} {
    font-size: 2.5rem;

    > img {
      width: 1.5rem;
      height: 1rem;
      position: absolute;
      margin-top: 0.1rem;
      margin-left: -1rem;
    }
  }
`;

export const SubTitle = styled.span`
  font-size: 3rem;
  color: ${({ theme }) => theme.palette.black.light};

  @media ${({ theme }) => theme.breakpoints.max.sm} {
    font-size: 1.8rem;
  }
`;

export const CatchPhrase = styled.p`
  font-size: 1.25rem;

  @media ${({ theme }) => theme.breakpoints.max.md} {
    font-size: 0.9rem;

    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

export default Banner;
