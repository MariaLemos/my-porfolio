import { useState, useEffect } from "react";

const useIntersection = (element: React.RefObject<HTMLElement>) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const currentElement = element.current;
    if (currentElement !== null) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setState(entry.isIntersecting);
        },
        {
          rootMargin: `-${
            currentElement.offsetHeight > 80
              ? 80
              : currentElement.offsetHeight / 2
          }px`,
        }
      );

      element && observer.observe(currentElement);

      return () => {
        if (currentElement !== null) {
          return observer.unobserve(currentElement);
        }
      };
    }
    // eslint-disable-next-line
  }, []);

  return isVisible;
};
export default useIntersection;
