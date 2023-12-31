import { useState, useEffect, RefObject } from 'react';

export const useOnScreen = (
  ref: RefObject<HTMLElement>,
  rootMargin = '0px'
) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );

    const currentElement = ref?.current;

    if (currentElement) observer.observe(currentElement);

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  });

  return isVisible;
};
