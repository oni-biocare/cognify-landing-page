"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { ArrowRight, Clock, CalendarIcon } from "lucide-react";
import { BlogPost } from "@/lib/blog";

interface BlogRelatedProps {
  relatedPosts: BlogPost[];
}

export default function BlogRelated({ relatedPosts }: BlogRelatedProps) {
  if (relatedPosts.length === 0) {
    return null;
  }
  
  return (
    <section className="mt-20 max-w-6xl mx-auto px-4">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-3">
          Related Articles
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Discover more insights and strategies to grow your e-commerce business
        </p>
      </div>
      
      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} passHref>
            <Card className="group overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/30 hover:-translate-y-1 bg-card/50 backdrop-blur-sm">
              {/* Image Container - following blog-card.tsx structure */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Category Badge */}
                {post.categories.length > 0 && (
                  <Badge className="absolute top-3 left-3 z-10 bg-primary/90 text-primary-foreground border-0">
                    {post.categories[0]}
                  </Badge>
                )}
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Content */}
              <CardContent className="p-6 space-y-4">
                {/* Date and Reading Time */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <CalendarIcon className="h-3 w-3" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{post.readingTime}</span>
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="font-semibold text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors duration-200">
                  {post.title}
                </h3>
                
                {/* Excerpt */}
                <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
                
                {/* Read More Link */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center text-sm font-medium text-primary group-hover:text-primary/80 transition-colors duration-200">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                  
                  {/* Author Info */}
                  <div className="flex items-center gap-2">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={24}
                      height={24}
                      className="rounded-full border-2 border-background"
                    />
                    <span className="text-xs text-muted-foreground">
                      {post.author.name}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      
      {/* Call to Action */}
      <div className="text-center mt-12">
        <Link href="/blog">
          <Badge variant="outline" className="px-6 py-3 text-base hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
            View All Articles
          </Badge>
        </Link>
      </div>
    </section>
  );
} 