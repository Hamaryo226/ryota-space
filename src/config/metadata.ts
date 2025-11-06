import type { Metadata } from "next";

const baseUrl = "https://ryota-space.vercel.app";

export const defaultMetadata: Metadata = {
  title: "ryota-space",
  description: "Ryota's personal space",
  appleWebApp: true,
  openGraph: {
    title: "ryota-space",
    description: "",
    url: baseUrl,
    siteName: "ryota-space",
    images: [
      {
        url: "/icon/og.webp",
        width: 1920,
        height: 1080,
        alt: "ryota-space",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/icon/favicon.ico", sizes: "any" },
      { url: "/icon/favicon-16x16.png", sizes: "16x16" },
      {
        url: "/icon/dark-mode-icon.png",
        sizes: "any",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    shortcut: { url: "/icon/favicon-16x16.png" },
    apple: { url: "/icon/apple-touch-icon.png" },
  },
};

export const createPageMetadata = (
  title: string,
  description: string,
  image: string
): Metadata => ({
  ...defaultMetadata,
  title: `${title}｜ryota-space`,
  description,
  openGraph: {
    ...defaultMetadata.openGraph,
    title: `${title}｜ryota-space`,
    description,
    url: `${baseUrl}${title.toLowerCase().replace(/\s+/g, "-")}`,
    images: [
      {
        url: image,
        width: 1920,
        height: 1080,
        alt: title,
      },
    ],
  },
});
