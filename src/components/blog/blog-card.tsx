import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import { CalendarIcon, Clock } from "lucide-react";

interface BlogCardProps {
  post: {
    slug: string;
    title: string;
    excerpt: string;
    coverImage: string;
    date: string;
    categories: string[];
    author: {
      name: string;
      avatar: string;
    };
    readingTime: string;
  };
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} passHref>
      <Card className="overflow-hidden h-full flex flex-col transition-all duration-200 hover:shadow-md hover:border-primary/50">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {post.categories.length > 0 && (
            <Badge className="absolute top-3 right-3 z-10">
              {post.categories[0]}
            </Badge>
          )}
        </div>
        
        <CardHeader className="px-4 py-3 pb-0">
          <h3 className="text-lg font-bold line-clamp-2">{post.title}</h3>
        </CardHeader>
        
        <CardContent className="px-4 py-3 flex-grow">
          <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
        </CardContent>
        
        <CardFooter className="px-4 py-3 pt-0 border-t flex items-center justify-between gap-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={24}
              height={24}
              className="rounded-full"
            />
            <span>{post.author.name}</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <CalendarIcon size={14} />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{post.readingTime}</span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
} 