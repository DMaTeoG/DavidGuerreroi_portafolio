import type { ReactElement } from "react";
import {
  SiCss3,
  SiDjango,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTypescript,
} from "react-icons/si";

import ParallaxBlob from "@/components/ParallaxBlob";
import useRevealOnScroll from "@/hooks/useRevealOnScroll";
import { TechnologiesData } from "@/types/portfolio";

type TechnologiesSectionProps = {
  data: TechnologiesData;
};

const iconClass = "h-9 w-9";

const iconMap: Partial<Record<string, ReactElement>> = {
  HTML: <SiHtml5 aria-hidden className={`${iconClass} text-orange-500`} />,
  CSS: <SiCss3 aria-hidden className={`${iconClass} text-blue-500`} />,
  JavaScript: <SiJavascript aria-hidden className={`${iconClass} text-yellow-400`} />,
  React: <SiReact aria-hidden className={`${iconClass} text-sky-400`} />,
  "Next.js": <SiNextdotjs aria-hidden className={`${iconClass} text-gray-900 dark:text-white`} />,
  "Node.js": <SiNodedotjs aria-hidden className={`${iconClass} text-lime-500`} />,
  Python: <SiPython aria-hidden className={`${iconClass} text-blue-400`} />,
  Django: <SiDjango aria-hidden className={`${iconClass} text-emerald-600`} />,
  TypeScript: <SiTypescript aria-hidden className={`${iconClass} text-blue-500`} />,
};

const getFallbackIcon = (label: string): ReactElement => (
  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-100 text-sm font-semibold text-rose-500 dark:bg-rose-900/40 dark:text-rose-200">
    {label.charAt(0).toUpperCase()}
  </span>
);

const TechnologiesSection = ({ data }: TechnologiesSectionProps) => {
  const { ref, isVisible } = useRevealOnScroll<HTMLElement>();

  return (
    <section
      ref={ref}
      id="tecnologias"
      className={`relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-rose-50 via-white to-rose-100 py-24 px-6 transition-all transition-colors duration-700 ease-out dark:from-black dark:via-neutral-950 dark:to-rose-950 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <ParallaxBlob className="-left-24 top-10 h-56 w-56 rounded-full bg-rose-200/40 dark:bg-rose-900/40" speed={0.12} />
      <ParallaxBlob className="-right-16 bottom-0 h-48 w-48 rounded-full bg-rose-300/30 dark:bg-rose-900/30" speed={0.08} />
      <div className="relative mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{data.title}</h2>
        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
          {data.items.map((tech, index) => (
            <div
              key={tech}
              className={`flex items-center justify-center gap-0 rounded-2xl border border-rose-100 bg-white/80 px-6 py-5 text-sm font-semibold text-gray-800 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg dark:border-rose-800 dark:bg-black/60 dark:text-white md:justify-start md:gap-4 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              aria-label={tech}
              title={tech}
              style={{ transitionDelay: `${Math.min(index, 6) * 60}ms` }}
            >
              <span className="shrink-0">{iconMap[tech] ?? getFallbackIcon(tech)}</span>
              <span className="hidden text-base font-semibold md:inline">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
