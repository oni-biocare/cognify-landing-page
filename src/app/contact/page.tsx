import { Metadata } from "next";
import { ContactSection } from "@/components/layout/sections/contact";

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