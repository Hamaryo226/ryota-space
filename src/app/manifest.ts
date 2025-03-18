import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ryota-space",
    short_name: "ryota-space",
    description: "ryota-spaceは、個人のポートフォリオサイトです。",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/icon/apple-touch-icon.png",
        sizes: "any",
        type: "image/apple-touch-icon",
      },
      {
        src: "/icon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon/favicon.ico",
        sizes: "any",
        type: "image/shorcut icon",
      },
    ],
  };
}
