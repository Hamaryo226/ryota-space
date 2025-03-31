import type { Metadata } from "next";
import { Header } from "@/components/header";
import { createPageMetadata } from "@/config/metadata";

export const metadata: Metadata = createPageMetadata(
  "Supplemental-Documentation-System",
  "聴覚障碍者に向けたノートテイクシステム開発プロジェクト",
  "/TheLost.webp"
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
