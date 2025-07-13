import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import GoogleAnalytics from "@/components/analytics/google-analytics";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cognify Metrics - AI-Powered Market Intelligence for E-commerce Growth",
  description: "Transform your e-commerce business with AI-powered trend analysis, keyword optimization, and predictive market intelligence. Get more accuracy in trend prediction.",
  metadataBase: new URL('https://cognifymetrics.com'),
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
  authors: [{ name: "Cognify Metrics", url: "https://cognifymetrics.com" }],
  creator: "Cognify Metrics",
  publisher: "Cognify Metrics",
  openGraph: {
    title: "Cognify Metrics - AI-Powered Market Intelligence for E-commerce Growth",
    description: "Transform your e-commerce business with AI-powered trend analysis, keyword optimization, and predictive market intelligence. Get more accuracy in trend prediction.",
    url: "https://cognifymetrics.com",
    siteName: "Cognify Metrics",
    images: [
      { url: "https://cognifymetrics.com/og-image.png", width: 1200, height: 630, alt: "Cognify Metrics" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background", inter.className)}>
        <GoogleAnalytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
