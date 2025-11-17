import Link from "next/link";
import Image from "next/image";
import { getAllBlogs } from "@/lib/blogs";

export default function BlogPage() {
  const blogs = getAllBlogs();

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <main className="mx-auto w-full max-w-screen-lg px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        {/* 戻るボタン */}
        <div className="mb-4">
          <Link href="/" className="inline-flex items-center gap-2 text-sm border rounded-md px-3 py-2">
            <svg aria-hidden className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            ホームに戻る
          </Link>
        </div>

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">ブログ</h1>
          <p className="mt-2 text-sm text-muted-foreground">技術記事や開発の記録を投稿しています。</p>
        </header>

        <section>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {blogs.map((blog) => (
              <li key={blog.slug}>
                <Link
                  href={`/Blog/${blog.slug}`}
                  className="block h-full border rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {blog.thumbnail && (
                    <div className="relative w-full h-48 bg-muted">
                      <Image
                        src={blog.thumbnail}
                        alt={blog.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h2 className="text-lg font-semibold line-clamp-2 break-words">
                        {blog.title}
                      </h2>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{blog.date}</p>
                    {blog.tags && blog.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-2">
                        {blog.tags.map((tag, i) => (
                          <span key={i} className="text-xs px-2 py-1 bg-muted rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {blog.description}
                    </p>
                  </div>
                  <span className="sr-only">詳細を見る</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
