import { ProjectsData } from "@/types/portfolio";

type ProjectsSectionProps = {
  data: ProjectsData;
};

const ProjectsSection = ({ data }: ProjectsSectionProps) => (
  <section id="proyectos" className="bg-white py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center text-red-600">{data.title}</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {data.items.map((project) => (
          <div
            key={project.title}
            className="p-6 border border-red-100 rounded-xl shadow hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-3 text-gray-900">{project.title}</h3>
            <p className="text-gray-600 leading-relaxed">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
