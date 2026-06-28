import Image from "next/image";
import Link from "next/link";
import { Twitter, Instagram, Github, Youtube, Info } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "@/components/mode-togle";
import { getAllArticles } from "@/lib/articles";

export default function Home() {
  const projects = getAllArticles().slice(0, 3);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-background to-muted/20">
      <main className="mx-auto w-full max-w-screen-lg px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

        {/* ===== ヘッダー ===== */}
        <div className="flex items-center justify-between mb-8 sm:mb-16">
          <Link href="/" className="text-sm font-mono text-muted-foreground hover:text-foreground transition-colors">
            ryota-space
          </Link>
          <div className="flex items-center gap-3">
            <ModeToggle />
          </div>
        </div>

        {/* ===== HERO ===== */}
        <section className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 mb-12 md:mb-24">

          {/* アバター */}
          <div className="relative shrink-0">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/30 via-primary/10 to-transparent blur-sm" />
            <Avatar className="w-28 h-28 sm:w-36 sm:h-36 border-2 border-border/50 shadow-md">
              <AvatarImage src="https://avatars.githubusercontent.com/u/52881627?v=4" />
              <AvatarFallback />
            </Avatar>
          </div>

          {/* テキスト */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-mono text-primary bg-primary/10 rounded-full border border-primary/20">
              システムエンジニア / プログラマー
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Hama<span className="text-primary">ryo</span>
            </h1>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
                システムエンジニアとして開発したプロジェクトや、個人で取り組んだ成果をまとめています。
            </p>
          </div>
        </section>

        {/* ===== ナビゲーション ===== */}
        <section className="mb-12 md:mb-20">
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/Project"
              className="flex-1 group relative overflow-hidden rounded-xl border bg-card p-4 sm:p-6 hover:shadow-md transition-all hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                </div>
                <div>
                  <h2 className="font-semibold text-sm sm:text-base">プロジェクト</h2>
                  <p className="text-xs sm:text-sm text-muted-foreground">制作したプロジェクト一覧</p>
                </div>
              </div>
            </Link>
            <Link
              href="/Blog"
              className="flex-1 group relative overflow-hidden rounded-xl border bg-card p-4 sm:p-6 hover:shadow-md transition-all hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
                </div>
                <div>
                  <h2 className="font-semibold text-sm sm:text-base">ブログ</h2>
                  <p className="text-xs sm:text-sm text-muted-foreground">技術記事や開発記録、その他の考え</p>
                </div>
              </div>
            </Link>
            <Link
              href="/Info"
              className="flex-1 group relative overflow-hidden rounded-xl border bg-card p-4 sm:p-6 hover:shadow-md transition-all hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Info className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div>
                  <h2 className="font-semibold text-sm sm:text-base">サイト情報</h2>
                  <p className="text-xs sm:text-sm text-muted-foreground">技術スタック・バージョン・リポジトリ</p>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* ===== 注目プロジェクト ===== */}
        <section className="mb-12 md:mb-20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <span className="w-1 h-5 sm:h-6 bg-primary rounded-full" />
              注目プロジェクト
            </h2>
            <Link href="/Project" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              すべて見る →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((article) => (
              <Link
                key={article.slug}
                href={`/Project/${article.slug}`}
                className="group rounded-xl border bg-card overflow-hidden hover:shadow-md transition-all hover:-translate-y-0.5"
              >
                {article.thumbnail && (
                  <div className="relative w-full h-40 bg-muted overflow-hidden">
                    <Image
                      src={article.thumbnail}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${article.category === "university" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"}`}>
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
            ))}
          </div>
        </section>

        {/* ===== ソーシャル ===== */}
        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
            <span className="w-1 h-5 sm:h-6 bg-primary rounded-full" />
            リンク
          </h2>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            {/* <SocialLink href="https://twitter.com/_hamaryo" icon={Twitter} label="X (Twitter)" /> */}
            <SocialLink href="https://www.instagram.com/ryota_ztts" icon={Instagram} label="Instagram" />
            <SocialLink href="https://github.com/Hamaryo226" icon={Github} label="GitHub" />
            {/* <SocialLink href="https://www.youtube.com/@Fumolat" icon={Youtube} label="YouTube" /> */}
          </div>
        </section>
      </main>

      {/* ===== フッター ===== */}
      <footer className="border-t py-6">
        <div className="mx-auto w-full max-w-screen-lg px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Hamaryo</p>
          <div className="flex items-center gap-4">
            <Link href="/Project" className="hover:text-foreground transition-colors">Project</Link>
            <Link href="/Blog" className="hover:text-foreground transition-colors">Blog</Link>
            <Link href="/Info" className="hover:text-foreground transition-colors">Info</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SocialLink({ href, icon: Icon, label }: { href: string; icon: React.ElementType; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full sm:w-auto inline-flex items-center justify-center sm:justify-start gap-2.5 px-4 py-3 sm:py-2.5 rounded-xl border bg-card text-sm text-muted-foreground hover:text-foreground hover:shadow-sm transition-all hover:-translate-y-0.5"
    >
      <Icon className="w-4 h-4" />
      <span>{label}</span>
    </a>
  );
}
