import Image from "next/image";

import { AboutData } from "@/types/portfolio";

type AboutSectionProps = {
  data: AboutData;
};

const AboutSection = ({ data }: AboutSectionProps) => (
  <section
    id="sobre"
    className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-rose-100 py-24 px-6 transition-colors duration-500 ease-out dark:from-black dark:via-neutral-950 dark:to-rose-950"
  >
    <div className="pointer-events-none absolute -top-20 left-16 h-64 w-64 rounded-full bg-rose-200/40 blur-3xl dark:bg-rose-900/40" aria-hidden />
    <div className="pointer-events-none absolute -bottom-24 right-10 h-52 w-52 rounded-full bg-rose-300/30 blur-3xl dark:bg-rose-900/30" aria-hidden />
    <div className="relative mx-auto grid max-w-5xl gap-12 text-gray-800 transition-colors duration-500 ease-out dark:text-white md:grid-cols-[3fr_2fr] md:items-center">
      <div className="space-y-6 text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-900 transition-colors md:text-4xl dark:text-neutral-100">
          {data.title}
        </h2>
        <p className="text-lg leading-relaxed text-gray-600 dark:text-neutral-200">{data.description}</p>
      </div>
      <div className="flex justify-center md:justify-end">
        {data.image ? (
          <Image
            src={data.image.src}
            alt={data.image.alt}
            width={320}
            height={320}
            className="h-64 w-64 rounded-3xl border-4 border-white object-cover shadow-xl transition-colors duration-500 md:h-72 md:w-72 dark:border-rose-900/60"
          />
        ) : (
          <div className="flex h-64 w-64 items-center justify-center rounded-3xl border-2 border-dashed border-rose-200 text-sm uppercase tracking-wide text-rose-300 transition-colors duration-500 md:h-72 md:w-72 dark:border-rose-800 dark:text-rose-200/70">
            Foto
          </div>
        )}
      </div>
    </div>
  </section>
);

export default AboutSection;
