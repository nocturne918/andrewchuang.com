import path from "path"
import fs from "fs"

export type Metadata = {
  title: string,
  description: string,
  date: string
}

export type MdxParse = {
  metadata: Metadata,
  content: string
}

export type Blog = MdxParse & {
  slug: string
}

export function getBlog(slug: string): Blog | null {
  return getBlogs().find((blog) => blog.slug === slug) ?? null;
}

export function getBlogs(): Blog[] {
  const dir = path.join(process.cwd(), "content/blogs")

  const mdxFiles = fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx")

  return mdxFiles.map((file) => {
    const mdxContent = fs.readFileSync(path.join(dir, file), "utf-8")
    const { metadata, content } = parseMdx(mdxContent)
    const slug = path.basename(file, ".mdx")

    return { slug, metadata, content }
  })
}

function parseMdx(mdxContent: string): MdxParse {
  const match = /---\s*[\r\n]+([\s\S]*?)[\r\n]+---/.exec(mdxContent);

  if (!match) {
    throw new Error("No frontmatter found");
  }

  const content = mdxContent.slice(match[0].length);
  const frontmatterLines = match[1].split("\n");

  const metadata: Partial<Metadata> = {};

  frontmatterLines.forEach((line) => {
    const [key, value] = line.split(": ");
    if (key && value) {
      metadata[key.trim() as keyof Metadata] = value.replace(/^["'](.*)["']/, "$1");
    }
  })

  return { metadata: metadata as Metadata, content };
}