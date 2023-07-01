import Image from 'next/image';

import styled from 'styled-components';
import Modal from 'styled-react-modal';

const StyledModal = Modal.styled`
  width: 30%;
  height: 75%;
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-flow: row wrap;
  background-color: white;
  opacity: ${({ $opt }: { $opt: string }) => $opt};
  transition : all 0.3s ease-in-out;

  border-radius: 14px;

  @media ${({ theme }) => theme.breakpoints.max.sm} {
      width: 90%;
  }

  @media ${({ theme }) => theme.breakpoints.min.sm} and ${({ theme }) =>
  theme.breakpoints.max.xl} {
      width: 60%;
  }
`;

export const CloseButton = styled(Image)`
  position: absolute;
  margin-top: 0.75rem;
  margin-left: 28%;

  cursor: pointer;

  @media ${({ theme }) => theme.breakpoints.max.sm} {
    margin-top: 0.75rem;
    margin-left: 85%;
  }

  @media ${({ theme }) => theme.breakpoints.min.sm} and ${({ theme }) =>
      theme.breakpoints.max.xl} {
    margin-top: 0.75rem;
    margin-left: 55%;
  }
`;

export default StyledModal;
