import Link from "next/link";
import { Icon } from "@iconify/react";
import { BlogList } from "@/components/blog-list";

export default function BlogIndexPage() {
  return (
    <div className="max-w-2xl mx-auto px-4">
      <Link
        href="/"
        className="inline-flex items-center text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors mb-12"
      >
        <Icon icon="lucide:arrow-left" className="w-4 h-4 mr-1" />
        Go Back
      </Link>
      
      <BlogList />
    </div>
  );
}