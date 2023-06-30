import styled from 'styled-components';
import { ModalProvider, BaseModalBackground } from 'styled-react-modal';

interface IModal {
  children: React.ReactNode;
}

const FadingBackground = styled(BaseModalBackground)`
  opacity: ${(props) => props.opacity};
  transition: all 0.3s ease-in-out;
`;

export const GlobalModal = ({ children }: IModal) => {
  return (
    <ModalProvider backgroundComponent={FadingBackground}>
      {children}
    </ModalProvider>
  );
};

export default GlobalModal;
