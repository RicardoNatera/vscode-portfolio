import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // ❌  NO detengas el build por errores de lint
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
