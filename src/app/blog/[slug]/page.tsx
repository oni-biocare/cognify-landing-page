import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogPost, getAllBlogPosts, getRelatedBlogPosts } from '@/lib/blog';
import BlogContent from '@/components/blog/blog-content';
import BlogHeader from '@/components/blog/blog-header';
import BlogRelated from '@/components/blog/blog-related';

// Generate metadata for each blog post
export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string } 
}): Promise<Metadata> {
  const post = await getBlogPost(params.slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }
  
  return {
    title: `${post.title} | Cognify Metrics Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
      url: `/blog/${post.slug}`,
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const post = await getBlogPost(params.slug);
  
  if (!post) {
    notFound();
  }
  
  const relatedPosts = await getRelatedBlogPosts(params.slug);
  
  return (
    <div className="container py-8 md:py-12">
      <article className="max-w-3xl mx-auto">
        <BlogHeader post={post} />
        <BlogContent content={post.content} />
      </article>
      
      <BlogRelated relatedPosts={relatedPosts} />
    </div>
  );
} 