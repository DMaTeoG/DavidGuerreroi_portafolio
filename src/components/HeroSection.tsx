import Image from "next/image";

import { HeroData } from "@/types/portfolio";

type HeroSectionProps = {
  data: HeroData;
};

const HeroSection = ({ data }: HeroSectionProps) => {
  const socialLinks = [
    { label: "Facebook", href: data.social?.facebook },
    { label: "LinkedIn", href: data.social?.linkedin },
    { label: "Instagram", href: data.social?.instagram },
  ].filter((link): link is { label: string; href: string } => Boolean(link.href));

  return (
    <section
      id="inicio"
      className="bg-gradient-to-br from-red-700 via-red-600 to-red-500 px-6 py-32 text-white transition-colors dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950"
    >
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 text-center md:flex-row md:text-left">
        <div className="space-y-6 md:flex-1">
          <h2 className="text-5xl font-bold md:text-6xl">{data.title}</h2>
          <p className="text-lg leading-relaxed text-red-100 md:max-w-2xl dark:text-neutral-300">
            {data.description}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <a
              href={data.primaryCta.href}
              className="rounded-xl bg-white px-6 py-3 text-red-600 shadow transition-colors hover:bg-red-100 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              {data.primaryCta.label}
            </a>
            {data.secondaryCta ? (
              <a
                href={data.secondaryCta.href}
                target={data.secondaryCta.targetBlank ? "_blank" : undefined}
                rel={data.secondaryCta.targetBlank ? "noopener noreferrer" : undefined}
                className="rounded-xl border border-white px-6 py-3 text-white transition-colors hover:bg-red-500 dark:border-neutral-200 dark:text-neutral-100 dark:hover:bg-neutral-800"
              >
                {data.secondaryCta.label}
              </a>
            ) : null}
            {socialLinks.length > 0 ? (
              <div className="flex flex-wrap items-center gap-3 rounded-xl border border-white/40 bg-white/10 px-4 py-3 text-sm font-medium text-white shadow backdrop-blur transition-colors dark:border-neutral-700 dark:bg-neutral-900/70 dark:text-neutral-100">
                {socialLinks.map((link, index) => (
                  <span key={link.href} className="inline-flex items-center gap-3">
                    {index > 0 ? (
                      <span className="text-white/40 dark:text-neutral-500" aria-hidden>
                        |
                      </span>
                    ) : null}
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-red-200 dark:hover:text-neutral-200"
                    >
                      {link.label}
                    </a>
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </div>
        <div className="md:flex-1 md:flex md:justify-end">
          {data.image ? (
            <div className="flex justify-center md:justify-end">
              <Image
                src={data.image.src}
                alt={data.image.alt}
                width={320}
                height={320}
                priority
                className="h-64 w-64 rounded-full border-4 border-white object-cover shadow-2xl md:h-72 md:w-72 dark:border-neutral-700"
              />
            </div>
          ) : (
            <div className="flex h-64 w-64 items-center justify-center rounded-full border-2 border-dashed border-white text-sm uppercase tracking-wide opacity-70 md:h-72 md:w-72 dark:border-neutral-500 dark:text-neutral-400">
              Foto
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
