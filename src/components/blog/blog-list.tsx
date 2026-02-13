"use client";

import { useEffect, useState } from "react";
import { BlogPost } from "@/lib/blog";
import BlogCard from "@/components/blog/blog-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface BlogListProps {
  posts: BlogPost[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function BlogList({ posts, selectedCategory, onCategoryChange }: BlogListProps) {
  const [visiblePosts, setVisiblePosts] = useState(6);

  useEffect(() => {
    setVisiblePosts(6);
  }, [selectedCategory, posts]);

  const categories = [
    { id: "all", name: "All Posts" },
    { id: "internal-knowledge", name: "Internal Knowledge" },
    { id: "training-onboarding", name: "Training & Onboarding" },
    { id: "sop-policy", name: "SOP & Policy" },
    { id: "knowledge-analytics", name: "Knowledge Analytics" },
    { id: "enterprise-ai", name: "Enterprise AI" },
    { id: "internal-chatbot", name: "Internal Chatbot" },
    { id: "corporate-learning", name: "Corporate Learning" },
    { id: "case-studies", name: "Case Studies" },
  ];

  const displayedPosts = posts.slice(0, visiblePosts);
  const hasMorePosts = posts.length > visiblePosts;

  const loadMore = () => {
    setVisiblePosts((prev) => prev + 6);
  };

  return (
    <section className="py-8">
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {categories.map((category) => (
          <Badge
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            className="cursor-pointer px-4 py-2 text-sm"
            onClick={() => onCategoryChange(category.id)}
          >
            {category.name}
          </Badge>
        ))}
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No posts found.</p>
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
