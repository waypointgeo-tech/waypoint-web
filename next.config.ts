import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@waypoint/ui", "@waypoint/tokens"],
};

export default nextConfig;
