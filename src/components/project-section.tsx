import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "./project-card";

export function ProjectSection() {
  return (
    <section id="projects" className="space-y-8">
      <h2 className="text-xl font-bold">Projects</h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} {...project} showTags={false} />
        ))}
      </div>
    </section>
  );
}
