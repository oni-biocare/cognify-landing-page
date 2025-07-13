import { Metadata } from "next";
import { ContactSection } from "@/components/layout/sections/contact";

export const metadata: Metadata = {
  title: "Contact Us - Cognify Metrics",
  description: "Get in touch with the Cognify Metrics team for questions about our AI-powered market intelligence solutions for e-commerce businesses.",
  keywords: [
    "AI market intelligence platform",
    "Digital marketing intelligence software",
    "slow trend identification",
    "trend forecasting ai platform",
    "competitive intelligence ai software",
    "e-commerce trend analysis software",
    "shopify trend detection tool",
    "Cognify Metrics for Shopify",
    "Shopify trend detection tool",
    "How to predict market trends",
    "Find early trend detection software",
    "which ai market intelligence platform"
  ],
  openGraph: {
    title: "Contact Us - Cognify Metrics",
    description: "Get in touch with the Cognify Metrics team for questions about our AI-powered market intelligence solutions for e-commerce businesses.",
    type: "website",
    url: "/contact",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cognify Metrics - AI Market Intelligence Platform",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <main>
      <div className="pt-20 pb-8 md:pt-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground text-center md:w-2/3 mx-auto">
            Have questions or need assistance? Our team is here to help with any inquiries about our AI-powered market intelligence solutions.
          </p>
        </div>
      </div>
      
      <ContactSection />
    </main>
  );
} 