import { ExperienceHighlightsData } from "@/types/portfolio";

type ExperienceHighlightsProps = {
  data: ExperienceHighlightsData;
};

const ExperienceHighlights = ({ data }: ExperienceHighlightsProps) => (
  <section id="experiencias-destacadas" className="bg-red-50 py-24 px-6">
    <div className="mx-auto max-w-6xl space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-red-600 md:text-4xl">{data.title}</h2>
        <p className="mt-3 text-base text-red-500">
          Proyectos y logros clave que reflejan mi impacto en equipos multidisciplinarios.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        {data.items.map((item) => (
          <article
            key={`${item.company}-${item.role}`}
            className="rounded-3xl border border-red-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-xl"
          >
            <div className="flex flex-col gap-1 text-left">
              <span className="text-sm font-semibold uppercase tracking-wide text-red-500">
                {item.period}
              </span>
              <h3 className="text-2xl font-semibold text-gray-900">
                {item.role}
              </h3>
              <p className="text-sm font-medium text-red-600">{item.company}</p>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">{item.description}</p>
            <ul className="mt-6 space-y-2 text-sm text-gray-700">
              {item.achievements.map((achievement) => (
                <li key={achievement} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-red-500" aria-hidden />
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

export default ExperienceHighlights;
