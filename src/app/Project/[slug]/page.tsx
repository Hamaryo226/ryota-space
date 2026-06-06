import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getArticleBySlug, getAllSlugs } from "@/lib/articles";
import { BackButton } from "@/components/back-button";
import { ModeToggle } from "@/components/mode-togle";

function getTechLogoPath(techName: string): { light?: string; dark?: string } | null {
  const normalizedName = techName.toLowerCase().replace(/\s+/g, '').replace(/#/g, 'sharp');

  const logoMap: Record<string, { light?: string; dark?: string }> = {
    'nextjs': { light: '/Logo/nextjs.svg', dark: '/Logo/nextjs.svg' },
    'next.js': { light: '/Logo/nextjs.svg', dark: '/Logo/nextjs.svg' },
    'react': { light: '/Logo/nextjs.svg', dark: '/Logo/nextjs.svg' },
    'javascript': { light: '/Logo/javascript.svg', dark: '/Logo/javascript.svg' },
    'typescript': { light: '/Logo/typescript.svg', dark: '/Logo/typescript.svg' },
    'tailwindcss': { light: '/Logo/tailwindcss.svg', dark: '/Logo/tailwindcss.svg' },
    'tailwind': { light: '/Logo/tailwindcss.svg', dark: '/Logo/tailwindcss.svg' },
    'bootstrap': { light: '/Logo/bootstrap.svg', dark: '/Logo/bootstrap.svg' },
    'bootstrap5': { light: '/Logo/bootstrap.svg', dark: '/Logo/bootstrap.svg' },
    'python': { light: '/Logo/python.svg', dark: '/Logo/python.svg' },
    'django': { light: '/Logo/django.svg', dark: '/Logo/django.svg' },
    'php': { light: '/Logo/php.svg', dark: '/Logo/php_dark.svg' },
    'csharp': { light: '/Logo/csharp.svg', dark: '/Logo/csharp.svg' },
    'c#': { light: '/Logo/csharp.svg', dark: '/Logo/csharp.svg' },
    'dotnet': { light: '/Logo/dotnet.svg', dark: '/Logo/dotnet.svg' },
    '.net': { light: '/Logo/dotnet.svg', dark: '/Logo/dotnet.svg' },
    '.netfreamework': { light: '/Logo/dotnet.svg', dark: '/Logo/dotnet.svg' },
    '.netframework': { light: '/Logo/dotnet.svg', dark: '/Logo/dotnet.svg' },
    'neon': { light: '/Logo/neon.svg', dark: '/Logo/neon.svg' },
    'postgresql': { light: '/Logo/neon.svg', dark: '/Logo/neon.svg' },
    'postgresql(neon)': { light: '/Logo/neon.svg', dark: '/Logo/neon.svg' },
    'vercel': { light: '/Logo/Vercel_light.svg', dark: '/Logo/Vercel_dark.svg' },
    'webcomponents': { light: '/Logo/webcomponents.svg', dark: '/Logo/webcomponents.svg' },
  };

  for (const [key, paths] of Object.entries(logoMap)) {
    if (normalizedName.includes(key)) {
      return paths;
    }
  }

  return null;
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({
    slug: slug,
  }));
}

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

  const techStack = article.content?.["技術スタック"];
  const techEntries = techStack && typeof techStack !== "string"
    ? Object.entries(techStack)
    : [];

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-background to-muted/20">
      <main className="mx-auto w-full max-w-screen-lg px-4 sm:px-6 lg:px-8 py-6 sm:py-10">

        {/* 戻る */}
        <div className="mb-6 flex items-center justify-between">
          <BackButton href="/Project" label="プロジェクト一覧に戻る" />
          <div>
            <ModeToggle />
          </div>
        </div>

        {/* ===== HERO ===== */}
        {article.thumbnail && (
          <div className="relative w-full max-h-[200px] sm:max-h-[280px] md:max-h-[360px] aspect-[16/9] sm:aspect-[21/9] rounded-xl sm:rounded-2xl overflow-hidden border mb-8 shadow-sm">
            <Image
              src={article.thumbnail}
              alt={article.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* ===== ヘッダー情報 ===== */}
        <header className="mb-10">
          {article.systemname && (
            <div className="mb-3 inline-flex items-center gap-2 px-3 py-1 text-xs font-mono font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
              {article.systemname}
            </div>
          )}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight break-words leading-tight">
            {article.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
              {article.category === "university" ? "大学開発" : "個人開発"}
            </span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 lg:gap-12">

          {/* ===== メインコンテンツ ===== */}
          <div className="min-w-0">

            {/* 説明 */}
            {article.description && (
              <p className="text-base leading-relaxed text-foreground/80 mb-10 border-l-4 border-primary/40 pl-4 italic">
                {article.description}
              </p>
            )}

            {/* ダウンロード */}
            {article.links?.Installer && (
              <div className="mb-10">
                <a
                  href={article.links.Installer}
                  download
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  インストーラーをダウンロード
                </a>
              </div>
            )}

            {/* コンテンツ */}
            {article.content && (
              <div className="space-y-10">

                {/* 概要 */}
                {article.content.概要 && (
                  <section>
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                      <span className="w-1 h-6 bg-primary rounded-full" />
                      概要
                    </h2>
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {article.content.概要}
                    </p>
                  </section>
                )}

                {/* 目的・目標・クライアント */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-primary rounded-full" />
                    プロジェクト詳細
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {article.content.想定クライアント && (
                      <div className="rounded-xl border bg-card p-5">
                        <h3 className="text-sm font-semibold text-muted-foreground mb-1">想定クライアント</h3>
                        <p className="text-foreground font-medium">{article.content.想定クライアント}</p>
                      </div>
                    )}
                    {article.content.目的 && (
                      <div className="rounded-xl border bg-card p-5">
                        <h3 className="text-sm font-semibold text-muted-foreground mb-1">目的</h3>
                        <p className="text-foreground font-medium">{article.content.目的}</p>
                      </div>
                    )}
                    {article.content.目標 && (
                      <div className={`rounded-xl border bg-card p-5 ${article.content.想定クライアント && article.content.目的 ? "" : "sm:col-span-2"}`}>
                        <h3 className="text-sm font-semibold text-muted-foreground mb-1">目標</h3>
                        <p className="text-foreground font-medium">{article.content.目標}</p>
                      </div>
                    )}
                  </div>
                </section>

                {/* 技術スタック */}
                {techEntries.length > 0 && (
                  <section>
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                      <span className="w-1 h-6 bg-primary rounded-full" />
                      技術スタック
                    </h2>
                    <div className="space-y-4">
                      {techEntries.map(([category, techs]) => (
                        <div key={category}>
                          <h3 className="text-sm font-medium text-muted-foreground mb-2">{category}</h3>
                          <div className="flex flex-wrap gap-2">
                            {techs.map((tech, i) => {
                              const logoPaths = getTechLogoPath(tech);
                              return (
                                <div key={i} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border bg-card text-sm shadow-sm">
                                  {logoPaths && (
                                    <>
                                      {logoPaths.light && (
                                        <Image src={logoPaths.light} alt={tech} width={16} height={16} className="object-contain dark:hidden" />
                                      )}
                                      {logoPaths.dark && (
                                        <Image src={logoPaths.dark} alt={tech} width={16} height={16} className="object-contain hidden dark:block" />
                                      )}
                                    </>
                                  )}
                                  <span>{tech}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* コード例 */}
                {article.code && (
                  <section>
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                      <span className="w-1 h-6 bg-primary rounded-full" />
                      実装例
                    </h2>
                    <div className="space-y-4">
                      {Object.entries(article.code).map(([key, codeData]) => (
                        <div key={key} className="rounded-xl border overflow-hidden shadow-sm">
                          <div className="flex items-center justify-between px-4 py-3 bg-muted/30 border-b">
                            <div>
                              <div className="font-medium text-sm">{codeData.title}</div>
                              <div className="text-xs text-muted-foreground mt-0.5">{codeData.description}</div>
                            </div>
                            <span className="text-xs font-mono text-muted-foreground bg-muted/50 px-2 py-1 rounded">{codeData.filename}</span>
                          </div>
                          <pre className="bg-muted/50 p-4 overflow-x-auto text-xs sm:text-sm leading-relaxed">
                            <code className={`language-${codeData.language}`}>{codeData.code}</code>
                          </pre>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </div>
            )}
          </div>

          {/* ===== サイドバー ===== */}
          <aside className="space-y-6">

            {/* 関連リンク */}
            {article.links && Object.entries(article.links).filter(([t]) => t !== "Installer").length > 0 && (
              <div className="rounded-xl border bg-card p-5">
                <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                  関連リンク
                </h3>
                <ul className="space-y-2">
                  {Object.entries(article.links)
                    .filter(([t]) => t !== "Installer")
                    .map(([title, url], i) => (
                      <li key={i}>
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors py-1.5 px-2 rounded-lg hover:bg-muted/50"
                        >
                          <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                          <span className="truncate">{title}</span>
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            )}

            {/* 参考文献 */}
            {article.references && (
              <div className="rounded-xl border bg-card p-5">
                <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                  参考文献
                </h3>
                <ul className="space-y-2">
                  {Object.entries(article.references).map(([title, url], i) => (
                    <li key={i}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors py-1.5 px-2 rounded-lg hover:bg-muted/50"
                      >
                        <span className="text-xs text-primary shrink-0 mt-0.5">[{i + 1}]</span>
                        <span className="truncate">{title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* プロジェクト情報カード */}
            <div className="rounded-xl border bg-card p-5">
              <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                プロジェクト情報
              </h3>
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">カテゴリ</dt>
                  <dd className="font-medium">{article.category === "university" ? "大学開発" : "個人開発"}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">期間</dt>
                  <dd className="font-medium text-right">{article.date}</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>

        {/* フッター戻る */}
        <div className="mt-12 pt-8 border-t">
          <BackButton href="/Project" label="プロジェクト一覧に戻る" />
        </div>
      </main>
    </div>
  );
}
