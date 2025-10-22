import { ExperienceData } from "@/types/portfolio";

type ExperienceSectionProps = {
  data: ExperienceData;
};

const ExperienceSection = ({ data }: ExperienceSectionProps) => (
  <section id="experiencia" className="bg-gray-50 py-24 px-6">
    <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">{data.title}</h2>
    <div className="space-y-8 max-w-3xl mx-auto">
      {data.items.map((experience) => (
        <div
          key={experience.role}
          className="p-6 border-l-4 border-blue-600 bg-white shadow-sm rounded"
        >
          <h3 className="text-xl font-semibold text-gray-900">{experience.role}</h3>
          <p className="text-gray-600 leading-relaxed">{experience.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ExperienceSection;
