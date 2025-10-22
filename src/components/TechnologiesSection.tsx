import { TechnologiesData } from "@/types/portfolio";

type TechnologiesSectionProps = {
  data: TechnologiesData;
};

const TechnologiesSection = ({ data }: TechnologiesSectionProps) => (
  <section id="tecnologias" className="bg-white py-24">
    <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">{data.title}</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
      {data.items.map((tech) => (
        <div key={tech} className="p-6 border rounded-xl shadow-sm bg-gray-50 hover:shadow-md">
          <span className="font-semibold">{tech}</span>
        </div>
      ))}
    </div>
  </section>
);

export default TechnologiesSection;
