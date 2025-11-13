import { useEffect, useRef, useState } from "react";

const useParallaxShift = <T extends HTMLElement>(speed = 0.12) => {
  const ref = useRef<T | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    let frame = 0;

    const updateOffset = () => {
      if (!ref.current) {
        return;
      }
      const rect = ref.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const relativeY = (rect.top + rect.height / 2 - viewportHeight / 2) / viewportHeight;
      setOffset(-relativeY * viewportHeight * speed);
      frame = 0;
    };

    const handleScroll = () => {
      if (frame) {
        return;
      }
      frame = window.requestAnimationFrame(updateOffset);
    };

    updateOffset();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [speed]);

  return { ref, offset };
};

export default useParallaxShift;
