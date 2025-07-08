"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { BlogPost } from "@/lib/blog";

interface BlogRelatedProps {
  relatedPosts: BlogPost[];
}

export default function BlogRelated({ relatedPosts }: BlogRelatedProps) {
  if (relatedPosts.length === 0) {
    return null;
  }
  
  return (
    <section className="mt-16 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {relatedPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} passHref>
            <Card className="overflow-hidden h-full transition-all hover:border-primary/50">
              <div className="relative h-36">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                />
              </div>
              
              <CardContent className="p-4">
                <p className="text-xs text-muted-foreground mb-1">
                  {formatDate(post.date)}
                </p>
                <h3 className="font-medium line-clamp-2 mb-2 group-hover:text-primary">
                  {post.title}
                </h3>
                <div className="flex items-center text-xs text-primary">
                  Read more <ArrowRight className="ml-1 h-3 w-3" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
} 