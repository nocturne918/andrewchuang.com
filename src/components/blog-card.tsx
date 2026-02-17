import { Blog } from "@/lib/blog";

type BlogCardProps = {
  post: Blog;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="flex flex-col gap-3">
      <div>{post.metadata.title}</div>
      <div>{post.metadata.description}</div>
    </div>
  );
}
