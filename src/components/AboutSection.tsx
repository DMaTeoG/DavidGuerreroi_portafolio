import { AboutData } from "@/types/portfolio";

type AboutSectionProps = {
  data: AboutData;
};

const AboutSection = ({ data }: AboutSectionProps) => (
  <section id="sobre" className="max-w-4xl mx-auto py-24 px-6">
    <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">{data.title}</h2>
    <p className="text-lg text-center leading-relaxed">{data.description}</p>
  </section>
);

export default AboutSection;
