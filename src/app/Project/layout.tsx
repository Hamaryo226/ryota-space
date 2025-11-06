import type { Metadata } from "next";
//import { Header } from "@/components/header";
import { createPageMetadata } from "@/config/metadata";

export const metadata: Metadata = createPageMetadata(
  "Projects",
  "プロジェクト一覧ページです。",
  "/NotFound.webp"
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
