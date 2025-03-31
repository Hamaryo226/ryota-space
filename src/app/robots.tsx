import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/Private/Taiko-Re-Strap-Next/", "/Private/Taiko-Re-Strap/"],
    },
    sitemap: "https://ryota-space.vercel.app/sitemap.xml",
  };
}
