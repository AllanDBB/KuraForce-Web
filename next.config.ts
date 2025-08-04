import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure proper hydration
  reactStrictMode: true,
  
  // Optimize images for Vercel
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Vercel specific optimizations
  trailingSlash: false,
};

export default nextConfig;
