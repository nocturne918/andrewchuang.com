import Link from "next/link";
import { Icon } from "@iconify/react";
import { ProjectSection } from "@/components/project-section";

export default function ProjectsPage() {
  return (
    <main className="space-y-8">
      <Link
        href="/"
        className="inline-flex items-center text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors mb-12"
      >
        <Icon icon="lucide:arrow-left" className="w-4 h-4 mr-1" />
        Go Back
      </Link>
      <ProjectSection />
    </main>
  );
}
