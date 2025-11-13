import Image from "next/image";

import ParallaxBlob from "@/components/ParallaxBlob";
import useRevealOnScroll from "@/hooks/useRevealOnScroll";
import { ProjectsData } from "@/types/portfolio";

type ProjectsSectionProps = {
  data: ProjectsData;
};

const ProjectsSection = ({ data }: ProjectsSectionProps) => {
  const viewProjectLabel = data.title.toLowerCase().includes("proyecto") ? "Ver proyecto" : "View project";
  const { ref, isVisible } = useRevealOnScroll<HTMLElement>();

  return (
    <section
      ref={ref}
      id="proyectos"
      className={`relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-rose-50 via-white to-rose-100 py-24 px-6 transition-all transition-colors duration-700 ease-out dark:from-black dark:via-neutral-950 dark:to-rose-950 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <ParallaxBlob className="left-1/2 top-0 h-60 w-60 -translate-x-1/2 rounded-full bg-rose-200/40 dark:bg-rose-900/40" speed={0.12} />
      <ParallaxBlob className="-bottom-24 left-10 h-52 w-52 rounded-full bg-rose-300/30 dark:bg-rose-900/30" speed={0.09} />
      <div className="relative mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">{data.title}</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {data.items.map((project, index) => (
            <article
              key={project.title}
              className={`flex h-full flex-col rounded-3xl border border-rose-100 bg-white/85 p-6 shadow-sm transition-all transition-colors duration-700 hover:-translate-y-2 hover:scale-[1.01] hover:shadow-2xl dark:border-rose-800 dark:bg-black/60 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${Math.min(index, 5) * 90}ms` }}
            >
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block overflow-hidden rounded-2xl border border-rose-100/60 bg-rose-50/70 transition-transform hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 dark:border-rose-900/40 dark:bg-neutral-900/60"
                  aria-label={project.title}
                >
                  <div className="relative aspect-[16/10]">
                    {project.preview ? (
                      <Image
                        src={project.preview.src}
                        alt={project.preview.alt}
                        fill
                        sizes="(min-width: 1280px) 360px, (min-width: 768px) 50vw, 90vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-rose-200/60 to-white text-sm font-semibold uppercase tracking-wide text-rose-500 dark:from-rose-900/40 dark:to-neutral-900 dark:text-rose-200">
                        Preview
                      </div>
                    )}
                  </div>
                  <span className="pointer-events-none absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-rose-500 shadow-sm transition-opacity duration-300 group-hover:opacity-100 dark:bg-black/80 dark:text-rose-300">
                    <span aria-hidden>{viewProjectLabel}</span>
                    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M7 17L17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
              ) : (
                <div className="relative block overflow-hidden rounded-2xl border border-rose-100/60 bg-rose-50/70 dark:border-rose-900/40 dark:bg-neutral-900/60">
                  <div className="relative aspect-[16/10]">
                    {project.preview ? (
                      <Image
                        src={project.preview.src}
                        alt={project.preview.alt}
                        fill
                        sizes="(min-width: 1280px) 360px, (min-width: 768px) 50vw, 90vw"
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-rose-200/60 to-white text-sm font-semibold uppercase tracking-wide text-rose-500 dark:from-rose-900/40 dark:to-neutral-900 dark:text-rose-200">
                        Preview
                      </div>
                    )}
                  </div>
                </div>
              )}
              <div className="mt-6 flex flex-1 flex-col">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-neutral-200">
                  {project.description}
                </p>
                {project.technologies && project.technologies.length > 0 ? (
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <li
                        key={`${project.title}-${tech}`}
                        className="rounded-full border border-rose-100/80 bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-500 dark:border-rose-900/50 dark:bg-neutral-900/80 dark:text-rose-200"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
