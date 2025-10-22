import { ExperienceData } from "@/types/portfolio";

type ExperienceSectionProps = {
  data: ExperienceData;
};

const ExperienceSection = ({ data }: ExperienceSectionProps) => (
  <section
    id="experiencia"
    className="bg-gradient-to-br from-red-700 via-red-600 to-red-500 py-24 px-6 text-white transition-colors dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950"
  >
    <h2 className="text-3xl font-bold mb-12 text-center text-white dark:text-neutral-100">{data.title}</h2>
    <div className="space-y-8 max-w-3xl mx-auto">
      {data.items.map((experience) => (
        <div
          key={experience.role}
          className="rounded border-l-4 border-white bg-red-500 p-6 shadow-sm transition-colors dark:border-red-400 dark:bg-neutral-900"
        >
          <h3 className="text-xl font-semibold text-white dark:text-neutral-100">{experience.role}</h3>
          <p className="leading-relaxed text-red-50 dark:text-neutral-300">{experience.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ExperienceSection;
