import Link from "next/link";
import Image from "next/image";
import { getAllBlogs } from "@/lib/blogs";
import { BackButton } from "@/components/back-button";
import { ModeToggle } from "@/components/mode-togle";

export default function BlogPage() {
  const blogs = getAllBlogs();

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-background to-muted/20">
      <main className="mx-auto w-full max-w-screen-lg px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="mb-6 flex items-center justify-between">
          <BackButton href="/" label="ホームに戻る" />
          <div>
            <ModeToggle />
          </div>
        </div>

        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">ブログ</h1>
          <p className="mt-2 text-sm text-muted-foreground">技術記事や開発の記録、その他の考えを投稿しています。</p>
        </header>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogs.map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

function BlogCard({ blog }: { blog: { slug: string; thumbnail?: string; title: string; date: string; description: string; tags?: string[] } }) {
  return (
    <Link
      href={`/Blog/${blog.slug}`}
      className="group block h-full rounded-xl border bg-card overflow-hidden hover:shadow-md transition-all hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      {blog.thumbnail && (
        <div className="relative w-full h-40 bg-muted overflow-hidden">
          <Image
            src={blog.thumbnail}
            alt={blog.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          {blog.tags && blog.tags.length > 0 && blog.tags.map((tag, i) => (
            <span key={i} className="text-[10px] px-2 py-0.5 rounded-full font-medium bg-primary/10 text-primary border border-primary/20">
              {tag}
            </span>
          ))}
          <span className="text-[11px] text-muted-foreground ml-auto">{blog.date}</span>
        </div>
        <h2 className="font-semibold text-sm line-clamp-2 mb-1">
          {blog.title}
        </h2>
        <p className="text-xs text-muted-foreground line-clamp-2">
          {blog.description}
        </p>
      </div>
    </Link>
  );
}
