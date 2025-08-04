import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogPost, getAllBlogPosts, getRelatedBlogPosts } from '@/lib/blog';
import BlogContent from '@/components/blog/blog-content';
import BlogHeader from '@/components/blog/blog-header';
import BlogRelated from '@/components/blog/blog-related';
import { JsonLd } from '@/components/blog/json-ld';

// Use a simple type that doesn't cause issues
type PageParams = {
  slug: string;
};

// Generate metadata for each blog post
export async function generateMetadata({ 
  params 
}: { 
  params: PageParams
}): Promise<Metadata> {
  const finalParams = await params;
  const slug = finalParams?.slug || '';
  const post = await getBlogPost(slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found', 
    };
  }

  // Generate keywords from title, categories, and content
  const keywords = [
    ...post.categories,
    ...post.title.toLowerCase().split(' ').filter(word => word.length > 3),
    "shopify trend identification tool",
    "Cognify Metrics for Shopify",
    "Shopify trend identification tool",
    "How to identify market trends",
    "Find early trend identification software",
    "which ai market intelligence platform",
    'Cognify Metrics'
  ].slice(0, 15); // Limit to 15 keywords

  // Create canonical URL
  const canonicalUrl = `https://cognifymetrics.com/blog/${post.slug}`;
  
  return {
    title: `${post.title} | Cognify Metrics Blog`,
    description: post.excerpt,
    keywords: keywords.join(', '),
    authors: [{ name: post.author.name, url: `https://cognifymetrics.com/author/${post.author.name.toLowerCase().replace(/\s+/g, '-')}` }],
    creator: post.author.name,
    publisher: 'Cognify Metrics',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://cognifymetrics.com'),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.date, // You might want to add a modified date field to your blog posts
      authors: [post.author.name],
      url: canonicalUrl,
      siteName: 'Cognify Metrics',
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: post.title,
          type: 'image/png',
        },
      ],
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: ["/og-image.png"],
      creator: '@cognifymetrics',
      site: '@cognifymetrics',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code', // Add your Google Search Console verification code
    },
    other: {
      'article:published_time': post.date,
      'article:author': post.author.name,
      'article:section': post.categories[0] || 'Digital Marketing',
      'article:tag': post.categories.join(', '),
    },
  };
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  try {
    const posts = await getAllBlogPosts();
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [{ slug: 'sample-post' }];
  }
}

// Simple page function that doesn't use custom types
export default async function Page({ params }: { params: { slug: string } }) {
  const finalParams = await params;
  const slug = finalParams?.slug || '';
  const post = await getBlogPost(slug);
  
  if (!post) {
    notFound();
  }
  
  const relatedPosts = await getRelatedBlogPosts(slug);
  
  return (
    <>
      <JsonLd post={post} />
      <div className="container py-8 md:py-12">
        <article className="max-w-3xl mx-auto" itemScope itemType="https://schema.org/BlogPosting">
          <BlogHeader post={post} />
          <BlogContent content={post.content} categories={post.categories} />
        </article>
        
        <BlogRelated relatedPosts={relatedPosts} />
      </div>
    </>
  );
} 