import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  experimental: {
    optimizePackageImports: ['@tailwindcss/ui']
  }
};

export default nextConfig;
