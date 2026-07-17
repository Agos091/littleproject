/** @type {import('next').NextConfig} */

// On GitHub Pages the site is served from https://<user>.github.io/<repo>/,
// so we need a basePath. It's driven by an env var (set only in CI) so local
// `next dev` keeps serving at the root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
};

export default nextConfig;
