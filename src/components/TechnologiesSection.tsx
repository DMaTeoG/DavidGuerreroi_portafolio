import type { ReactElement } from "react";

import { TechnologiesData } from "@/types/portfolio";

type TechnologiesSectionProps = {
  data: TechnologiesData;
};

const iconMap: Partial<Record<string, ReactElement>> = {
  HTML: (
    <svg aria-hidden className="h-9 w-9 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 2l1.64 18.564L12 22l7.36-1.436L21 2H3zm14.264 5.418H8.61l.135 1.53h8.252l-.55 6.164-4.447 1.197-4.442-1.197-.3-3.41h2.164l.147 1.677 2.431.651 2.43-.651.256-2.862H7.59l-.512-5.79h9.915l-.23 2.491z" />
    </svg>
  ),
  CSS: (
    <svg aria-hidden className="h-9 w-9 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 2l1.654 18.606L12 22l7.346-1.394L21 2H3zm13.354 5.54l-.184 2.042-3.91 1.67-.01.004h3.707l-.326 3.645L12 16.584l-3.63-1.682-.232-2.605h1.79l.098 1.156 1.974.86 2.005-.546.136-1.553-6.046-.015-.21-2.39 6.404-.015.14-1.58H7.11l-.16-1.8h10.95l-.546 6.07z" />
    </svg>
  ),
  JavaScript: (
    <svg aria-hidden className="h-9 w-9 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
      <path d="M2 2h20v20H2V2zm11.388 15.327c.462.753 1.062 1.305 2.124 1.305.892 0 1.465-.445 1.465-1.062 0-.738-.582-1-1.6-1.43l-.55-.236c-1.59-.676-2.646-1.523-2.646-3.315 0-1.65 1.257-2.904 3.223-2.904 1.4 0 2.408.488 3.131 1.764l-1.714 1.098c-.377-.676-.785-.942-1.417-.942-.645 0-1.056.41-1.056.942 0 .659.41.921 1.358 1.33l.55.236c1.872.803 2.927 1.622 2.927 3.46 0 1.982-1.56 3.07-3.655 3.07-2.046 0-3.368-.973-4.016-2.246l1.76-1.07zm-6.871.2c.345.61.66 1.125 1.417 1.125.722 0 1.177-.282 1.177-1.38V8.54h2.2v7.766c0 2.28-1.338 3.318-3.29 3.318-1.764 0-2.787-.913-3.31-2.01l1.806-1.09z" />
    </svg>
  ),
  React: (
    <svg aria-hidden className="h-9 w-9 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <circle cx="12" cy="12" r="1.75" fill="currentColor" />
      <path d="M7.5 3.5c2.25 3.5 6.75 15 0 17M16.5 3.5c-2.25 3.5-6.75 15 0 17M2.5 9c4 .5 15.5.5 19 0M2.5 15c4-.5 15.5-.5 19 0" strokeWidth="1.5" />
    </svg>
  ),
  "Node.js": (
    <svg aria-hidden className="h-9 w-9 text-lime-500" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.998 0l-9.87 5.688v11.376L11.998 22.75l9.874-5.686V5.686L11.998 0zm3.508 16.294c0 1.807-1.067 2.63-2.63 2.63-1.386 0-2.19-.717-2.602-1.58l1.39-.785c.27.48.515.889 1.104.889.563 0 .92-.22.92-1.08V8.67h1.818v7.624zm-4.612.512c-.514.89-1.567 1.58-3.21 1.58-1.91 0-3.31-.986-3.31-3.123V8.67h1.818v6.36c0 1.295.538 1.889 1.492 1.889.998 0 1.627-.692 1.627-1.889V8.67h1.78v7.624h-.197z" />
    </svg>
  ),
  Python: (
    <svg aria-hidden className="h-9 w-9 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-2.21 0-4 1.79-4 4v2H7c-2.76 0-5 2.24-5 5v2c0 2.76 2.24 5 5 5h2v2c0 2.21 1.79 4 4 4s4-1.79 4-4v-2h1c2.76 0 5-2.24 5-5v-2c0-2.76-2.24-5-5-5h-1V4c0-2.21-1.79-4-4-4zm-2 4a1 1 0 112 0 1 1 0 01-2 0zm-3 6h6v4H7a1 1 0 01-1-1v-2a1 1 0 011-1zm9 2h-2v-4h3a1 1 0 011 1v2a1 1 0 01-1 1zm-2 6a1 1 0 112 0 1 1 0 01-2 0z" />
    </svg>
  ),
  Django: (
    <svg aria-hidden className="h-9 w-9 text-emerald-600" viewBox="0 0 24 24" fill="currentColor">
      <path d="M5 3h5.5c4.237 0 6.5 2.295 6.5 6.063 0 3.87-2.324 6.13-6.5 6.13H9.8V21H5V3zm4.8 8.077h1.348c1.544 0 2.352-.843 2.352-2.1 0-1.29-.81-2.07-2.32-2.07H9.8v4.17zM19 3h4v12.696C23 20.32 20.578 22 16.43 22A13.74 13.74 0 0113 21.478v-3.73c.997.272 1.98.408 2.88.408 1.884 0 3.12-.804 3.12-2.98V3z" />
    </svg>
  ),
};

const getFallbackIcon = (label: string): ReactElement => (
  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-100 text-sm font-semibold text-rose-500 dark:bg-rose-900/40 dark:text-rose-200">
    {label.charAt(0).toUpperCase()}
  </span>
);

const TechnologiesSection = ({ data }: TechnologiesSectionProps) => (
  <section
    id="tecnologias"
    className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-rose-100 py-24 px-6 transition-colors duration-500 ease-out dark:from-black dark:via-neutral-950 dark:to-rose-950"
  >
    <div className="pointer-events-none absolute -left-24 top-10 h-56 w-56 rounded-full bg-rose-200/40 blur-3xl dark:bg-rose-900/40" aria-hidden />
    <div className="pointer-events-none absolute -right-16 bottom-0 h-48 w-48 rounded-full bg-rose-300/30 blur-3xl dark:bg-rose-900/30" aria-hidden />
    <div className="relative mx-auto max-w-5xl text-center">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{data.title}</h2>
      <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
        {data.items.map((tech) => (
          <div
            key={tech}
            className="flex items-center justify-center gap-0 rounded-2xl border border-rose-100 bg-white/80 px-6 py-5 text-sm font-semibold text-gray-800 shadow-sm transition-transform transition-colors duration-500 hover:-translate-y-1 hover:shadow-lg dark:border-rose-800 dark:bg-black/60 dark:text-white md:justify-start md:gap-4"
            aria-label={tech}
            title={tech}
          >
            <span className="shrink-0">{iconMap[tech] ?? getFallbackIcon(tech)}</span>
            <span className="hidden text-base font-semibold md:inline">{tech}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechnologiesSection;
