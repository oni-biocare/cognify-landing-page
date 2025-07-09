"use client";

import { useEffect } from 'react';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

interface BlogContentProps {
  content: string;
}

export default function BlogContent({ content }: BlogContentProps) {
  // Add syntax highlighting on the client side
  useEffect(() => {
    const highlight = async () => {
      if (typeof window !== 'undefined') {
        const Prism = (await import('prismjs')).default;
        
        // Load additional languages
        await import('prismjs/components/prism-javascript');
        await import('prismjs/components/prism-typescript');
        await import('prismjs/components/prism-jsx');
        await import('prismjs/components/prism-tsx');
        await import('prismjs/components/prism-css');
        await import('prismjs/components/prism-python');
        
        Prism.highlightAll();
      }
    };
    
    highlight();
  }, [content]);
  
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
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
      `}</style>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      
      <Separator className="my-12" />
      
      <div className="flex flex-wrap gap-2 pt-4">
        <span className="font-medium">Tags:</span>
        <div className="flex flex-wrap gap-2 text-primary">
          <Link href="/blog?tag=ai" className="hover:underline">#AI</Link>
          <Link href="/blog?tag=e-commerce" className="hover:underline">#E-commerce</Link>
          <Link href="/blog?tag=market-intelligence" className="hover:underline">#MarketIntelligence</Link>
        </div>
      </div>
    </div>
  );
} 