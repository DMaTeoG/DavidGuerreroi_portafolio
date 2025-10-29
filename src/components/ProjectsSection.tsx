import { ProjectsData } from "@/types/portfolio";

type ProjectsSectionProps = {
  data: ProjectsData;
};

const ProjectsSection = ({ data }: ProjectsSectionProps) => (
  <section
    id="proyectos"
    className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-rose-100 py-24 px-6 transition-colors duration-500 ease-out dark:from-black dark:via-neutral-950 dark:to-rose-950"
  >
    <div className="pointer-events-none absolute left-1/2 top-0 h-60 w-60 -translate-x-1/2 rounded-full bg-rose-200/40 blur-3xl dark:bg-rose-900/40" aria-hidden />
    <div className="pointer-events-none absolute -bottom-24 left-10 h-52 w-52 rounded-full bg-rose-300/30 blur-3xl dark:bg-rose-900/30" aria-hidden />
    <div className="relative mx-auto max-w-6xl">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">{data.title}</h2>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {data.items.map((project) => (
          <article
            key={project.title}
            className="rounded-3xl border border-rose-100 bg-white/85 p-6 shadow-sm transition-transform transition-colors duration-500 hover:-translate-y-1 hover:shadow-lg dark:border-rose-800 dark:bg-black/60"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {project.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-neutral-200">
              {project.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
