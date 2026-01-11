import { Metadata } from 'next';
import { getAllBlogPosts } from '@/lib/blog';
import BlogContainer from "@/app/blog/blog-container";

export const metadata: Metadata = {
  title: "CognifyMetrics – AI-Powered Internal Knowledge & Training Platform",
  description:
    "Transform how your team learns and works. CognifyMetrics turns internal documents into trusted, source-cited answers, reduces onboarding time, and reveals real knowledge gaps with AI-powered analytics.",
  metadataBase: new URL("https://cognifymetrics.com"),
  keywords: [
    "AI internal knowledge platform",
    "enterprise knowledge management",
    "internal chatbot for employees",
    "AI onboarding software",
    "employee training AI",
    "SOP knowledge base",
    "policy training software",
    "AI knowledge assistant",
    "corporate learning platform",
    "internal documentation search",
    "secure enterprise AI",
    "on-prem AI chatbot",
    "knowledge gap analytics",
    "AI-powered onboarding",
    "CognifyMetrics internal knowledge",
  ],
  authors: [{ name: "CognifyMetrics", url: "https://cognifymetrics.com" }],
  creator: "CognifyMetrics",
  publisher: "CognifyMetrics",
  openGraph: {
    title: "CognifyMetrics – Trusted AI for Internal Knowledge & Training",
    description:
      "Give your team instant, source-cited answers from internal documents. Improve onboarding, SOP adoption, and training outcomes with measurable AI-driven insights.",
    url: "https://cognifymetrics.com",
    siteName: "CognifyMetrics",
    images: [
      {
        url: "https://cognifymetrics.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "CognifyMetrics – AI-powered internal knowledge and training platform",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <div className="container py-8 md:py-12">
      <BlogContainer posts={posts} />
    </div>
  );
} 