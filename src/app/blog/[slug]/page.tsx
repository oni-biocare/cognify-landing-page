import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogPost, getAllBlogPosts, getRelatedBlogPosts } from '@/lib/blog';
import BlogContent from '@/components/blog/blog-content';
import BlogHeader from '@/components/blog/blog-header';
import BlogRelated from '@/components/blog/blog-related';

interface Params {
  slug: string;
}

// Generate metadata for each blog post
export async function generateMetadata({ 
  params 
}: { 
  params: Params 
}): Promise<Metadata> {
  const post = await getBlogPost(params.slug || '');
  
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

// Generate static paths for all blog posts
export async function generateStaticParams() {
  try {
    const posts = await getAllBlogPosts();
    
    // Ensure we return simple objects with just the slug property
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    // Return a default post to ensure build doesn't fail
    return [{ slug: 'sample-post' }];
  }
}

interface PageProps {
  params: Params;
}

const BlogPostPage = async ({ params }: PageProps) => {
  const post = await getBlogPost(params.slug || '');
  
  if (!post) {
    notFound();
  }
  
  const relatedPosts = await getRelatedBlogPosts(params.slug || '');
  
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

export default BlogPostPage; 