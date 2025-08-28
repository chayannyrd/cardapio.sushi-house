/** @type {import('next').NextConfig} */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  poweredByHeader: false,
  compiler: { styledComponents: { ssr: true } },
  images: {
    unoptimized: true,
  },
  basePath: 'cardapio.sushi-house'

};

export default nextConfig;

