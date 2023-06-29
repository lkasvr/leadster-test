import { styled } from 'styled-components';

const Banner = styled.section`
  background-color: #f0f8ff;
  margin: 0 auto;
  height: 60vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
`;

export const Title = styled.h1`
  margin: 0 auto;
  color: rgb(44, 131, 251);
  font-size: 4rem;
  background: -webkit-linear-gradient(
    45deg,
    rgba(44, 131, 251, 1) 0%,
    rgba(31, 118, 240, 1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const SubTitle = styled.span`
  font-size: 2rem;
`;

export default Banner;
