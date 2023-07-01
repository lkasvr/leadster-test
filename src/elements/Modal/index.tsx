'use client';

import { useState } from 'react';

import StyledModal, { CloseButton } from './styles';

interface IModal {
  children: React.ReactNode | string;
  toggleModal: () => void;
  opacity?: number;
  isOpen?: boolean;
}

const Index = ({
  children,
  toggleModal,
  isOpen = false,
  opacity = 0,
}: IModal) => {
  const [opt, setOpacity] = useState(opacity);

  const afterOpen = () => {
    setTimeout(() => {
      setOpacity(1);
    }, 100);
  };

  const beforeClose = () =>
    new Promise((resolve) => {
      setOpacity(0);
      setTimeout(resolve, 300);
    });

  return (
    <StyledModal
      isOpen={isOpen}
      afterOpen={afterOpen}
      beforeClose={beforeClose}
      onBackgroundClick={toggleModal}
      onEscapeKeydown={toggleModal}
      $opt={opt}
    >
      <CloseButton
        src="/icons/close-icon.svg"
        width={16}
        height={16}
        alt="Botão de fechar"
        onClick={toggleModal}
      />
      {children}
    </StyledModal>
  );
};

export default Index;
