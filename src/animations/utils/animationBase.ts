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
  const {
    display,
    delay,
    direction,
    duration,
    fillMode,
    iterationCount,
    playState,
  } = options;
  element.style.display = display ?? 'block';

  // Lógica da animação programática aqui
  // Exemplo: fade in
  element.style.opacity = '0';

  const animation = element.animate(keyframes, {
    duration: duration ? duration : 1000, // Duração da animação em milissegundos
    delay: delay ? delay : 0, // Atraso antes do início da animação em milissegundos
    iterations: iterationCount ? iterationCount : 1, // Número de iterações da animação
    direction: direction ? direction : 'normal', // Direção da animação ('normal', 'reverse', 'alternate', 'alternate-reverse')
    fill: fillMode ? fillMode : 'both', // Comportamento de preenchimento da animação ('none', 'forwards', 'backwards', 'both')
    easing: 'ease', // Função de temporização da animação ('linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out')
  });

  if (playState === 'running') animation.play();
  if (playState === 'paused') animation.pause();
};
