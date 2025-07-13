"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import { CalendarIcon, Clock, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface BlogHeaderProps {
  post: {
    title: string;
    excerpt: string;
    coverImage: string;
    date: string;
    categories: string[];
    author: {
      name: string;
      avatar: string;
      bio: string;
    };
    readingTime: string;
  };
}

export default function BlogHeader({ post }: BlogHeaderProps) {
  const handleShare = async () => {
    if (typeof window === 'undefined') return;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        // You could add a toast notification here
        console.log('URL copied to clipboard');
      } catch (error) {
        console.log('Error copying to clipboard:', error);
      }
    }
  };

  return (
    <header className="mb-10">
      <div className="mb-4">
        <Link href="/blog">
          <Badge variant="outline" className="mb-4">
            Back to all posts
          </Badge>
        </Link>
        
        <h1 
          className="scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl mb-4"
          itemProp="headline"
        >
          {post.title}
        </h1>
        
        <p 
          className="text-xl text-muted-foreground mb-6"
          itemProp="description"
        >
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2" itemProp="author" itemScope itemType="https://schema.org/Person">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={40}
                height={40}
                className="rounded-full"
                itemProp="image"
              />
              <div>
                <p className="font-medium text-sm" itemProp="name">{post.author.name}</p>
                <p className="text-xs text-muted-foreground" itemProp="description">{post.author.bio}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <CalendarIcon size={16} />
                <time dateTime={post.date} itemProp="datePublished">
                  {formatDate(post.date)}
                </time>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock size={16} />
                <span itemProp="timeRequired">{post.readingTime}</span>
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button 
              size="sm" 
              variant="outline" 
              className="gap-2"
              onClick={handleShare}
              aria-label="Share this article"
              type="button"
            >
              <Share2 size={14} />
              Share
            </Button>
          </div>
        </div>
      </div>
      
      <div className="relative aspect-[21/9] md:aspect-[3/1] rounded-lg overflow-hidden mb-8 bg-muted">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 85vw, 75vw"
          itemProp="image"
        />
        <div className="absolute bottom-4 right-4 flex gap-2">
          {post.categories.map((category) => (
            <Badge key={category} itemProp="keywords">
              {category}
            </Badge>
          ))}
        </div>
      </div>
    </header>
  );
} 