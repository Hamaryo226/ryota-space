import type { Metadata } from "next";
import { Header } from "@/components/header";
import { createPageMetadata } from "@/config/metadata";

export const metadata: Metadata = createPageMetadata(
  "Taiko-Re-Strap",
  "A .tja file player (feat. DTXMania & TJAPlayer2 forPC)",
  "/Taiko-Re-Strap.webp"
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
