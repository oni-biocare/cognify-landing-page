/** @type {import('next').NextConfig} */
const nextConfig = {
  // Explicitly disable type checking in the build
  typescript: {
    // This completely disables TypeScript during builds
    ignoreBuildErrors: true,
    // Tell Next.js not to create a type-checked project reference
    tsconfigPath: process.env.GITHUB_PAGES ? '.github/tsconfig.build.json' : './tsconfig.json',
  },
  // Disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable generation of pages for assets
  pageExtensions: ['ts', 'tsx', 'mdx'],
  // Change output mode to export for static site
  output: 'export',
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
};

export default nextConfig;