import Link from "next/link";
import { Icon } from "@iconify/react";

interface ProjectCardProps {
  title: string;
  description: string;
  stack: string[];
  link: string;
  slug: string;
  showTags?: boolean;
  icon: string;
}

export function ProjectCard({
  title,
  description,
  slug,
  icon,
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="group block p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors duration-200"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="p-2 bg-neutral-100 dark:bg-neutral-800 rounded-full">
          {icon.startsWith("/") || icon.startsWith("http") ? (
            <img src={icon} alt={title} className="w-8 h-8 object-contain" />
          ) : (
            <Icon
              icon={icon}
              className="w-8 h-8 text-neutral-900 dark:text-neutral-100"
            />
          )}
        </div>
        <Icon
          icon="lucide:arrow-up-right"
          className="w-5 h-5 text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors"
        />
      </div>

      <h3 className="font-bold text-lg mb-2 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors">
        {title}
      </h3>

      <div className="h-px bg-neutral-200 dark:bg-neutral-800 my-4" />

      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
        {description}
      </p>
    </Link>
  );
}
