import Modal from 'styled-react-modal';

const StyledModal = Modal.styled`
  width: 25%;
  height: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: ${({ $opt }: { $opt: string }) => $opt};
  transition : all 0.3s ease-in-out;

  border-radius: 14px;
`;

export default StyledModal;
