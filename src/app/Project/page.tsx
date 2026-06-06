import Link from "next/link";
import Image from "next/image";
import { type Article, getArticlesByCategory } from "@/lib/articles";
import { BackButton } from "@/components/back-button";
import { ModeToggle } from "@/components/mode-togle";

export default function ProjectPage() {
  const universityProjects = getArticlesByCategory("university");
  const personalProjects = getArticlesByCategory("personal");

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <main className="mx-auto w-full max-w-screen-lg px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="mb-6 flex items-center justify-between">
          <BackButton href="/" label="ホームに戻る" />
          <div>
            <ModeToggle />
          </div>
        </div>

        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">プロジェクト</h1>
          <p className="mt-2 text-sm text-muted-foreground">制作したプロジェクトの一覧です。</p>
        </header>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 flex items-center gap-3">
            <span className="w-1 h-7 bg-primary rounded-full" />
            大学開発
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {universityProjects.map((article) => (
              <ProjectCard key={article.slug} article={article} />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 flex items-center gap-3">
            <span className="w-1 h-7 bg-primary rounded-full" />
            個人開発
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {personalProjects.map((article) => (
              <ProjectCard key={article.slug} article={article} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

function ProjectCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/Project/${article.slug}`}
      className="group block h-full rounded-xl border bg-card overflow-hidden hover:shadow-md transition-all hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      {article.thumbnail && (
        <div className="relative w-full h-40 bg-muted overflow-hidden">
          <Image
            src={article.thumbnail}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
            article.category === "university"
              ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
              : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
          }`}>
            {article.category === "university" ? "大学開発" : "個人開発"}
          </span>
          <span className="text-[11px] text-muted-foreground">{article.date}</span>
        </div>
        <h3 className="font-semibold text-sm line-clamp-2 mb-1">
          {article.title}
        </h3>
        <p className="text-xs text-muted-foreground line-clamp-2">
          {article.description}
        </p>
      </div>
    </Link>
  );
}
