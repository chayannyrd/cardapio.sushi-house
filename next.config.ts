/** @type {import('next').NextConfig} */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  poweredByHeader: false,
  compiler: { styledComponents: { ssr: true } },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "font-src 'self' use.typekit.net *.gstatic.com;",
          },
        ],
      },
    ];
  },
};


export default nextConfig;

