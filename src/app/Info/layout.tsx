import type { Metadata } from "next";
import { createPageMetadata } from "@/config/metadata";

export const metadata: Metadata = createPageMetadata(
  "Info",
  "サイトの技術スタック・バージョン・リポジトリ情報",
  "/NotFound.webp"
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
