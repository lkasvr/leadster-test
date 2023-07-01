import { useRef } from 'react';

export const useAnimationRef = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);
  return ref;
};
