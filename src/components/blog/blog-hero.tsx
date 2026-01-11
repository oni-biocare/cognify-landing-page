"use client";

import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface BlogHeroProps {
  onSearchChange: (query: string) => void;
  initialQuery: string;
}

export default function BlogHero({ onSearchChange, initialQuery }: BlogHeroProps) {
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  useEffect(() => {
    setSearchQuery(initialQuery);
  }, [initialQuery]);

  const triggerSearch = () => {
    onSearchChange(searchQuery);
  };

  return (
    <section className="pb-12">
      <div className="text-center mb-10">
        <Badge className="mb-4 text-white">Our Blog</Badge>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl mb-4">
          AI powered training solutions
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover the latest trends, strategies, and innovations for growing your training programs with our AI-powered solutions.
        </p>
      </div>
      
      <div className="max-w-lg mx-auto">
        <form
          className="relative"
          onSubmit={(e) => {
            e.preventDefault();
            triggerSearch();
          }}
        >
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder="Search articles..."
            className="pl-9 pr-24"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button
            type="submit"
            variant="secondary"
            className="absolute right-1 top-1/2 -translate-y-1/2 h-8 px-3"
          >
            Search
          </Button>
        </form>
      </div>
    </section>
  );
}
