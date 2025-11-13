import Link from "next/link";
import { getArticlesByCategory } from "@/lib/articles";

export default function ProjectPage() {
  const universityProjects = getArticlesByCategory("university");
  const personalProjects = getArticlesByCategory("personal");

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
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">プロジェクト</h1>
          <p className="mt-2 text-sm text-muted-foreground">制作したプロジェクトの一覧です。</p>
        </header>

        {/* 大学開発プロジェクト */}
        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">大学開発</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {universityProjects.map((article) => (
              <li key={article.slug}>
                <Link
                  href={`/Project/${article.slug}`}
                  className="block h-full border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-semibold line-clamp-2 break-words">
                      {article.title}
                    </h3>
                    <span className="text-[11px] md:text-xs text-muted-foreground whitespace-nowrap">
                      {article.date}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                    {article.description}
                  </p>
                  <span className="sr-only">詳細を見る</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* 個人開発プロジェクト */}
        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">個人開発</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {personalProjects.map((article) => (
              <li key={article.slug}>
                <Link
                  href={`/Project/${article.slug}`}
                  className="block h-full border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-semibold line-clamp-2 break-words">
                      {article.title}
                    </h3>
                    <span className="text-[11px] md:text-xs text-muted-foreground whitespace-nowrap">
                      {article.date}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                    {article.description}
                  </p>
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
