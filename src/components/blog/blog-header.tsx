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
  return (
    <header className="mb-10">
      <div className="mb-4">
        <Link href="/blog">
          <Badge variant="outline" className="mb-4">
            Back to all posts
          </Badge>
        </Link>
        
        <h1 className="scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl mb-4">
          {post.title}
        </h1>
        
        <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>
        
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-medium text-sm">{post.author.name}</p>
                <p className="text-xs text-muted-foreground">{post.author.bio}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <CalendarIcon size={16} />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock size={16} />
                <span>{post.readingTime}</span>
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button size="sm" variant="outline" className="gap-2">
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
        />
        <div className="absolute bottom-4 right-4 flex gap-2">
          {post.categories.map((category) => (
            <Badge key={category}>{category}</Badge>
          ))}
        </div>
      </div>
    </header>
  );
} 