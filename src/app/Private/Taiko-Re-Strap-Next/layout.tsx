import type { Metadata } from "next";
import { Header } from "@/components/header";
import { createPageMetadata } from "@/config/metadata";

export const metadata: Metadata = createPageMetadata(
  "Taiko-Re-Strap-Next",
  "A .tja file player with FullHD image quality support",
  "/Taiko-Re-Strap-Next.webp"
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
