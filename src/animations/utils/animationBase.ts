import { AnimationKeyFrame } from 'web-animations-js';

export interface IBaseAnimation {
  display?: string;
  duration?: number;
  delay?: number;
  iterationCount?: number;
  direction?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
  fillMode?: 'none' | 'forwards' | 'backwards' | 'both';
  playState?: string;
}

export const animateBase = (
  element: HTMLElement | HTMLDivElement | null,
  options: IBaseAnimation,
  keyframes: AnimationKeyFrame | AnimationKeyFrame[]
) => {
  if (!element) return;
  const { delay, direction, duration, fillMode, iterationCount, playState } =
    options;

  element.style.opacity = '0';

  const animation = element.animate(keyframes, {
    duration: duration ? duration : 1000,
    delay: delay ? delay : 0,
    iterations: iterationCount ? iterationCount : 1,
    direction: direction ? direction : 'normal', // Direção da animação ('normal', 'reverse', 'alternate', 'alternate-reverse')
    fill: fillMode ? fillMode : 'both', // Comportamento de preenchimento da animação ('none', 'forwards', 'backwards', 'both')
    easing: 'ease', // Função de temporização da animação ('linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out')
  });

  if (playState === 'running') animation.play();
  if (playState === 'paused') animation.pause();
};
