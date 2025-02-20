import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ryota-space",
    short_name: "ryota-space",
    description: "ryota-spaceは、個人のポートフォリオサイトです。",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/logo/apple-touch-icon.png",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
