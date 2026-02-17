import Link from "next/link";
import { getBlogs } from "@/lib/blog";

export function BlogList() {
  const blogs = getBlogs().sort((a, b) => {
    return (
      new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
    );
  });

  return (
    <section id="blog" className="space-y-8">
      <h2 className="text-xl font-bold">Blog</h2>
      <div className="space-y-6">
        {blogs.map((blog) => (
          <Link
            key={blog.slug}
            href={`/blog/${blog.slug}`}
            className="group flex items-baseline justify-between gap-4 hover:opacity-70 transition-opacity"
          >
            <span className="font-medium text-neutral-900 dark:text-neutral-100 group-hover:underline decoration-neutral-400 underline-offset-4">
              {blog.metadata.title}
            </span>
            <span className="text-sm font-mono text-neutral-500 dark:text-neutral-500 shrink-0 tabular-nums">
              {blog.metadata.date}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
