import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

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
