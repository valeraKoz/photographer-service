import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    reactStrictMode: false,
    images:{
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.yandex.net'
            },
            {
                protocol: 'https',
                hostname: 'storage.yandexcloud.net',
            }
        ]
    }
};

export default nextConfig;
