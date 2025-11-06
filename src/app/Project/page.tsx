import Link from "next/link";
import { getAllArticles } from "@/lib/articles";

export default function ProjectPage() {
  const articles = getAllArticles();

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <main className="mx-auto w-full max-w-screen-lg px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">プロジェクト</h1>
          <p className="mt-2 text-sm text-muted-foreground">制作したプロジェクトの一覧です。</p>
        </header>

        <section>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {articles.map((article) => (
              <li key={article.slug}>
                <Link
                  href={`/Project/${article.slug}`}
                  className="block h-full border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h2 className="text-lg font-semibold line-clamp-2 break-words">
                      {article.title}
                    </h2>
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
