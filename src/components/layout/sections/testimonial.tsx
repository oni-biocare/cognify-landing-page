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
    name: "Sarah Thompson",
    userName: "Head of People & Culture",
    company: "",
    comment:
      "We reduced repetitive onboarding questions almost immediately. New hires now trust the answers because every response links back to the policy source.",
    rating: 5,
    metric: "42% fewer HR questions in 30 days",
  },
  {
    image: "",
    name: "Daniel Wong",
    userName: "Operations Manager",
    company: "",
    comment:
      "The unanswered questions dashboard showed us exactly where our SOPs were unclear. Fixing those gaps saved hours every week for our ops team.",
    rating: 5,
    metric: "3× faster SOP clarification",
  },
  {
    image: "",
    name: "Emily Carter",
    userName: "Customer Support Lead",
    company: "",
    comment:
      "Support agents ramp up faster because they can ask the bot instead of waiting for seniors. The source citations make training much more reliable.",
    rating: 4,
    metric: "35% faster agent onboarding",
  },
  {
    image: "",
    name: "Michael Nguyen",
    userName: "IT & Security Director",
    company: "",
    comment:
      "We needed strict access control and audit logs. The enterprise setup gave us confidence to roll this out across multiple departments.",
    rating: 5,
    metric: "Enterprise-ready security & governance",
  },
  {
    image: "",
    name: "Laura Martinez",
    userName: "Learning & Development Manager",
    company: "",
    comment:
      "Micro-quizzes inside chat changed how employees retain policies. We finally have data to prove what training content actually works.",
    rating: 5,
    metric: "60% improvement in knowledge retention",
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
        Real Results from Real Teams
        </h2>

        <p className="md:w-2/3 mx-auto text-xl text-center text-muted-foreground mb-8">
        See how mid-market and enterprise teams reduce repetitive questions, speed up onboarding, and improve policy confidence with source-cited answers and measurable learning insights.        </p>
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
          <h3 className="text-2xl font-bold mb-6">Proven Results from Internal Knowledge Rollouts</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">4.7/5</div>
              <div className="text-sm text-muted-foreground">Admin Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">45%</div>
              <div className="text-sm text-muted-foreground">Fewer Repetitive Questions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">3x</div>
              <div className="text-sm text-muted-foreground">Faster Time-to-Answer</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">60%</div>
              <div className="text-sm text-muted-foreground">Time Saved for HR/Ops</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
