import { useEffect, useRef, useState, type RefObject } from "react";

type RevealOptions = IntersectionObserverInit;

interface RevealHookResult<T extends HTMLElement> {
  ref: RefObject<T | null>;
  isVisible: boolean;
}

const defaultOptions: IntersectionObserverInit = {
  threshold: 0.2,
  rootMargin: "0px",
};

function useRevealOnScroll<T extends HTMLElement>(
  options?: RevealOptions
): RevealHookResult<T> {
  const elementRef = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) {
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            obs.disconnect();
          }
        });
      },
      { ...defaultOptions, ...options }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return { ref: elementRef, isVisible };
}

export default useRevealOnScroll;
