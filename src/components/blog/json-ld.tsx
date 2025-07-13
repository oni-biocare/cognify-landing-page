import { BlogPost } from '@/lib/blog';

interface JsonLdProps {
  post: BlogPost;
}

export function JsonLd({ post }: JsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    author: {
      '@type': 'Person',
      name: post.author.name,
      url: `https://cognifymetrics.com/author/${post.author.name.toLowerCase().replace(/\s+/g, '-')}`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Cognify Metrics',
      logo: {
        '@type': 'ImageObject',
        url: 'https://cognifymetrics.com/logo.png',
      },
    },
    datePublished: post.date,
    dateModified: post.date, // You might want to add a modified date field
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://cognifymetrics.com/blog/${post.slug}`,
    },
    articleSection: post.categories[0] || 'Digital Marketing',
    keywords: post.categories.join(', '),
    url: `https://cognifymetrics.com/blog/${post.slug}`,
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    wordCount: post.content.split(' ').length,
    timeRequired: post.readingTime,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
} 