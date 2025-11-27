import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@iconify/react";
import { PROJECTS } from "@/data/projects";
import { TechBadge } from "@/components/tech-badge";


interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const slug = (await params).slug;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <Link
        href="/"
        className="inline-flex items-center text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors mb-8"
      >
        <Icon icon="lucide:arrow-left" className="w-4 h-4 mr-1" />
        Go Back
      </Link>

      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <div className="flex gap-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
          >
            Open Project <Icon icon="lucide:arrow-up-right" className="w-4 h-4 ml-1" />
          </a>
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
            >
              View Code
            </a>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.stack.map((tech) => (
          <TechBadge key={tech} name={tech} />
        ))}
      </div>

      <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-12 max-w-prose">
        {project.longDescription || project.description}
      </p>

      <div className="w-full aspect-video bg-neutral-100 dark:bg-neutral-900 rounded-xl flex items-center justify-center overflow-hidden border border-neutral-200 dark:border-neutral-800">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-sm text-neutral-400">Project Image Placeholder</span>
        )}
      </div>
    </main>
  );
}
