import ParallaxBlob from "@/components/ParallaxBlob";
import useRevealOnScroll from "@/hooks/useRevealOnScroll";
import { ExperienceHighlightsData } from "@/types/portfolio";

type ExperienceHighlightsProps = {
  data: ExperienceHighlightsData;
};

const ExperienceHighlights = ({ data }: ExperienceHighlightsProps) => {
  const { ref, isVisible } = useRevealOnScroll<HTMLElement>();

  return (
    <section
      ref={ref}
      id="experiencias-destacadas"
      className={`relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-rose-50 via-white to-rose-100 py-24 px-6 transition-all transition-colors duration-700 ease-out dark:from-black dark:via-neutral-950 dark:to-rose-950 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <ParallaxBlob className="left-12 top-8 h-64 w-64 rounded-full bg-rose-200/40 dark:bg-rose-900/40" speed={0.11} />
      <ParallaxBlob className="-right-20 bottom-0 h-56 w-56 rounded-full bg-rose-300/30 dark:bg-rose-900/30" speed={0.08} />
      <div className="relative mx-auto max-w-6xl space-y-12">
        <div
          className={`text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">{data.title}</h2>
          <p className="mt-3 text-base text-gray-600 dark:text-neutral-200">
            Proyectos y logros clave que reflejan mi impacto en equipos multidisciplinarios.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {data.items.map((item, index) => (
            <article
              key={`${item.company}-${item.role}`}
              className={`rounded-3xl border border-rose-100 bg-white/85 p-8 shadow-sm transition-all transition-colors duration-700 hover:-translate-y-2 hover:scale-[1.01] hover:shadow-2xl dark:border-rose-800 dark:bg-black/60 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${Math.min(index, 5) * 110}ms` }}
            >
              <div className="flex flex-col gap-1 text-left">
                <span className="text-xs font-semibold uppercase tracking-wide text-rose-500 dark:text-rose-300">
                  {item.period}
                </span>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {item.role}
                </h3>
                <p className="text-sm font-medium text-gray-600 dark:text-neutral-200">{item.company}</p>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-neutral-200">{item.description}</p>
              <ul className="mt-6 space-y-2 text-sm text-gray-600 dark:text-neutral-100">
                {item.achievements.map((achievement) => (
                  <li key={achievement} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-rose-500" aria-hidden />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceHighlights;
