import { TechnologiesData } from "@/types/portfolio";

type TechnologiesSectionProps = {
  data: TechnologiesData;
};

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
            className="rounded-2xl border border-rose-100 bg-white/80 px-6 py-5 text-sm font-semibold text-gray-800 shadow-sm transition-transform transition-colors duration-500 hover:-translate-y-1 hover:shadow-lg dark:border-rose-800 dark:bg-black/60 dark:text-white"
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechnologiesSection;
