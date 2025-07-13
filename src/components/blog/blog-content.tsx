"use client";

import { useEffect } from 'react';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

interface BlogContentProps {
  content: string;
  categories?: string[];
}

export default function BlogContent({ content, categories = [] }: BlogContentProps) {
  // Add syntax highlighting on the client side
  useEffect(() => {
    const highlight = async () => {
      if (typeof window !== 'undefined') {
        const Prism = (await import('prismjs')).default;
        
        // Load additional languages with proper type handling
        try {
          await import('prismjs/components/prism-javascript' as any);
          await import('prismjs/components/prism-typescript' as any);
          await import('prismjs/components/prism-jsx' as any);
          await import('prismjs/components/prism-tsx' as any);
          await import('prismjs/components/prism-css' as any);
          await import('prismjs/components/prism-python' as any);
        } catch (error) {
          console.warn('Some Prism language components failed to load:', error);
        }
        
        Prism.highlightAll();
      }
    };
    
    highlight();
  }, [content]);

  const handleShare = (platform: 'twitter' | 'linkedin') => {
    if (typeof window === 'undefined') return;
    
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    
    if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank');
    } else if (platform === 'linkedin') {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
    }
  };
  
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none mb-12" itemProp="articleBody">
      <style jsx global>{`
        .prose strong {
          font-weight: 700;
          color: var(--foreground);
        }
        
        .dark .prose strong {
          color: white;
        }
        
        .prose ol > li {
          margin-top: 0.5em;
          margin-bottom: 0.5em;
        }
        
        .prose ol > li strong {
          font-weight: 700;
        }
        
        .prose h2, .prose h3, .prose h4 {
          scroll-margin-top: 100px;
        }
        
        .prose a {
          color: var(--primary);
          text-decoration: underline;
          text-decoration-thickness: 1px;
          text-underline-offset: 2px;
        }
        
        .prose a:hover {
          color: var(--primary-foreground);
        }
        
        .prose blockquote {
          border-left: 4px solid var(--primary);
          padding-left: 1rem;
          font-style: italic;
          background: var(--muted);
          padding: 1rem;
          border-radius: 0.5rem;
          margin: 1.5rem 0;
        }
        
        .prose code {
          background: var(--muted);
          padding: 0.2rem 0.4rem;
          border-radius: 0.25rem;
          font-size: 0.875em;
        }
        
        .prose pre {
          background: var(--muted);
          padding: 1rem;
          border-radius: 0.5rem;
          overflow-x: auto;
        }
      `}</style>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      
      <Separator className="my-12" />
      
      {categories.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-4">
          <span className="font-medium">Tags:</span>
          <div className="flex flex-wrap gap-2 text-primary">
            {categories.map((category) => (
              <Link 
                key={category}
                href={`/blog?tag=${category.toLowerCase().replace(/\s+/g, '-')}`} 
                className="hover:underline"
                itemProp="keywords"
              >
                #{category}
              </Link>
            ))}
          </div>
        </div>
      )}
      
      <div className="mt-8 p-4 bg-muted rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Share this article</h3>
        <p className="text-sm text-muted-foreground mb-4">
          If you found this article helpful, consider sharing it with your network.
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => handleShare('twitter')}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Share on Twitter
          </button>
          <button
            type="button"
            onClick={() => handleShare('linkedin')}
            className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition-colors"
          >
            Share on LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
} 