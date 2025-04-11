import type { NextConfig } from "next";
import { createMDX } from "fumadocs-mdx/next";
const withMDX = createMDX();

const config:NextConfig = {
  reactStrictMode: true,
  experimental: {
    reactCompiler: true,
    mdxRs: true,
  },
  typescript: { ignoreBuildErrors: true },
  async rewrites() {
    return [
      {
        source: "/llms.txt",
        destination: "/api/llm",
      },
    ];
  },
};

export default withMDX(config);
