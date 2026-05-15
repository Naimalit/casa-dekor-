import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    /**
     * Next 15 enables segment explorer devtools by default; on Windows it can
     * trigger intermittent 500s: "SegmentViewNode ... not found in React Client Manifest".
     */
    devtoolSegmentExplorer: false,
  },
  images: {
    /** Explicit qualities for next/image (required configuration in Next 16+). */
    qualities: [60, 75, 92],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
