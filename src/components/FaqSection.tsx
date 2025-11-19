import { useState } from "react";

import ParallaxBlob from "@/components/ParallaxBlob";
import useRevealOnScroll from "@/hooks/useRevealOnScroll";
import { FaqData } from "@/types/portfolio";

type FaqSectionProps = {
  data: FaqData;
};

const FaqSection = ({ data }: FaqSectionProps) => {
  const { ref, isVisible } = useRevealOnScroll<HTMLElement>();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!data || data.items.length === 0) {
    return null;
  }

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      ref={ref}
      id="faq"
      className={`relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-rose-50 via-white to-rose-100 py-24 px-6 transition-all transition-colors duration-700 ease-out dark:from-black dark:via-neutral-950 dark:to-rose-950 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <ParallaxBlob className="-left-16 top-8 h-60 w-60 rounded-full bg-rose-200/40 dark:bg-rose-900/40" speed={0.12} />
      <ParallaxBlob className="-right-10 bottom-0 h-48 w-48 rounded-full bg-rose-300/30 dark:bg-rose-900/30" speed={0.08} />
      <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-10">
        <div
          className={`text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-500 dark:text-rose-300">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">{data.title}</h2>
          {data.subtitle ? (
            <p className="mt-3 text-base text-gray-600 dark:text-neutral-200">{data.subtitle}</p>
          ) : null}
        </div>
        <div className="space-y-4">
          {data.items.map((item, index) => {
            const isOpen = index === openIndex;
            return (
              <article
                key={item.question}
                className={`rounded-3xl border border-rose-100 bg-white/85 p-6 shadow-sm transition-all transition-colors duration-700 dark:border-rose-800 dark:bg-black/60 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${Math.min(index, 6) * 70}ms` }}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between text-left text-lg font-semibold text-gray-900 dark:text-white"
                  aria-expanded={isOpen}
                  onClick={() => handleToggle(index)}
                >
                  <span>{item.question}</span>
                  <span
                    aria-hidden
                    className={`ms-6 inline-flex h-8 w-8 items-center justify-center rounded-full border border-rose-200 text-base font-bold text-rose-500 transition-transform dark:border-rose-800 dark:text-rose-300 ${
                      isOpen ? "bg-rose-50 dark:bg-black/40" : "bg-white/80 dark:bg-black/40"
                    }`}
                  >
                    {isOpen ? "\u2212" : "+"}
                  </span>
                </button>
                <div
                  className={`overflow-hidden text-sm text-gray-600 transition-all duration-500 ease-out dark:text-neutral-200 ${
                    isOpen ? "mt-4 max-h-64 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="leading-relaxed">{item.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
