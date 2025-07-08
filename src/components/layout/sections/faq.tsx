import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "How does the AI technology work and what makes it so accurate?",
    answer: "Our AI uses advanced machine learning algorithms to analyze over data sources including social media, search trends, news, and competitor activities. The system employs natural language processing and pattern recognition to identify emerging trends with more accuracy. Our models are continuously trained on new data to improve predictions and adapt to market changes.",
    value: "item-1",
  },
  {
    question: "Is my business data secure and private?",
    answer: "Absolutely. We implement enterprise-grade security measures including end-to-end encryption, secure API connections, and SOC 2 compliance. Your business data is never shared with third parties, and we follow strict GDPR and data privacy regulations. All integrations use secure, read-only access to protect your sensitive information.",
    value: "item-2",
  },
  {
    question: "How does the credit system work and what counts as a credit?",
    answer: "Credits are used for AI-powered analyses like trend searches, keyword generation, and competitive intelligence reports. You can always upgrade if you need more credits.",
    value: "item-3",
  },
  {
    question: "What kind of return on investment can I expect?",
    answer: "Our users typically see ROI within 30-60 days. Common results include 45% increase in organic traffic, 60% time savings on market research, and 3x faster trend identification. Many customers report avoiding costly inventory mistakes and capturing new market opportunities worth thousands of dollars. Your specific ROI depends on how you implement our insights.",
    value: "item-4",
  },
  {
    question: "Do you integrate with Shopify, WooCommerce, and other e-commerce platforms?",
    answer: "Yes! We offer seamless integration with Shopify and WooCommerce, BigCommerce, Magento are on the way. Our integrations provide automated inventory-based insights, product performance analysis (if you allow it), alerts specific to your catalog. Setup takes just a few minutes with our easy-to-follow guides.",
    value: "item-5",
  },
  {
    question: "What kind of support do you provide?",
    answer: "Support varies by plan: Free users get email support, Starter/Growth plans include priority email support, Professional plans get dedicated account management plus phone/chat support, and Enterprise customers receive 24/7 premium support with guaranteed response times. Enterprise plan include comprehensive documentation and video tutorials.",
    value: "item-6",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, you can cancel your subscription anytime with no cancellation fees. When you cancel but still have credits, you can use them until they expire. Your data remains accessible during the cancellation period, and you can always reactivate your account later.",
    value: "item-7",
  },
  {
    question: "How is this different from other market research tools?",
    answer: "We and you grow together, what you need is what we do. We're specifically designed for e-commerce with seamless platform integrations, real-time alerts, and actionable insights. Our AI-generated keywords and competitive intelligence go beyond basic research to provide strategic advantages your competitors don't have.",
    value: "item-8",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[800px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          <Badge className="text-white">FAQ</Badge>
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Frequently Asked Questions
        </h2>

        <p className="text-muted-foreground text-center mb-8">
          Get answers to common questions about our AI-powered market intelligence platform
        </p>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent className="text-muted-foreground leading-relaxed">
              {answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-12 text-center">
        <p className="text-muted-foreground mb-4">Still have questions?</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="text-primary hover:underline">
            Contact our support team
          </a>
          <span className="hidden sm:block text-muted-foreground">•</span>
          <a href="#" className="text-primary hover:underline">
            Watch a demo
          </a>
          <span className="hidden sm:block text-muted-foreground">•</span>
          <a href="#" className="text-primary hover:underline">
            View documentation
          </a>
        </div>
      </div>
    </section>
  );
};
