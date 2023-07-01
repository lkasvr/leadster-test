import BaseAnimation from './styles';

import styled, { keyframes } from 'styled-components';
import { Keyframes } from 'styled-components/dist/types';

// Animation Mockup
const animation = (animation: Keyframes) => {
  return styled(BaseAnimation)`
    animation-name: ${animation};
  `;
};
// ***

const FadeInAnimation = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;
export const FadeIn = animation(FadeInAnimation);

const FadeInLeftAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
export const FadeInLeft = animation(FadeInLeftAnimation);

const BackInLeftAnimation = keyframes`
  0% {
    transform: translateX(-2000px) scale(0.7);
    opacity: 0.7;
  }

  80% {
    transform: translateX(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
`;
export const BackInLeft = animation(BackInLeftAnimation);

const BackInRightAnimation = keyframes`
  0% {
    transform: translateX(2000px) scale(0.7);
    opacity: 0.7;
  }

  80% {
    transform: translateX(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
`;
export const BackInRight = animation(BackInRightAnimation);
