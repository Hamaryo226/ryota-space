import type { Metadata } from "next";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "Taiko-Re-Strap-Next｜ryota-space",
  description: "",
  appleWebApp: true,
  openGraph: {
    title: "Taiko-Re-Strap-Next｜ryota-space",
    description: "",
    url: "https://ryota-space.vercel.app/Private/Taiko-Re-Strap-Next",
    siteName: "ryota-space",
    images: [
      {
        url: "/Taiko-Re-Strap-Next.webp",
        width: 1920,
        height: 1080,
        alt: "Taiko-Re-Strap-Next",
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
