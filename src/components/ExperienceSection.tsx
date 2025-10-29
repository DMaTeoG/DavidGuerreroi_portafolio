import { ExperienceData } from "@/types/portfolio";

type ExperienceSectionProps = {
  data: ExperienceData;
};

const ExperienceSection = ({ data }: ExperienceSectionProps) => (
  <section
    id="experiencia"
    className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-rose-100 py-24 px-6 transition-colors duration-500 ease-out dark:from-black dark:via-neutral-950 dark:to-rose-950"
  >
    <div className="pointer-events-none absolute -left-24 top-24 h-64 w-64 rounded-full bg-rose-200/40 blur-3xl dark:bg-rose-900/40" aria-hidden />
    <div className="pointer-events-none absolute -right-16 bottom-10 h-56 w-56 rounded-full bg-rose-300/30 blur-3xl dark:bg-rose-900/30" aria-hidden />
    <div className="relative mx-auto max-w-4xl">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">{data.title}</h2>
      <div className="mt-12 space-y-6">
        {data.items.map((experience) => (
          <article
            key={experience.role}
            className="rounded-3xl border border-rose-100 bg-white/85 p-6 shadow-sm transition-transform transition-colors duration-500 hover:-translate-y-1 hover:shadow-lg dark:border-rose-800 dark:bg-black/60"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {experience.role}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-neutral-200">
              {experience.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
