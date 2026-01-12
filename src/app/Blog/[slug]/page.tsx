import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getBlogBySlug, getAllBlogSlugs } from "@/lib/blogs";
import { BackButton } from "@/components/back-button";

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
        <div className="mb-6">
          <BackButton href="/Blog" label="ブログ一覧に戻る" />
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
          <div className="w-full rounded-lg overflow-hidden border mb-8">
            <Image
              src={blog.thumbnail}
              alt={blog.title}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              priority
            />
          </div>
        )}

        {/* 本文 */}
        <article className="prose prose-slate dark:prose-invert max-w-none">
          {blog.content.map((block, index) => {
            switch (block.type) {
              case "heading":
                if (block.level === 1) {
                  return <h1 key={index} className="text-3xl font-bold mt-8 mb-4">{block.text}</h1>;
                } else if (block.level === 2) {
                  return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{block.text}</h2>;
                } else if (block.level === 3) {
                  return <h3 key={index} className="text-xl font-bold mt-6 mb-3">{block.text}</h3>;
                } else if (block.level === 4) {
                  return <h4 key={index} className="text-lg font-bold mt-6 mb-3">{block.text}</h4>;
                } else if (block.level === 5) {
                  return <h5 key={index} className="text-base font-bold mt-4 mb-2">{block.text}</h5>;
                } else {
                  return <h6 key={index} className="text-sm font-bold mt-4 mb-2">{block.text}</h6>;
                }
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
          <BackButton href="/Blog" label="ブログ一覧に戻る" />
        </div>
      </main>
    </div>
  );
}
