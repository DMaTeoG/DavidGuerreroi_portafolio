import { AboutData } from "@/types/portfolio";

type AboutSectionProps = {
  data: AboutData;
};

const AboutSection = ({ data }: AboutSectionProps) => (
  <section id="sobre" className="bg-white py-24 px-6">
    <div className="max-w-4xl mx-auto text-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-center text-red-600">{data.title}</h2>
      <p className="text-lg text-center leading-relaxed">{data.description}</p>
    </div>
  </section>
);

export default AboutSection;
