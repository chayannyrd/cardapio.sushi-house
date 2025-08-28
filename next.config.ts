/** @type {import('next').NextConfig} */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  poweredByHeader: false,
  compiler: { styledComponents: { ssr: true } },
  images: {
    unoptimized: true, // se você estiver usando <Image /> do Next
  },

};

export default nextConfig;

