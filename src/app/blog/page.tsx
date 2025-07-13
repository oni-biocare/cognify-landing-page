import { Metadata } from 'next';
import { getAllBlogPosts } from '@/lib/blog';
import BlogList from '@/components/blog/blog-list';
import BlogHero from '@/components/blog/blog-hero';

export const metadata: Metadata = {
  title: 'Blog | Cognify Metrics - AI-Powered E-commerce Market Intelligence',
  description: 'Explore the latest insights, trends, and strategies for e-commerce growth with our AI-powered market intelligence blog.',
  openGraph: {
    title: 'Blog | Cognify Metrics - AI-Powered E-commerce Market Intelligence',
    description: 'Explore the latest insights, trends, and strategies for e-commerce growth with our AI-powered market intelligence blog.',
    type: 'website',
    url: '/blog',
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cognify Metrics - AI Market Intelligence Platform",
      },
    ],
  },
  keywords: [
    "AI market intelligence platform",
    "Digital marketing intelligence software",
    "slow trend identification",
    "trend forecasting ai platform",
    "competitive intelligence ai software",
    "e-commerce trend analysis software",
    "shopify trend detection tool",
    "Cognify Metrics for Shopify",
    "Shopify trend detection tool",
    "How to predict market trends",
    "Find early trend detection software",
    "which ai market intelligence platform"
  ],

};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <div className="container py-8 md:py-12">
      <BlogHero />
      <BlogList posts={posts} />
    </div>
  );
} 