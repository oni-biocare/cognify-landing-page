import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Search, ShoppingCart, BarChart3, Zap } from "lucide-react";

interface FeaturesProps {
  icon: React.ComponentType<{ size?: number; className?: string; color?: string }>;
  title: string;
  description: string;
  features: string[];
}

const featureList: FeaturesProps[] = [
  {
    icon: TrendingUp,
    title: "AI-Powered Trend Identification",
    description: "Multi-level trend identification with more accuracy across mega, macro, micro, and seasonal patterns.",
    features: [
      "Real-time monitoring with 50+ data algorithms",
      "Trend identification with more accuracy", 
      "Multi-level trend identification (mega, macro, micro, seasonal)",
      "Advanced pattern recognition"
    ]
  },
  {
    icon: Search,
    title: "Advanced Keyword Intelligence",
    description: "AI-generated keywords with search volume prediction and competitor analysis for maximum impact.",
    features: [
      "AI powered analysis",
      "Search volume prediction",
      "Competitor keyword analysis",
      "Long-tail keyword discovery"
    ]
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Integration",
    description: "Seamless integration with Shopify and WooCommerce for automated inventory-based insights.",
    features: [
      "Shopify and WooCommerce integration",
      "Automated inventory-based insights",
      "Multi-platform management",
      "Real-time sync and updates"
    ]
  },
  {
    icon: BarChart3,
    title: "Business Intelligence Dashboard",
    description: "Comprehensive analytics with real-time insights, predictive data, and ROI tracking.",
    features: [
      "Real-time analytics dashboard",
      "Predictive insights and forecasting",
      "ROI tracking and optimization",
      "Custom reporting and exports"
    ]
  },
  {
    icon: Zap,
    title: "AI Strategy Generator",
    description: "Automated marketing strategy creation with product development insights and channel optimization.",
    features: [
      "Marketing strategy creation",
      "Product development insights", 
      "Channel optimization recommendations",
      "Competitive positioning analysis"
    ]
  }
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        <Badge className="text-white">Core Features</Badge>
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Everything You Need to Dominate Your Market
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-16">
        Powerful AI-driven tools designed specifically for e-commerce businesses to identify trends, optimize keywords, and maximize growth opportunities.
      </h3>

      <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {featureList.map(({ icon: IconComponent, title, description, features }, index) => (
          <div key={title}>
            <Card className="h-full bg-background border-2 hover:border-primary/50 transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="bg-primary/20 p-3 rounded-full ring-8 ring-primary/10 mb-4 w-16 h-16 mx-auto flex items-center justify-center">
                  <IconComponent
                    size={28}
                    className="text-primary"
                  />
                </div>

                <CardTitle className="text-xl mb-2">{title}</CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-2">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* Additional feature highlight */}
      <div className="mt-16 text-center">
        <div className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Real-Time Intelligence with 50+ Data Algorithms</h3>
          <p className="text-muted-foreground text-lg mb-6">
            Our AI constantly monitors social media, news, search trends, competitor activities, and market signals to deliver actionable insights exactly when you need them.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Social Media Trends</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Search Volume Data</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Competitor Analysis</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Market Sentiment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
