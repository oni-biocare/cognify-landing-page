"use client";

import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function BlogHero() {
  const [searchQuery, setSearchQuery] = useState("");
  
  return (
    <section className="pb-12">
      <div className="text-center mb-10">
        <Badge className="mb-4 text-white">Our Blog</Badge>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl mb-4">
          AI-Powered E-commerce Insights
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover the latest trends, strategies, and innovations for growing your e-commerce business with our AI-powered market intelligence.
        </p>
      </div>
      
      <div className="max-w-lg mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder="Search articles..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
    </section>
  );
} 