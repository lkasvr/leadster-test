import Image from 'next/image';

import styled from 'styled-components';
import Modal from 'styled-react-modal';

const StyledModal = Modal.styled`
  width: 26%;
  height: 75%;
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-flow: row wrap;
  background-color: white;
  opacity: ${({ $opt }: { $opt: string }) => $opt};
  transition : all 0.3s ease-in-out;

  border-radius: 14px;
`;

export const CloseButton = styled(Image)`
  position: absolute;
  margin-top: 0.75rem;
  margin-left: 24.5%;

  cursor: pointer;
`;

export default StyledModal;
