import Image from "next/image";

import { HeroData } from "@/types/portfolio";

type HeroSectionProps = {
  data: HeroData;
};

const HeroSection = ({ data }: HeroSectionProps) => (
  <section id="inicio" className="bg-red-600 px-6 py-32 text-white">
    <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 text-center md:flex-row md:text-left">
      <div className="space-y-6 md:flex-1">
        <h2 className="text-5xl font-bold md:text-6xl">{data.title}</h2>
        <p className="text-lg leading-relaxed text-red-100 md:max-w-2xl">{data.description}</p>
        <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
          <a
            href={data.primaryCta.href}
            className="rounded-xl bg-white px-6 py-3 text-red-600 shadow transition-colors hover:bg-red-100"
          >
            {data.primaryCta.label}
          </a>
          {data.secondaryCta ? (
            <a
              href={data.secondaryCta.href}
              target={data.secondaryCta.targetBlank ? "_blank" : undefined}
              rel={data.secondaryCta.targetBlank ? "noopener noreferrer" : undefined}
              className="rounded-xl border border-white px-6 py-3 text-white transition-colors hover:bg-red-500"
            >
              {data.secondaryCta.label}
            </a>
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
              className="h-64 w-64 rounded-full border-4 border-white object-cover shadow-2xl md:h-72 md:w-72"
            />
          </div>
        ) : (
          <div className="flex h-64 w-64 items-center justify-center rounded-full border-2 border-dashed border-white text-sm uppercase tracking-wide opacity-70 md:h-72 md:w-72">
            Foto
          </div>
        )}
      </div>
    </div>
  </section>
);

export default HeroSection;
