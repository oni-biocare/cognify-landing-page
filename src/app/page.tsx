import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { TestimonialSection } from "@/components/layout/sections/testimonial";
import { BenefitsSection } from "@/components/layout/sections/benefits";

export const metadata = {
  title: "Cognify Metrics - AI-Powered Market Intelligence for E-commerce Growth",
  description: "Discover AI-powered trend analysis, keyword research, and competitive intelligence for Shopify & WooCommerce stores. Get more accuracy in trend prediction and 3x faster market insights.",
  keywords: [
    "AI keyword research tool",
    "Shopify keyword optimization", 
    "e-commerce trend analysis",
    "product keyword generator",
    "AI market intelligence",
    "WooCommerce SEO tools",
    "e-commerce analytics",
    "AI trend forecasting"
  ],
  openGraph: {
    type: "website",
    url: "https://cognifymetrics.com",
    title: "Cognify Metrics - AI-Powered Market Intelligence for E-commerce",
    description: "Transform your e-commerce business with AI-powered trend analysis, keyword optimization, and predictive market intelligence. Trusted by 1000+ e-commerce businesses.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cognify Metrics - AI Market Intelligence Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@CognifyMetrics",
    title: "Cognify Metrics - AI Market Intelligence for E-commerce",
    description: "Discover trending products before your competitors with AI-powered market intelligence. Join 1000+ successful e-commerce businesses.",
    images: ["/twitter-card.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialSection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
