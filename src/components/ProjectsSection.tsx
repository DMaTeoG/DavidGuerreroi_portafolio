import { ProjectsData } from "@/types/portfolio";

type ProjectsSectionProps = {
  data: ProjectsData;
};

const ProjectsSection = ({ data }: ProjectsSectionProps) => (
  <section
    id="proyectos"
    className="bg-gradient-to-br from-red-50 via-white to-red-100 py-24 px-6 transition-colors dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950"
  >
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center text-red-600 dark:text-red-400">{data.title}</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {data.items.map((project) => (
          <div
            key={project.title}
            className="p-6 border border-red-200 rounded-xl bg-white shadow transition-colors hover:shadow-lg dark:border-neutral-700 dark:bg-neutral-900"
          >
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-neutral-100">
              {project.title}
            </h3>
            <p className="text-gray-600 leading-relaxed dark:text-neutral-300">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
