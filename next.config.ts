import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["..."],
    formats: ["image/avif", "image/webp"],
  },

  async redirects() {
    return [
      {
        source: "/Project",
        destination: "/",
        permanent: false,
      },
      {
        source: "/Private",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
