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
  },
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