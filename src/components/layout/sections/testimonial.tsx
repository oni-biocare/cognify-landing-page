"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  company: string;
  comment: string;
  rating: number;
  metric: string;
}

const reviewList: ReviewProps[] = [
  {
    image: "",
    name: "Sarah Chen",
    userName: "E-commerce Director",
    company: "",
    comment: "Cognify Metrics helped us identify the smartwatch trend 3 weeks before our competitors. We launched early and captured 60% more market share. The ROI was incredible - $200K additional revenue in just 2 months.",
    rating: 5.0,
    metric: "60% ↑ Market Share"
  },
  {
    image: "",
    name: "Marcus Rodriguez",
    userName: "Founder & CEO",
    company: "",
    comment: "The AI keyword suggestions transformed our SEO strategy. We went from page 3 to ranking #1 for our target keywords in just 6 weeks. Our organic traffic increased by 180% and conversion rates doubled.",
    rating: 5.0,
    metric: "180% ↑ Organic Traffic"
  },
  {
    image: "/images/testimonials/lisa.jpg",
    name: "Lisa Thompson",
    userName: "Marketing Manager",
    company: "",
    comment: "The predictive analytics saved us from a costly mistake. Cognify Metrics predicted a decline in our top product category 2 months before it happened. We pivoted our inventory and maintained profitability while competitors struggled.",
    rating: 4.9,
    metric: "Avoided $50K Loss"
  },
  {
    image: "",
    name: "David Kim",
    userName: "Growth Strategist", 
    company: "",
    comment: "As a Shopify store, the integration was seamless. The real-time alerts helped us capitalize on viral pet product trends. Our best month ever was directly attributed to acting on Cognify Metrics's trend predictions.",
    rating: 5.0,
    metric: "Record Sales Month"
  },
  {
    image: "",
    name: "Emma Wilson",
    userName: "Digital Marketing Lead",
    company: "",
    comment: "The competitive intelligence feature is game-changing. We discovered gaps in our competitors' keyword strategies and filled them. Our market position improved dramatically, and we're now the go-to brand in our niche.",
    rating: 4.8,
    metric: "Market Leader Position"
  },
  {
    image: "",
    name: "Alex Johnson",
    userName: "Product Manager",
    company: "",
    comment: "The time saved on market research is incredible. What used to take our team 2 weeks now takes 2 hours with Cognify Metrics. We're launching products faster and with better market fit than ever before.",
    rating: 5.0,
    metric: "90% Time Reduction"
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          <Badge className="text-white">Success Stories</Badge>
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Real Results from Real E-commerce Businesses
        </h2>

        <p className="md:w-2/3 mx-auto text-xl text-center text-muted-foreground mb-8">
          See how leading e-commerce businesses are using AI-powered market intelligence to drive growth, increase revenue, and stay ahead of the competition.
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-background border-2 hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                <CardContent className="pt-6 pb-0 flex-1">
                  <div className="flex gap-1 pb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`size-4 ${i < Math.floor(review.rating) ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`} 
                      />
                    ))}
                    <span className="ml-2 text-sm text-muted-foreground">{review.rating}/5</span>
                  </div>
                  
                  <div className="mb-4">
                    <Badge variant="secondary" className="text-xs">
                      {review.metric}
                    </Badge>
                  </div>
                  
                  <blockquote className="text-sm leading-relaxed text-muted-foreground italic">
                    &ldquo;{review.comment}&rdquo;
                  </blockquote>
                </CardContent>

                <CardHeader className="pt-4">
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src={review.image}
                        alt={review.name}
                      />
                      <AvatarFallback>{review.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-base">{review.name}</CardTitle>
                      <CardDescription className="text-sm">{review.userName}</CardDescription>
                      <CardDescription className="text-xs text-primary font-medium">{review.company}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* Success metrics summary */}
      <div className="mt-16 text-center">
        <div className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Proven Results Across Industries</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">4.7/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">45%</div>
              <div className="text-sm text-muted-foreground">Avg. Traffic Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">3x</div>
              <div className="text-sm text-muted-foreground">Faster Insights</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">60%</div>
              <div className="text-sm text-muted-foreground">Time Saved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
