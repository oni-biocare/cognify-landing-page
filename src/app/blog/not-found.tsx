import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function BlogNotFound() {
  return (
    <div className="container py-24 sm:py-32">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
        <p className="text-muted-foreground mb-8">
          Sorry, the blog post you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild>
            <Link href="/blog">Browse All Posts</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
} 