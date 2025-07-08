"use client";

import { useState } from "react";
import { BlogPost } from "@/lib/blog";
import BlogCard from "@/components/blog/blog-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface BlogListProps {
  posts: BlogPost[];
}

export default function BlogList({ posts }: BlogListProps) {
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const categories = [
    { id: "all", name: "All Posts" },
    { id: "market-intelligence", name: "Market Intelligence" },
    { id: "e-commerce", name: "E-commerce" },
    { id: "ai-trends", name: "AI Trends" },
    { id: "case-studies", name: "Case Studies" },
    { id: "tutorials", name: "Tutorials" },
  ];
  
  const filteredPosts = selectedCategory === "all"
    ? posts
    : posts.filter(post => post.categories.includes(selectedCategory));
  
  const displayedPosts = filteredPosts.slice(0, visiblePosts);
  const hasMorePosts = filteredPosts.length > visiblePosts;
  
  const loadMore = () => {
    setVisiblePosts(prev => prev + 6);
  };
  
  return (
    <section className="py-8">
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {categories.map((category) => (
          <Badge
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            className="cursor-pointer px-4 py-2 text-sm"
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </Badge>
        ))}
      </div>
      
      {filteredPosts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No posts found in this category.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {displayedPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
          
          {hasMorePosts && (
            <div className="flex justify-center mt-8">
              <Button onClick={loadMore} variant="outline" className="gap-2">
                Load More <ChevronDown size={16} />
              </Button>
            </div>
          )}
        </>
      )}
    </section>
  );
} 