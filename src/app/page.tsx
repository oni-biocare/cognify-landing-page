import { BenefitsSection } from "@/components/layout/sections/benefits";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { TestimonialSection } from "@/components/layout/sections/testimonial";
import Script from 'next/script';

export const metadata = {
  title: "CognifyMetrics | AI-Powered Internal Knowledge & Training Intelligence",
  description:
    "CognifyMetrics helps organizations turn internal documents into trusted, source-cited answers. Improve onboarding, reduce repetitive questions, and measure knowledge gaps with AI-powered analytics.",
  keywords: [
    "CognifyMetrics",
    "internal knowledge AI",
    "enterprise knowledge base",
    "AI training platform",
    "employee onboarding software",
    "internal chatbot",
    "AI knowledge assistant",
    "SOP management",
    "policy training",
    "corporate learning",
    "knowledge analytics",
    "AI-powered onboarding",
    "enterprise AI",
    "secure AI chatbot",
    "on-prem AI chatbot",
    "SaaS internal tools",
  ],
  openGraph: {
    type: "website",
    url: "https://cognifymetrics.com",
    title: "CognifyMetrics | Trusted AI for Internal Knowledge & Training",
    description:
      "Turn scattered internal documents into trusted answers with citations. Reduce onboarding time, improve SOP adoption, and gain clear visibility into knowledge gaps.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CognifyMetrics – AI-powered internal knowledge and training platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@CognifyMetrics",
    title: "CognifyMetrics | AI for Internal Knowledge & Onboarding",
    description:
      "Trusted, source-cited answers for your team. Improve onboarding, SOPs, and internal training with measurable AI-driven insights.",
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
