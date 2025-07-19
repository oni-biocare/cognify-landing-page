import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { TestimonialSection } from "@/components/layout/sections/testimonial";
import { BenefitsSection } from "@/components/layout/sections/benefits";
import Script from 'next/script';

export const metadata = {
  title: "Cognify Metrics - AI-Powered Market Intelligence for E-commerce Growth",
  description: "Discover AI-powered trend analysis, keyword research, and competitive intelligence for Shopify & WooCommerce stores. Get more accuracy in trend prediction and 3x faster market insights.",
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
    type: "website",
    url: "https://cognifymetrics.com",
    title: "Cognify Metrics - AI-Powered Market Intelligence for E-commerce",
    description: "Transform your e-commerce business with AI-powered trend analysis, keyword optimization, and predictive market intelligence. Trusted by 1000+ e-commerce businesses.",
    images: [
      {
        url: "/og-image.png",
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
    images: ["/og-image.png"],
  },
};

// Organization schema for Google search results logo
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Cognify Metrics',
  url: 'https://cognifymetrics.com',
  logo: 'https://cognifymetrics.com/logo.png',
  sameAs: [
    'https://twitter.com/cognifymetrics',
    'https://linkedin.com/company/cognifymetrics'
    // Add other social profiles if available
  ]
};

export default function Home() {
  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      
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
