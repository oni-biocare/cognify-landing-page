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
    title: "Sourced Knowledge Chat",
    description: "Instant, cited answers from approved internal documents no more repeated questions.",
    features: [
      "Cuts repetitive Q&A time",
      "Standardizes policy and product answers",
      "Citations increase employee trust",
      "Faster time-to-answer daily",
      "Works across PDFs, wikis, FAQs"
    ]
  },
  {
    icon: Search,
    title: "Automated Quizzes",
    description: "Reinforce learning with quizzes after updates and track understanding over time.",
    features: [
      "Improves retention via active recall",
      "Validates knowledge after changes",
      "Identifies who needs coaching",
    ]
  },
  {
    icon: BarChart3,
    title: "Learning Analytics",
    description: "See top questions, weak topics, and adoption trends to improve training ROI.",
    features: [
      "Finds knowledge gaps by team/topic",
      "Highlights unclear documentation",
      "Measures engagement and completion",
    ]
  },
  {
    icon: ShoppingCart,
    title: "Knowledge Governance",
    description: "Keep answers accurate with owners, approvals, versioning, and review cycles.",
    features: [
      "Prevents outdated policy answers",
      "Ensures a single source of truth",
      "Clarifies content ownership",
    ]
  },

  {
    icon: Zap,
    title: "SaaS + On-Prem Deployment",
    description: "Choose SaaS for speed or on-prem for strict security and compliance.",
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
        The top features you look for
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-16">
        These five capabilities solve the biggest pain: fast onboarding, fewer repeat questions, trusted answers, measurable learning, and secure deployment      </h3>

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
          <h3 className="text-2xl font-bold mb-4">Trusted Answers come from your custom sources</h3>
          <p className="text-muted-foreground text-lg mb-6">
          Your team gets instant, reliable answers grounded in your internal documents. Every response includes citations and links to the exact policy or section—so employees can verify, learn, and move forward with confidence.          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>PDFs, wikis, and FAQs</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Role-Based Access</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>One-Click Open Document</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Topic-Based Knowledge</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
