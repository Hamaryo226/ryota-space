import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getBlogBySlug, getAllBlogSlugs } from "@/lib/blogs";

// 静的生成のためのパラメータを生成
export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({
    slug: slug,
  }));
}

// メタデータを動的に生成
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
    <div className="min-h-screen w-full overflow-x-hidden">
      <main className="mx-auto w-full max-w-screen-md px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        {/* 戻る */}
        <div className="mb-4">
          <Link href="/Blog" className="inline-flex items-center gap-2 text-sm border rounded-md px-3 py-2">
            <svg aria-hidden className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            ブログ一覧に戻る
          </Link>
        </div>

        {/* ヘッダー */}
        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight break-words mb-3">{blog.title}</h1>
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <time>{blog.date}</time>
            {blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-1 bg-muted rounded-md text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        {/* サムネイル */}
        {blog.thumbnail && (
          <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden border mb-8">
            <Image
              src={blog.thumbnail}
              alt={blog.title}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* 本文 */}
        <article className="prose prose-slate dark:prose-invert max-w-none">
          {blog.content.map((block, index) => {
            switch (block.type) {
              case "heading":
                const HeadingTag = `h${block.level}` as keyof JSX.IntrinsicElements;
                return (
                  <HeadingTag key={index} className="font-bold mt-8 mb-4">
                    {block.text}
                  </HeadingTag>
                );
              case "paragraph":
                return (
                  <p key={index} className="mb-4 leading-relaxed text-muted-foreground">
                    {block.text}
                  </p>
                );
              case "list":
                return (
                  <ul key={index} className="list-disc list-inside mb-4 space-y-2 text-muted-foreground">
                    {block.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                );
              case "code":
                return (
                  <pre key={index} className="bg-muted p-4 rounded-md overflow-x-auto mb-4">
                    <code className={`language-${block.language} text-sm`}>{block.code}</code>
                  </pre>
                );
              default:
                return null;
            }
          })}
        </article>

        {/* フッターの戻るリンク */}
        <div className="mt-12 pt-8 border-t">
          <Link href="/Blog" className="inline-flex items-center gap-2 text-sm border rounded-md px-4 py-2">
            <svg aria-hidden className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            ブログ一覧に戻る
          </Link>
        </div>
      </main>
    </div>
  );
}
