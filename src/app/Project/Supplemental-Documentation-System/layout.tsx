import type { Metadata } from "next";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "Supplemental-Documentation-System｜ryota-space",
  description: "聴覚障碍者に向けたノートテイクシステム開発プロジェクト",
  appleWebApp: true,
  openGraph: {
    title: "Supplemental-Documentation-System｜ryota-space",
    description: "聴覚障碍者に向けたノートテイクシステム開発プロジェクト",
    url: "https://ryota-space.vercel.app/Project/Supplemental-Documentation-System",
    siteName: "ryota-space",
    images: [
      {
        url: "/TheLost.webp",
        width: 1920,
        height: 1080,
        alt: "Supplemental-Documentation-System",
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
