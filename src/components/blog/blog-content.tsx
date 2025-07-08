"use client";

import { useEffect } from 'react';
import { Separator } from '@/components/ui/separator';

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
      <div dangerouslySetInnerHTML={{ __html: content }} />
      
      <Separator className="my-12" />
      
      <div className="flex flex-wrap gap-2 pt-4">
        <span className="font-medium">Tags:</span>
        <div className="flex flex-wrap gap-2 text-primary">
          <a href="/blog?tag=ai" className="hover:underline">#AI</a>
          <a href="/blog?tag=e-commerce" className="hover:underline">#E-commerce</a>
          <a href="/blog?tag=market-intelligence" className="hover:underline">#MarketIntelligence</a>
        </div>
      </div>
    </div>
  );
} 