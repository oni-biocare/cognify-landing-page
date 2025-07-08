import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number | string;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "Free",
    popular: 0,
    price: 0,
    description: "Perfect for testing our AI-powered market intelligence capabilities.",
    buttonText: "Start Free Trial",
    benefitList: [
      "10 credits per month for 3 months",
      "Basic product keyword analysis (limited to core keywords)",
      "Simple trend identification",
      "Limited search volume and competition data",
      "Basic optimization recommendations",
      "No PDF export"
    ],
  },
  {
    title: "Starter",
    popular: 1,
    price: 49.99,
    description: "Ideal for small e-commerce businesses ready to leverage AI insights.",
    buttonText: "Get Started",
    benefitList: [
      "100 credits per month",
      "Free tier +",
      "Full product keyword analysis with detailed metrics",
      "Analysis for up to 5 products per month",
      "Advanced keyword relevance scoring",
      "Basic content optimization recommendation",
      "Industry trend analysis (mega, macro, micro trends)",
      "Daily industry landscaping"
    ],
  },
  // {
  //   title: "Growth",
  //   popular: 0,
  //   price: 149,
  //   description: "Perfect for growing businesses that need advanced AI insights and analytics.",
  //   buttonText: "Choose Growth",
  //   benefitList: [
  //     "500 credits per month",
  //     "Advanced AI insights",
  //     "Multi-platform integration",
  //     "Predictive analytics dashboard",
  //     "Priority support",
  //     "Custom reporting",
  //     "API access (limited)"
  //   ],
  // },
  // {
  //   title: "Professional",
  //   popular: 0,
  //   price: 349,
  //   description: "For agencies and larger businesses requiring comprehensive market intelligence.",
  //   buttonText: "Go Professional",
  //   benefitList: [
  //     "2,000 credits per month",
  //     "White-label reports",
  //     "Full API access",
  //     "Advanced competitive intelligence",
  //     "Custom AI model training",
  //     "Dedicated account manager",
  //     "Phone & chat support"
  //   ],
  // },
  // {
  //   title: "Enterprise",
  //   popular: 0,
  //   price: "Custom",
  //   description: "Tailored solutions for large enterprises with unlimited AI-powered insights.",
  //   buttonText: "Contact Sales",
  //   benefitList: [
  //     "Unlimited credits",
  //     "Custom AI model training",
  //     "Dedicated infrastructure",
  //     "SLA guarantees",
  //     "Custom integrations",
  //     "24/7 premium support",
  //     "Onboarding & training"
  //   ],
  // },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        <Badge className="text-white">Pricing Plans</Badge>
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Choose Your AI-Powered Growth Plan
      </h2>

      <h3 className="md:w-2/3 mx-auto text-xl text-center text-muted-foreground pb-14">
        Start your AI-powered market intelligence journey today. Test our platform for free, then upgrade to unlock the full potential of your e-commerce business.
      </h3>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-2xl mx-auto">
        {plans.map(
          ({ title, popular, price, description, buttonText, benefitList }) => (
            <Card
              key={title}
              className={`h-full flex flex-col ${
                popular === PopularPlan?.YES
                  ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary relative"
                  : "border-border"
              }`}
            >
              {popular === PopularPlan?.YES && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-lg mb-2">{title}</CardTitle>
                <CardDescription className="text-sm mb-4 min-h-[40px]">
                  {description}
                </CardDescription>

                <div className="flex flex-col items-center justify-center gap-1">
                  {typeof price === 'number' ? (
                    <>
                      <div className="flex items-baseline">
                        <span className="text-3xl font-bold">${price}</span>
                        <span className="text-muted-foreground ml-1">/month</span>
                      </div>
                      {title === "Starter" && (
                        <div className="flex flex-col items-center text-xs">
                          <span className="text-muted-foreground">or $499/year (save 17%)</span>
                          <span className="text-green-500 font-medium">10% discount on additional credits</span>
                        </div>
                      )}
                    </>
                  ) : (
                    <span className="text-3xl font-bold">{price}</span>
                  )}
                </div>
              </CardHeader>

              <CardContent className="flex-1 px-4">
                <div className="space-y-3">
                  {benefitList.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-2">
                      <Check className="text-primary w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="pt-4">
                <Button
                  variant={
                    popular === PopularPlan?.YES ? "default" : "outline"
                  }
                  className="w-full"
                  size="sm"
                  asChild
                >
                  <a href={`mailto:onibiocare@gmail.com?subject=${title} Plan Inquiry`}>{buttonText}</a>
                </Button>
              </CardFooter>
            </Card>
          )
        )}
      </div>

      {/* Additional pricing info */}
      <div className="mt-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Include:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <div className="flex items-center justify-center gap-2">
              <Check className="text-primary w-4 h-4" />
              <span>Real-time trend monitoring</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Check className="text-primary w-4 h-4" />
              <span>AI-powered insights</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Check className="text-primary w-4 h-4" />
              <span>Data security & privacy</span>
            </div>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            All prices in USD. Cancel anytime.
          </p>
          <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border">
            <p className="text-sm text-muted-foreground text-center">
              <strong>Coming Soon:</strong> Growth, Professional, and Enterprise plans with advanced features, unlimited credits, and priority support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
