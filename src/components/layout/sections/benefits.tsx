import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitProps {
  icon: string;
  title: string;
  description: string;
  metric: string;
}

const benefitList: BenefitProps[] = [
  {
    icon: "TrendingUp",
    title: "Trend Prediction",
    description: "With 50+ data algorithms, we predict market trends with industry-leading accuracy.",
    metric: "More Accuracy"
  },
  {
    icon: "Zap",
    title: "3x Faster Trend Identification",
    description: "Identify emerging trends weeks before competitors, giving you the first-mover advantage in your market.",
    metric: "3x Faster"
  },
  {
    icon: "Target",
    title: "40-60% Better Keyword Targeting",
    description: "AI-generated keywords deliver superior targeting precision compared to traditional research methods.",
    metric: "40-60% Better"
  },
  {
    icon: "Users",
    title: "4.7/5 User Satisfaction",
    description: "Beta users consistently rate our platform highly for accuracy, ease of use, and business impact.",
    metric: "4.7/5 Rating"
  }
];

export const BenefitsSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="text-center mb-16">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          <Badge className="text-white">Proven Results</Badge>
        </h2>
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Why You'll Lead Ecommerce Businesses Choosing Cognify Metrics
        </h2>
        <h3 className="md:w-2/3 mx-auto text-xl text-center text-muted-foreground">
          Join over 100+ successful e-commerce businesses that trust our AI-powered market intelligence to drive growth and stay ahead of the competition.
        </h3>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefitList.map(({ icon, title, description, metric }) => (
          <Card key={title} className="bg-background border-2 hover:border-primary/50 transition-all duration-300 h-full">
            <CardContent className="p-6 text-center">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Icon
                  name={icon as keyof typeof icons}
                  size={32}
                  color="hsl(var(--primary))"
                  className="text-primary"
                />
              </div>

              <div className="text-3xl font-bold text-primary mb-2">{metric}</div>
              <h3 className="text-lg font-semibold mb-3">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground">Data Algorithms</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary">100+</div>
            <div className="text-sm text-muted-foreground">User Increase</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary">45%</div>
            <div className="text-sm text-muted-foreground">Traffic Increase</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary">60%</div>
            <div className="text-sm text-muted-foreground">Time Saved</div>
          </div>
        </div>
      </div>
    </section>
  );
};
