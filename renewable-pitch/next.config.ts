import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    STOCK_API_KEY: process.env.STOCK_API_KEY,
  },
};

export default nextConfig;
