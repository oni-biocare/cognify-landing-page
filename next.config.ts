/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: [
      'localhost', 
      'localhost:3000', 
      'media.licdn.com', 
      'onibiocare.com',
      'oni-biocare.github.io'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  // Disable TypeScript type checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable generation of pages for assets
  pageExtensions: ['ts', 'tsx', 'mdx'],
  // Change output mode to export for static site
  output: 'export',
};

export default nextConfig;