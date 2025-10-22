import { TechnologiesData } from "@/types/portfolio";

type TechnologiesSectionProps = {
  data: TechnologiesData;
};

const TechnologiesSection = ({ data }: TechnologiesSectionProps) => (
  <section
    id="tecnologias"
    className="bg-gradient-to-br from-red-700 via-red-600 to-red-500 py-24 text-white transition-colors dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950"
  >
    <h2 className="text-3xl font-bold mb-12 text-center text-white dark:text-neutral-100">{data.title}</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
      {data.items.map((tech) => (
        <div
          key={tech}
          className="p-6 border border-red-400 rounded-xl bg-red-500 shadow-sm transition-colors hover:shadow-md dark:border-neutral-700 dark:bg-neutral-900"
        >
          <span className="font-semibold text-white dark:text-neutral-100">{tech}</span>
        </div>
      ))}
    </div>
  </section>
);

export default TechnologiesSection;
