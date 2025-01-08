import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https', // Protocol of the image source
        hostname: 'images.unsplash.com', // Hostname of the image source
        port: '', // Port (optional, usually empty)
        pathname: '/**', // Path matching pattern (e.g., all paths with `/**`)
      },
    ],
  },
};

export default nextConfig;