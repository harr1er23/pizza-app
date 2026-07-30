import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "juniorsbootcamp.ru",
      },
    ],
  },
};

export default nextConfig;
