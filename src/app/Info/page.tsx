import type { ElementType } from "react";
import Link from "next/link";
import Image from "next/image";
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
  brand?: ElementType;
};

const VercelIcon = () => (
  <svg viewBox="0 0 256 222" className="size-3.5" fill="currentColor" aria-label="Vercel">
    <path d="m128 0 128 221.705H0z" />
  </svg>
);

const NpmIcon = () => (
  <svg viewBox="0 0 2500 2500" className="size-3.5" aria-label="npm">
    <path fill="#c00" d="M0 0h2500v2500H0z" />
    <path fill="#fff" d="M1241.5 268.5h-973v1962.9h972.9V763.5h495v1467.9h495V268.5z" />
  </svg>
);

const CloudflareIcon = () => (
  <svg viewBox="0 0 256 116" className="size-4" aria-label="Cloudflare">
    <path fill="#F4811F" d="M202.357 49.394l-5.311-2.124C172.085 103.434 72.786 69.289 66.81 85.997c-.996 11.286 54.227 2.146 93.706 4.059 12.039.583 18.076 9.671 12.964 24.484l10.069.031c11.615-36.209 48.683-17.73 50.232-29.68-2.545-7.857-42.601 0-31.425-35.497Z" />
    <path fill="#FAAD3F" d="M205.544 48.863h-2.656c-.531 0-1.062.53-1.593 1.062l-3.718 12.747c-1.593 5.31-1.062 10.623 1.594 13.809 2.655 3.187 6.373 5.31 11.153 5.843l19.652 1.062c.53 0 1.062.53 1.593.53.53.532.53 1.063 0 1.594-.531 1.063-1.062 1.594-2.125 1.594l-20.182 1.062c-11.154.53-22.838 9.56-27.087 20.182l-1.063 4.78c-.531.532 0 1.594 1.063 1.594h70.108c1.062 0 1.593-.531 1.593-1.593 1.062-4.25 2.124-9.03 2.124-13.81 0-27.618-22.838-50.456-50.456-50.456" />
  </svg>
);

const techStack: TechItem[] = [
  { name: "Next.js", version: packageJson.dependencies.next, category: "Framework", icon: Globe},
  { name: "React", version: packageJson.dependencies.react, category: "UI Library", icon: Layers },
  { name: "TypeScript", version: packageJson.devDependencies.typescript, category: "Language", icon: FileCode },
  { name: "Tailwind CSS", version: packageJson.devDependencies.tailwindcss, category: "Styling", icon: Palette },
  { name: "Radix UI", version: packageJson.dependencies["@radix-ui/react-avatar"], category: "Primitive", icon: Puzzle },
  { name: "Lucide React", version: packageJson.dependencies["lucide-react"], category: "Icon", icon: Paintbrush },
  { name: "next-themes", version: packageJson.dependencies["next-themes"], category: "Theme", icon: Box },
  { name: "class-variance-authority", version: packageJson.dependencies["class-variance-authority"], category: "Utility", icon: Package },
  { name: "ESLint", version: packageJson.devDependencies.eslint, category: "Tooling", icon: FileCode },
  { name: "@opennextjs/cloudflare", version: packageJson.devDependencies["@opennextjs/cloudflare"], category: "Adapter", icon: CloudflareIcon },
];

const summaryItems = [
  { label: "Framework", value: "Next.js", detail: packageJson.dependencies.next },
  { label: "Deploy", value: "Cloudflare", detail: "Cloudflare Workers" },
  { label: "Package Manager", value: "npm", detail: "package-lock.json" },
];

const repoInfo = {
  name: "Hamaryo226/ryota-space",
  url: "https://github.com/Hamaryo226/ryota-space",
};

const buildDate = new Date();
const lastUpdated = `${buildDate.getFullYear()}/${String(buildDate.getMonth() + 1).padStart(2, "0")}/${String(buildDate.getDate()).padStart(2, "0")}`;

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
              <CardContent className="p-4 sm:p-5">
                <p className="text-xs text-muted-foreground">{item.label}</p>
                <p className="mt-1.5 text-base font-semibold tracking-tight sm:mt-2 sm:text-lg">{item.value}</p>
                <p className="mt-1 truncate font-mono text-xs text-muted-foreground">
                  {item.detail}
                </p>
              </CardContent>
            </Card>
          ))}
        </section>

        <div className="grid gap-6 md:grid-cols-[1fr_280px]">
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
                      className="grid grid-cols-[1fr_auto] gap-3 px-4 py-3.5 sm:grid-cols-[200px_1fr_auto] sm:gap-4 sm:px-5 sm:py-4"
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <div className="flex size-8 shrink-0 items-center justify-center rounded-md border bg-muted/40 sm:size-9">
                          <item.icon className="size-3.5 text-muted-foreground sm:size-4" />
                        </div>
                        <div className="min-w-0">
                          <p className="flex items-center gap-1.5 truncate text-sm font-medium">
                            {item.name}
                            {item.brand && <item.brand />}
                          </p>
                          <p className="text-xs text-muted-foreground sm:hidden">{item.category}</p>
                        </div>
                      </div>
                      <div className="hidden items-center text-sm text-muted-foreground sm:flex">
                        {item.category}
                      </div>
                      <div className="flex items-center">
                        <span className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-[11px] text-muted-foreground sm:px-2 sm:py-1 sm:text-xs">
                          {item.version}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <p className="mt-3 text-right font-mono text-xs text-muted-foreground/60">
              最終更新: {lastUpdated}
            </p>
          </section>

          <aside className="space-y-4">
            <Card className="rounded-lg shadow-none">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <GitBranch className="size-4" />
                  リポジトリ
                </CardTitle>
                <CardDescription>
                  GitHub Repository
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
                  Production Environment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <InfoRow label="Hosting" value="Cloudflare Workers" icon={CloudflareIcon} />
                  <Separator />
                  <InfoRow label="Domain" value="Cloudflare Registrar" icon={CloudflareIcon} />
                  <Separator />
                  <InfoRow label="Runtime" value="Next.js" icon={VercelIcon} />
                  <Separator />
                  <InfoRow label="Package" value="npm" icon={NpmIcon} />
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-lg shadow-none">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18" />
                    <path d="M9 21V9" />
                  </svg>
                  hamaryo.dev
                </CardTitle>
                <CardDescription>
                  このサイトのトップページ
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center p-4 pt-0 sm:p-5 sm:pt-0">
                <div className="relative aspect-square w-full max-w-32 sm:max-w-36">
                  <Image
                    src="/img/qrw.png"
                    alt="QR Code for hamaryo.dev"
                    fill
                    sizes="(max-width: 768px) 144px, 144px"
                    className="object-contain dark:hidden"
                    loading="eager"
                  />
                  <Image
                    src="/img/qrd.png"
                    alt="QR Code for hamaryo.dev (dark)"
                    fill
                    sizes="(max-width: 768px) 144px, 144px"
                    className="hidden object-contain dark:block"
                    loading="eager"
                  />
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

function InfoRow({ label, value, icon: Icon }: { label: string; value: string; icon?: ElementType }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-muted-foreground">{label}</span>
      <span className="flex items-center gap-1.5 whitespace-nowrap font-medium">
        {Icon && <Icon />}
        {value}
      </span>
    </div>
  );
}
