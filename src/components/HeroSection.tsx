import type { ReactElement } from "react";
import Image from "next/image";
import { HeroData, HeroSocialKey } from "@/types/portfolio";

type HeroSectionProps = {
  data: HeroData;
};

const iconMap: Record<HeroSocialKey, ReactElement> = {
  github: (
    <svg aria-hidden className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path
        d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.43c.6.11.82-.26.82-.58l-.02-2.06c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.34-1.75-1.34-1.75-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.3.77-1.6-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.4 1.24-3.25-.12-.3-.54-1.52.12-3.18 0 0 1-.32 3.28 1.23a11.4 11.4 0 015.97 0C17.33 3.41 18.33 3.73 18.33 3.73c.66 1.66.24 2.88.12 3.18.77.85 1.24 1.93 1.24 3.25 0 4.64-2.81 5.67-5.49 5.97.43.37.82 1.1.82 2.22l-.01 3.29c0 .32.22.7.83.58A12 12 0 0024 12C24 5.37 18.63 0 12 0z"
      />
    </svg>
  ),
  linkedin: (
    <svg aria-hidden className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.45 20.45h-3.55v-5.4c0-1.29-.46-2.17-1.62-2.17-.88 0-1.41.59-1.64 1.16-.08.19-.1.46-.1.73v5.68H10v-11h3.41v1.52c.48-.74 1.34-1.8 3.25-1.8 2.37 0 4.16 1.54 4.16 4.85v6.43z" />
      <path d="M5.34 8.92a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zm1.78 11.53H3.56v-11h3.56v11z" />
    </svg>
  ),
  instagram: (
    <svg aria-hidden className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7z" />
      <path d="M12 7.5A4.5 4.5 0 1112 16.5 4.5 4.5 0 0112 7.5zm0 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" />
      <circle cx="17.5" cy="6.5" r="1.25" />
    </svg>
  ),
};

const HeroSection = ({ data }: HeroSectionProps) => {
  const highlightName = data.highlightName?.trim();
  const highlightIndex = highlightName ? data.title.indexOf(highlightName) : -1;
  const highlightParts =
    highlightName && highlightIndex >= 0
      ? {
          before: data.title.slice(0, highlightIndex),
          highlight: highlightName,
          after: data.title.slice(highlightIndex + highlightName.length),
        }
      : null;

  const socialLinks = (
    Object.entries(data.social ?? {}) as Array<[HeroSocialKey, string]>
  ).filter(([, href]) => Boolean(href));

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-rose-100 px-6 py-32 text-gray-900 transition-colors duration-500 ease-out dark:from-black dark:via-neutral-950 dark:to-rose-950"
    >
      <div className="pointer-events-none absolute -left-32 top-16 h-80 w-80 rounded-full bg-rose-200/50 blur-3xl dark:bg-rose-900/40" aria-hidden />
      <div className="pointer-events-none absolute -right-24 -bottom-12 h-72 w-72 rounded-full bg-rose-300/40 blur-3xl dark:bg-rose-900/30" aria-hidden />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-12 text-center text-gray-900 transition-colors duration-500 ease-out md:flex-row md:items-center md:text-left dark:text-white">
        <div className="md:flex-1 md:pt-8">
          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            {highlightParts ? (
              <>
                {highlightParts.before}
                <span className="text-rose-500">{highlightParts.highlight}</span>
                {highlightParts.after}
              </>
            ) : (
              data.title
            )}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-gray-600 md:max-w-xl md:text-lg dark:text-neutral-200">
            {data.description}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <a
              href={data.primaryCta.href}
              className="rounded-full bg-rose-500 px-6 py-3 text-sm font-semibold text-white shadow transition-transform transition-colors duration-500 hover:-translate-y-0.5 hover:bg-rose-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 dark:bg-rose-600 dark:hover:bg-rose-500"
            >
              {data.primaryCta.label}
            </a>
            {data.secondaryCta ? (
              <a
                href={data.secondaryCta.href}
                target={data.secondaryCta.targetBlank ? "_blank" : undefined}
                rel={data.secondaryCta.targetBlank ? "noopener noreferrer" : undefined}
                className="rounded-full border border-rose-200 bg-white px-6 py-3 text-sm font-semibold text-rose-500 shadow-sm transition-transform transition-colors duration-500 hover:-translate-y-0.5 hover:border-rose-400 hover:text-rose-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-200 dark:border-rose-700 dark:bg-black/60 dark:text-white dark:hover:border-rose-500 dark:hover:text-rose-300"
              >
                {data.secondaryCta.label}
              </a>
            ) : null}
          </div>
          {socialLinks.length > 0 ? (
            <div className="mt-10 flex items-center justify-center gap-6 md:justify-start">
              {socialLinks.map(([key, href]) => (
                <a
                  key={`${key}-${href}`}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 text-gray-900 transition-colors duration-500 hover:border-rose-400 hover:text-rose-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-300 dark:border-rose-700 dark:text-white dark:hover:border-rose-500 dark:hover:text-rose-300"
                >
                  <span className="sr-only">{key}</span>
                  {iconMap[key]}
                </a>
              ))}
            </div>
          ) : null}
        </div>
        <div className="md:flex md:flex-1 md:justify-center">
          {data.image ? (
            <div className="relative flex justify-center md:justify-center">
              <span className="absolute inset-0 rounded-full bg-rose-200/50 blur-2xl dark:bg-rose-900/30" aria-hidden />
              <Image
                src={data.image.src}
                alt={data.image.alt}
                width={320}
                height={320}
                priority
                className="relative h-56 w-56 rounded-full border-4 border-white object-cover shadow-xl md:h-64 md:w-64 dark:border-rose-900/60"
              />
            </div>
          ) : (
            <div className="flex h-56 w-56 items-center justify-center rounded-full border-2 border-dashed border-rose-200 text-sm uppercase tracking-wide text-rose-300 md:h-64 md:w-64 dark:border-neutral-700 dark:text-neutral-500">
              Foto
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
