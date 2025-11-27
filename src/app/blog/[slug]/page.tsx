import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@iconify/react";
import { getBlog } from "@/lib/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const slug = (await params).slug;
  const blog = getBlog(slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="max-w-2xl mx-auto px-4">
      <Link
        href="/blog"
        className="inline-flex items-center text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors mb-12"
      >
        <Icon icon="lucide:arrow-left" className="w-4 h-4 mr-1" />
        Back to Blog
      </Link>

      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <h1 className="mb-2">{blog.metadata.title}</h1>
        <div className="text-sm text-neutral-500 mb-8 font-mono">
          {blog.metadata.date}
        </div>
        <div className="whitespace-pre-wrap">{blog.content}</div>
      </article>
    </div>
  );
}
