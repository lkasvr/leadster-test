'use client';

import { useState } from 'react';

import StyledModal from './styles';

interface IModal {
  content: React.ReactNode | string;
  toggleModal: () => void;
  opacity: number;
  isOpen: boolean;
}

const Index = ({ content, toggleModal, isOpen, opacity = 0 }: IModal) => {
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
      {content}
    </StyledModal>
  );
};

export default Index;
