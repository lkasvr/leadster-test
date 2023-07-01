import { styled } from 'styled-components';

const BaseAnimation = styled.div<{ $display?: string }>`
  display: ${({ $display }) => ($display ? $display : 'block')};
`;

export default BaseAnimation;
