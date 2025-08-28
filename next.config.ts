/** @type {import('next').NextConfig} */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  poweredByHeader: false,
  compiler: { styledComponents: { ssr: true } },
};

export default nextConfig;

