import { styled } from 'styled-components';

const Banner = styled.section`
  background-color: #f0f8ff;
  margin: 0 auto;
  height: 50vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
`;

export const Title = styled.h1`
  margin: 0 auto;
  color: ${(props) => props.theme.palette.primary.light};
  font-size: 4rem;
  background: -webkit-linear-gradient(
    45deg,
    ${(props) => props.theme.palette.primary.light} 0%,
    ${(props) => props.theme.palette.primary.dark} 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const SubTitle = styled.span`
  font-size: 2rem;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 2px solid #d5dbde;
  border-radius: 4px;
  text-align: center;
  width: 30%;
`;

export default Banner;
