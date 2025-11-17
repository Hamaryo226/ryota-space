import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getArticleBySlug, getAllSlugs } from "@/lib/articles";

// 技術名からロゴのパスを取得
function getTechLogoPath(techName: string): { light?: string; dark?: string } | null {
  const normalizedName = techName.toLowerCase().replace(/\s+/g, '').replace(/#/g, 'sharp');
  
  const logoMap: Record<string, { light?: string; dark?: string }> = {
    // フロントエンド
    'nextjs': { light: '/Logo/nextjs.svg', dark: '/Logo/nextjs.svg' },
    'next.js': { light: '/Logo/nextjs.svg', dark: '/Logo/nextjs.svg' },
    'react': { light: '/Logo/nextjs.svg', dark: '/Logo/nextjs.svg' },
    'javascript': { light: '/Logo/javascript.svg', dark: '/Logo/javascript.svg' },
    'typescript': { light: '/Logo/typescript.svg', dark: '/Logo/typescript.svg' },
    // スタイリング
    'tailwindcss': { light: '/Logo/tailwindcss.svg', dark: '/Logo/tailwindcss.svg' },
    'tailwind': { light: '/Logo/tailwindcss.svg', dark: '/Logo/tailwindcss.svg' },
    'bootstrap': { light: '/Logo/bootstrap.svg', dark: '/Logo/bootstrap.svg' },
    'bootstrap5': { light: '/Logo/bootstrap.svg', dark: '/Logo/bootstrap.svg' },
    // バックエンド
    'python': { light: '/Logo/python.svg', dark: '/Logo/python.svg' },
    'django': { light: '/Logo/django.svg', dark: '/Logo/django.svg' },
    'php': { light: '/Logo/php.svg', dark: '/Logo/php_dark.svg' }, // ライトモードでは非表示（背景色追加で対応）
    // .NET
    'csharp': { light: '/Logo/csharp.svg', dark: '/Logo/csharp.svg' },
    'c#': { light: '/Logo/csharp.svg', dark: '/Logo/csharp.svg' },
    'dotnet': { light: '/Logo/dotnet.svg', dark: '/Logo/dotnet.svg' },
    '.net': { light: '/Logo/dotnet.svg', dark: '/Logo/dotnet.svg' },
    '.netfreamework': { light: '/Logo/dotnet.svg', dark: '/Logo/dotnet.svg' },
    '.netframework': { light: '/Logo/dotnet.svg', dark: '/Logo/dotnet.svg' },
    // データベース
    'neon': { light: '/Logo/neon.svg', dark: '/Logo/neon.svg' },
    'postgresql': { light: '/Logo/neon.svg', dark: '/Logo/neon.svg' },
    'postgresql(neon)': { light: '/Logo/neon.svg', dark: '/Logo/neon.svg' },
    // デプロイ
    'vercel': { light: '/Logo/Vercel_light.svg', dark: '/Logo/Vercel_dark.svg' },
    // その他
    'webcomponents': { light: '/Logo/webcomponents.svg', dark: '/Logo/webcomponents.svg' },
  };
  
  // 部分一致でも検索
  for (const [key, paths] of Object.entries(logoMap)) {
    if (normalizedName.includes(key)) {
      return paths;
    }
  }
  
  return null;
}

// 静的生成のためのパラメータを生成
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({
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
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "記事が見つかりません" };
  }

  return {
    title: `${article.title} | Projects`,
    description: article.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <main className="mx-auto w-full max-w-screen-md px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        {/* 戻る */}
        <div className="mb-4">
          <Link href="/" className="inline-flex items-center gap-2 text-sm border rounded-md px-3 py-2">
            <svg aria-hidden className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            戻る
          </Link>
        </div>

        {/* ヘッダー */}
        <header className="mb-6">
          {article.systemname && (
            <div className="mb-2 text-xs font-medium text-primary">{article.systemname}</div>
          )}
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight break-words">{article.title}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{article.date}</p>
        </header>

        {/* サムネイル */}
        {article.thumbnail && (
          <div className="relative w-full h-48 sm:h-56 md:h-64 rounded-lg overflow-hidden border mb-6">
            <Image
              src={article.thumbnail}
              alt={article.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 768px"
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* 説明 */}
        {article.description && (
          <p className="text-base leading-relaxed text-muted-foreground mb-8">{article.description}</p>
        )}

        {/* 詳細情報 */}
        {article.content && (
          <section className="mb-10 space-y-6">
            {article.content.概要 && (
              <div>
                <h2 className="text-lg font-semibold mb-2">概要</h2>
                <p className="text-muted-foreground leading-relaxed">{article.content.概要}</p>
              </div>
            )}
            <div className="grid gap-6 md:grid-cols-2">
              {article.content.想定クライアント && (
                <div>
                  <h3 className="text-base font-semibold mb-2">想定クライアント</h3>
                  <p className="text-muted-foreground">{article.content.想定クライアント}</p>
                </div>
              )}
              {article.content.目的 && (
                <div>
                  <h3 className="text-base font-semibold mb-2">目的</h3>
                  <p className="text-muted-foreground">{article.content.目的}</p>
                </div>
              )}
            </div>
            {article.content.目標 && (
              <div>
                <h3 className="text-base font-semibold mb-2">目標</h3>
                <p className="text-muted-foreground">{article.content.目標}</p>
              </div>
            )}
           {article.content.技術スタック && (
              <div>
                <h2 className="text-lg font-semibold mb-2">技術スタック</h2>
                {typeof article.content.技術スタック === 'string' ? (
                  <p className="text-muted-foreground leading-relaxed">{article.content.技術スタック}</p>
                ) : (
                  <div className="space-y-3">
                    {Object.entries(article.content.技術スタック).map(([category, techs]) => (
                      <div key={category} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <h3 className="text-sm font-medium min-w-[100px] shrink-0">{category}</h3>
                        <div className="flex flex-wrap gap-2">
                          {techs.map((tech, i) => {
                            const logoPaths = getTechLogoPath(tech);
                            return (
                              <div key={i} className="flex items-center gap-2 px-3 py-1.5 border rounded-md bg-muted/30">
                                {logoPaths && (
                                  <>
                                    {logoPaths.light && (
                                      <Image 
                                        src={logoPaths.light} 
                                        alt={tech} 
                                        width={18} 
                                        height={18} 
                                        className="object-contain dark:hidden" 
                                      />
                                    )}
                                    {logoPaths.dark && (
                                      <Image 
                                        src={logoPaths.dark} 
                                        alt={tech} 
                                        width={18} 
                                        height={18} 
                                        className="object-contain hidden dark:block" 
                                      />
                                    )}
                                  </>
                                )}
                                <span className="text-sm text-muted-foreground">{tech}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </section>
        )}

        {/* コード例 */}
        {article.code && (
          <section className="mb-10 space-y-6">
            <h2 className="text-lg font-semibold">実装例</h2>
            {Object.entries(article.code).map(([key, codeData]) => (
              <div key={key} className="border rounded-md overflow-hidden">
                <div className="flex items-center justify-between px-3 py-2 border-b bg-muted/50">
                  <div>
                    <div className="font-medium text-sm">{codeData.title}</div>
                    <div className="text-xs text-muted-foreground">{codeData.description}</div>
                  </div>
                  <span className="text-xs font-mono">{codeData.filename}</span>
                </div>
                <pre className="bg-muted p-3 overflow-x-auto text-xs sm:text-sm">
                  <code className={`language-${codeData.language}`}>{codeData.code}</code>
                </pre>
              </div>
            ))}
          </section>
        )}

        {/* 参考文献 */}
        {article.references && (
          <section className="mb-10">
            <h2 className="text-lg font-semibold mb-3">参考文献</h2>
            <ul className="space-y-2">
              {Object.entries(article.references).map(([title, url], i) => (
                <li key={i}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-md px-3 py-3 border"
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* 関連リンク */}
        {article.links && (
          <section className="mb-10">
            <h2 className="text-lg font-semibold mb-3">関連リンク</h2>
            <ul className="space-y-2">
              {Object.entries(article.links).map(([title, url], i) => (
                <li key={i}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-md px-3 py-3 border"
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* フッターの戻るリンク */}
        <div className="mt-8">
          <Link href="/" className="inline-flex items-center gap-2 text-sm border rounded-md px-4 py-2">
            <svg aria-hidden className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            戻る
          </Link>
        </div>
      </main>
    </div>
  );
}
