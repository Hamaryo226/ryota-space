import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getBlogBySlug, getAllBlogSlugs } from "@/lib/blogs";
import { BackButton } from "@/components/back-button";

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return { title: "ブログが見つかりません" };
  }

  return {
    title: `${blog.title} | Blog`,
    description: blog.description,
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) notFound();

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-background to-muted/20">
      <main className="mx-auto w-full max-w-screen-md px-4 sm:px-6 py-6 sm:py-10">

        {/* 戻る */}
        <div className="mb-6">
          <BackButton href="/Blog" label="ブログ一覧に戻る" />
        </div>

        {/* ===== HERO ===== */}
        {blog.thumbnail && (
          <div className="relative w-full max-h-[200px] sm:max-h-[280px] md:max-h-[360px] aspect-[16/9] sm:aspect-[21/9] rounded-xl sm:rounded-2xl overflow-hidden border mb-8 shadow-sm">
            <Image
              src={blog.thumbnail}
              alt={blog.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* ===== ヘッダー情報 ===== */}
        <header className="mb-10">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            {blog.tags && blog.tags.length > 0 && blog.tags.map((tag, i) => (
              <span key={i} className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight break-words leading-tight">
            {blog.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              <time>{blog.date}</time>
            </span>
          </div>
        </header>

        {/* ===== 本文 ===== */}
        <article>
          {blog.content.map((block, index) => {
            switch (block.type) {
              case "heading": {
                const level = block.level;
                const sizes: Record<number, string> = {
                  1: "text-3xl font-bold mt-10 mb-4",
                  2: "text-2xl font-bold mt-10 mb-4",
                  3: "text-xl font-bold mt-8 mb-3",
                  4: "text-lg font-bold mt-8 mb-3",
                  5: "text-base font-bold mt-6 mb-2",
                  6: "text-sm font-bold mt-6 mb-2",
                };
                const className = `${sizes[level] || sizes[6]} flex items-center gap-2`;
                const content = (
                  <>
                    <span className="w-1 h-5 bg-primary rounded-full shrink-0" />
                    {block.text}
                  </>
                );
                if (level === 1) return <h1 key={index} className={className}>{content}</h1>;
                if (level === 2) return <h2 key={index} className={className}>{content}</h2>;
                if (level === 3) return <h3 key={index} className={className}>{content}</h3>;
                if (level === 4) return <h4 key={index} className={className}>{content}</h4>;
                if (level === 5) return <h5 key={index} className={className}>{content}</h5>;
                return <h6 key={index} className={className}>{content}</h6>;
              }
              case "paragraph":
                return (
                  <p key={index} className="mb-5 leading-relaxed text-foreground/80">
                    {block.text}
                  </p>
                );
              case "list":
                return (
                  <ul key={index} className="mb-5 space-y-2 text-foreground/80">
                    {block.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              case "code":
                return (
                  <div key={index} className="rounded-xl border overflow-hidden shadow-sm mb-6">
                    <div className="flex items-center justify-between px-4 py-2 bg-muted/30 border-b">
                      <span className="text-xs font-mono text-muted-foreground">{block.language}</span>
                    </div>
                    <pre className="bg-muted/50 p-4 overflow-x-auto text-xs sm:text-sm leading-relaxed">
                      <code className={`language-${block.language}`}>{block.code}</code>
                    </pre>
                  </div>
                );
              default:
                return null;
            }
          })}
        </article>

        {/* フッター戻る */}
        <div className="mt-12 pt-8 border-t">
          <BackButton href="/Blog" label="ブログ一覧に戻る" />
        </div>
      </main>
    </div>
  );
}
