import { TechnologiesData } from "@/types/portfolio";

type TechnologiesSectionProps = {
  data: TechnologiesData;
};

const TechnologiesSection = ({ data }: TechnologiesSectionProps) => (
  <section id="tecnologias" className="bg-red-600 py-24 text-white">
    <h2 className="text-3xl font-bold mb-12 text-center">{data.title}</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
      {data.items.map((tech) => (
        <div
          key={tech}
          className="p-6 border border-red-400 rounded-xl shadow-sm bg-red-500 hover:shadow-md"
        >
          <span className="font-semibold">{tech}</span>
        </div>
      ))}
    </div>
  </section>
);

export default TechnologiesSection;
