import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  // Ensure trailing slash is enabled for static exports
  trailingSlash: true,
  // Ignore ESLint errors during build
  eslint: {
    ignoreDuringBuilds: true
  }
};

export default nextConfig;
