/** @type {import('next').NextConfig} */
const nextConfig = {
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
