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
  // Use Node.js server runtime for all pages including dynamic routes
  output: 'standalone',
  // External packages for server components
  serverExternalPackages: ['sharp', 'onnxruntime-node'],
  experimental: {
    // This ensures proper handling of dynamic route static generation
    serverComponentsExternalPackages: ['sharp', 'onnxruntime-node'],
  },
};

export default nextConfig;
