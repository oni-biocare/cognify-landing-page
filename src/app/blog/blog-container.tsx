"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { BlogPost } from "@/lib/blog";
import BlogHero from "@/components/blog/blog-hero";
import BlogList from "@/components/blog/blog-list";

interface BlogContainerProps {
  posts: BlogPost[];
}

export default function BlogContainer({ posts }: BlogContainerProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const category = searchParams.get("category") || "all";
    const query = searchParams.get("q") || "";
    setSelectedCategory(category);
    setSearchQuery(query);
  }, [searchParams]);

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(window.location.search);
    if (category === "all") {
      params.delete("category");
    } else {
      params.set("category", category);
    }
    router.push(`${window.location.pathname}?${params.toString()}`);
  };

  const handleSearchChange = (query: string) => {
    const params = new URLSearchParams(window.location.search);
    if (query) {
      params.set("q", query);
    } else {
      params.delete("q");
    }
    router.push(`${window.location.pathname}?${params.toString()}`);
  };

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === "all" || post.categories.includes(selectedCategory);
    const matchesSearch = !searchQuery || post.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <BlogHero onSearchChange={handleSearchChange} initialQuery={searchQuery} />
      <BlogList
        posts={filteredPosts}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
    </>
  );
}
