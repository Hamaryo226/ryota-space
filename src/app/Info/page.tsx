import type { ElementType } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Box,
  FileCode,
  GitBranch,
  Globe,
  Layers,
  Package,
  Palette,
  Paintbrush,
  Puzzle,
} from "lucide-react";

import { BackButton } from "@/components/back-button";
import { ModeToggle } from "@/components/mode-togle";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import packageJson from "../../../package.json";

type TechItem = {
  name: string;
  version: string;
  category: string;
  icon: ElementType;
};

const techStack: TechItem[] = [
  { name: "Next.js", version: packageJson.dependencies.next, category: "Framework", icon: Globe },
  { name: "React", version: packageJson.dependencies.react, category: "UI Library", icon: Layers },
  { name: "TypeScript", version: packageJson.devDependencies.typescript, category: "Language", icon: FileCode },
  { name: "Tailwind CSS", version: packageJson.devDependencies.tailwindcss, category: "Styling", icon: Palette },
  { name: "Radix UI", version: packageJson.dependencies["@radix-ui/react-avatar"], category: "Primitive", icon: Puzzle },
  { name: "Lucide React", version: packageJson.dependencies["lucide-react"], category: "Icon", icon: Paintbrush },
  { name: "next-themes", version: packageJson.dependencies["next-themes"], category: "Theme", icon: Box },
  { name: "class-variance-authority", version: packageJson.dependencies["class-variance-authority"], category: "Utility", icon: Package },
  { name: "ESLint", version: packageJson.devDependencies.eslint, category: "Tooling", icon: FileCode },
];

const summaryItems = [
  { label: "Framework", value: "Next.js", detail: packageJson.dependencies.next },
  { label: "Deploy", value: "Vercel", detail: "Production hosting" },
  { label: "Package Manager", value: "npm", detail: "package-lock.json" },
];

const repoInfo = {
  name: "Hamaryo226/ryota-space",
  url: "https://github.com/Hamaryo226/ryota-space",
};

export default function InfoPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background">
      <main className="mx-auto w-full max-w-screen-lg px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
        <div className="mb-10 flex items-center justify-between">
          <BackButton href="/" label="ホームに戻る" />
          <ModeToggle />
        </div>

        <header className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Site information
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            サイト情報
          </h1>
          <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
            このサイトの構成、利用している技術、公開しているリポジトリを確認できます。
          </p>
        </header>

        <section className="mb-8 grid gap-3 sm:grid-cols-3">
          {summaryItems.map((item) => (
            <Card key={item.label} className="rounded-lg py-0 shadow-none">
              <CardContent className="p-5">
                <p className="text-xs text-muted-foreground">{item.label}</p>
                <p className="mt-2 text-lg font-semibold tracking-tight">{item.value}</p>
                <p className="mt-1 truncate font-mono text-xs text-muted-foreground">
                  {item.detail}
                </p>
              </CardContent>
            </Card>
          ))}
        </section>

        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <section>
            <div className="mb-4 flex items-end justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold tracking-tight">技術スタック</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  使用している主要パッケージとバージョンです。
                </p>
              </div>
              <span className="shrink-0 rounded-md border px-2.5 py-1 font-mono text-xs text-muted-foreground">
                {techStack.length} items
              </span>
            </div>

            <Card className="rounded-lg py-0 shadow-none">
              <CardContent className="p-0">
                <div className="divide-y">
                  {techStack.map((item) => (
                    <div
                      key={item.name}
                      className="grid grid-cols-[1fr_auto] gap-4 px-4 py-4 sm:grid-cols-[220px_1fr_auto] sm:px-5"
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <div className="flex size-9 shrink-0 items-center justify-center rounded-md border bg-muted/40">
                          <item.icon className="size-4 text-muted-foreground" />
                        </div>
                        <div className="min-w-0">
                          <p className="truncate text-sm font-medium">{item.name}</p>
                          <p className="text-xs text-muted-foreground sm:hidden">{item.category}</p>
                        </div>
                      </div>
                      <div className="hidden items-center text-sm text-muted-foreground sm:flex">
                        {item.category}
                      </div>
                      <div className="flex items-center">
                        <span className="rounded-md bg-muted px-2 py-1 font-mono text-xs text-muted-foreground">
                          {item.version}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          <aside className="space-y-4">
            <Card className="rounded-lg shadow-none">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <GitBranch className="size-4" />
                  リポジトリ
                </CardTitle>
                <CardDescription>
                  ソースコードはGitHubで公開しています。
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium">{repoInfo.name}</p>
                  <p className="mt-1 truncate font-mono text-xs text-muted-foreground">
                    {repoInfo.url}
                  </p>
                </div>
                <Button asChild variant="outline" className="w-full justify-between">
                  <a href={repoInfo.url} target="_blank" rel="noopener noreferrer">
                    GitHubで開く
                    <ArrowUpRight className="size-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="rounded-lg shadow-none">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Globe className="size-4" />
                  公開環境
                </CardTitle>
                <CardDescription>
                  フロントエンドはNext.jsで構築し、Vercelにデプロイしています。
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <InfoRow label="Hosting" value="Vercel" />
                  <Separator />
                  <InfoRow label="Runtime" value="Next.js" />
                  <Separator />
                  <InfoRow label="Package" value="npm" />
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>

        <footer className="mt-12 border-t pt-6">
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <Link href="/" className="transition-colors hover:text-foreground">
              ホーム
            </Link>
            <Link href="/Project" className="transition-colors hover:text-foreground">
              プロジェクト
            </Link>
            <Link href="/Blog" className="transition-colors hover:text-foreground">
              ブログ
            </Link>
          </nav>
        </footer>
      </main>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
