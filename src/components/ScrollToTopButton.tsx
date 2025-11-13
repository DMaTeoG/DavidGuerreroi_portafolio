"use client";

import { useCallback, useEffect, useState } from "react";

const circumference = 2 * Math.PI * 18;

const ScrollToTopButton = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = useCallback(() => {
    if (typeof window === "undefined") {
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const updateProgress = () => {
      const documentElement = document.documentElement;
      const scrollTop = documentElement.scrollTop || window.scrollY;
      const scrollHeight = documentElement.scrollHeight - window.innerHeight;
      const ratio = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      setProgress(Math.min(1, Math.max(0, ratio)));
      setIsVisible(scrollTop > window.innerHeight * 0.2);
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const dashOffset = circumference * (1 - progress);

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-rose-500 shadow-lg ring-1 ring-rose-200 transition-all duration-300 hover:-translate-y-1 hover:bg-white dark:bg-black/80 dark:text-rose-300 dark:ring-rose-700 ${
        isVisible ? "opacity-100 pointer-events-auto" : "pointer-events-none opacity-0"
      }`}
      aria-label="Volver arriba"
    >
      <svg className="absolute h-14 w-14" viewBox="0 0 44 44" aria-hidden>
        <circle
          className="text-rose-100 dark:text-rose-900"
          stroke="currentColor"
          strokeWidth="3"
          fill="transparent"
          r="18"
          cx="22"
          cy="22"
        />
        <circle
          className="text-rose-500 dark:text-rose-300 transition-all duration-200"
          stroke="currentColor"
          strokeWidth="3"
          fill="transparent"
          r="18"
          cx="22"
          cy="22"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
        />
      </svg>
      <span className="relative z-10 font-semibold text-xs uppercase tracking-wide">Top</span>
    </button>
  );
};

export default ScrollToTopButton;
