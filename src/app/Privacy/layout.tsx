import type { Metadata } from "next";
import { Header } from "@/components/header";
import { createPageMetadata } from "@/config/metadata";

export const metadata: Metadata = createPageMetadata(
  "プライバシーポリシー",
  "当サイトでは、個人情報の重要性を認識し、個人情報保護法を遵守し、個人情報を適切に取り扱うことをお約束します。",
  "/NotFound.webp"
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
