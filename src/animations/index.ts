export const FadeIn = [{ opacity: 0 }, { opacity: 1 }];

export const FadeInLeft = [
  {
    opacity: 0,
    transform: 'translate3d(-100%, 0, 0)',
  },
  {
    opacity: 1,
    transform: 'translate3d(0, 0, 0)',
  },
];

export const BackInLeft = [
  {
    transform: 'translateX(-2000px) scale(0.7)',
    opacity: 0.7,
  },
  {
    transform: 'translateX(0px) scale(0.7)',
    opacity: 0.7,
  },
  {
    transform: 'scale(1)',
    opacity: 1,
  },
];

export const BackInRight = [
  {
    transform: 'translateX(2000px) scale(0.7)',
    opacity: 0.7,
  },
  {
    transform: 'translateX(0px) scale(0.7)',
    opacity: 0.7,
  },
  {
    transform: 'scale(1)',
    opacity: 1,
  },
];
