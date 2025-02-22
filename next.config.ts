import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images:{
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.yandex.net'
            }
        ]
    }
};

export default nextConfig;
