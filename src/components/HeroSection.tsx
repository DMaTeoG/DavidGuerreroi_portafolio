import { HeroData } from "@/types/portfolio";

type HeroSectionProps = {
  data: HeroData;
};

const HeroSection = ({ data }: HeroSectionProps) => (
  <section
    id="inicio"
    className="h-screen flex flex-col justify-center items-center text-center bg-gray-50 px-4"
  >
    <h2 className="text-5xl font-bold mb-6 text-gray-900">{data.title}</h2>
    <p className="text-lg mb-8 max-w-2xl leading-relaxed">{data.description}</p>
    <div className="space-x-4">
      <a
        href={data.primaryCta.href}
        className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700"
      >
        {data.primaryCta.label}
      </a>
      {data.secondaryCta ? (
        <a
          href={data.secondaryCta.href}
          target={data.secondaryCta.targetBlank ? "_blank" : undefined}
          rel={data.secondaryCta.targetBlank ? "noopener noreferrer" : undefined}
          className="px-6 py-3 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50"
        >
          {data.secondaryCta.label}
        </a>
      ) : null}
    </div>
  </section>
);

export default HeroSection;
