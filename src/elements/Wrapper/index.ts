import { styled } from 'styled-components';

interface IWrapper {
  $width: string;
  $flexFlow: string;
  $justifyContent: string;
  $alignItems: string;
}

const Wrapper = styled.div<IWrapper>`
  width: ${({ $width }) => $width};
  display: flex;
  flex-flow: ${({ $flexFlow }) => $flexFlow};
  justify-content: ${({ $justifyContent }) => $justifyContent};
  align-items: ${({ $alignItems }) => $alignItems};
`;

export default Wrapper;
