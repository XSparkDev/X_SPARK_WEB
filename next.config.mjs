import path from "node:path"
import { fileURLToPath } from "node:url"

/** App directory (this file lives in the Next project root). Turbopack must not use a parent lockfile as root. */
const appDir = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: appDir,
  },
  // Export as a fully static site so platforms like Render Static Sites can serve from the `out` folder
  output: "export",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Required for static export when using Next.js Image component
    unoptimized: true,
  },
}

export default nextConfig
