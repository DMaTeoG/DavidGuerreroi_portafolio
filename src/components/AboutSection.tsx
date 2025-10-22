import Image from "next/image";

import { AboutData } from "@/types/portfolio";

type AboutSectionProps = {
  data: AboutData;
};

const AboutSection = ({ data }: AboutSectionProps) => (
  <section id="sobre" className="bg-gradient-to-br from-red-50 via-white to-red-100 py-24 px-6 transition-colors dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
    <div className="mx-auto grid max-w-5xl gap-12 text-gray-800 transition-colors dark:text-neutral-100 md:grid-cols-[3fr_2fr] md:items-center">
      <div className="space-y-6 text-center md:text-left">
        <h2 className="text-3xl font-bold text-red-600 transition-colors md:text-4xl dark:text-red-400">
          {data.title}
        </h2>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-neutral-300">{data.description}</p>
      </div>
      <div className="flex justify-center md:justify-end">
        {data.image ? (
          <Image
            src={data.image.src}
            alt={data.image.alt}
            width={320}
            height={320}
            className="h-64 w-64 rounded-3xl border-4 border-red-100 object-cover shadow-xl transition-colors md:h-72 md:w-72 dark:border-neutral-700"
          />
        ) : (
          <div className="flex h-64 w-64 items-center justify-center rounded-3xl border-2 border-dashed border-red-200 text-sm uppercase tracking-wide text-red-300 transition-colors md:h-72 md:w-72 dark:border-neutral-700 dark:text-neutral-500">
            Foto
          </div>
        )}
      </div>
    </div>
  </section>
);

export default AboutSection;
