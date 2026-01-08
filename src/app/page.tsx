import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { TestimonialSection } from "@/components/layout/sections/testimonial";
import { BenefitsSection } from "@/components/layout/sections/benefits";
import { DemoSection } from "@/components/layout/sections/demo";
import Script from 'next/script';

export const metadata = {
  title: "CognifyMetrics | AI-Powered Insights, Metrics, and Decision Intelligence",
  description:
    "CognifyMetrics helps teams turn scattered data into clear insights. Analyze performance, track meaningful metrics, and surface actionable recommendations with AI—faster decisions, measurable outcomes.",
  keywords: [
    "CognifyMetrics",
    "AI analytics",
    "decision intelligence",
    "business intelligence",
    "product analytics",
    "performance metrics",
    "insight platform",
    "data analytics",
    "AI insights",
    "KPI dashboard",
    "metrics tracking",
    "growth analytics",
    "predictive analytics",
    "data-driven decision making",
    "enterprise analytics",
    "SaaS analytics",
  ],
  openGraph: {
    type: "website",
    url: "https://cognifymetrics.com",
    title: "CognifyMetrics | AI-Powered Insights, Metrics, and Decision Intelligence",
    description:
      "Turn scattered data into clear insights. Track metrics that matter and get AI-powered recommendations to move faster with confidence.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CognifyMetrics – AI-powered insights and metrics dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@CognifyMetrics",
    title: "CognifyMetrics | AI-Powered Insights and Metrics",
    description:
      "Analyze performance, track KPIs, and uncover actionable recommendations with AI—built for modern teams.",
    images: ["/og-image.png"],
  },
};;

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
      {/* <DemoSection /> */}
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
