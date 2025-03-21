import type { Metadata } from "next";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "Frailty-Check-System｜ryota-space",
  description: "高齢者に向けたフレイルチェックシステム開発プロジェクト",
  appleWebApp: true,
  openGraph: {
    title: "Frailty-Check-System｜ryota-space",
    description: "高齢者に向けたフレイルチェックシステム開発プロジェクト",
    url: "https://ryota-space.vercel.app/Project/Frailty-Check-System",
    siteName: "ryota-space",
    images: [
      {
        url: "/fcs.webp",
        width: 1920,
        height: 1080,
        alt: "Frailty-Check-System",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
};

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
