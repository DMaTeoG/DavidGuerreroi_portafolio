import { ExperienceData } from "@/types/portfolio";

type ExperienceSectionProps = {
  data: ExperienceData;
};

const ExperienceSection = ({ data }: ExperienceSectionProps) => (
  <section id="experiencia" className="bg-red-600 py-24 px-6 text-white">
    <h2 className="text-3xl font-bold mb-12 text-center">{data.title}</h2>
    <div className="space-y-8 max-w-3xl mx-auto">
      {data.items.map((experience) => (
        <div
          key={experience.role}
          className="p-6 border-l-4 border-white bg-red-500 shadow-sm rounded"
        >
          <h3 className="text-xl font-semibold">{experience.role}</h3>
          <p className="leading-relaxed text-red-50">{experience.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ExperienceSection;
