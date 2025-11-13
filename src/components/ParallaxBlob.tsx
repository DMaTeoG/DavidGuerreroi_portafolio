"use client";

import useParallaxShift from "@/hooks/useParallaxShift";

type ParallaxBlobProps = {
  className?: string;
  speed?: number;
};

const ParallaxBlob = ({ className, speed }: ParallaxBlobProps) => {
  const { ref, offset } = useParallaxShift<HTMLSpanElement>(speed);
  const combinedClassName = [
    "pointer-events-none absolute blur-3xl transition-transform duration-700 ease-out will-change-transform",
    className ?? "",
  ]
    .join(" ")
    .trim();

  return (
    <span
      ref={ref}
      aria-hidden
      className={combinedClassName}
      style={{ transform: `translate3d(0, ${offset}px, 0)` }}
    />
  );
};

export default ParallaxBlob;
