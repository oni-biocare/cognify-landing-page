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
    question: "Who is this product for?",
    answer:
      "It’s built for mid-market and enterprise teams that need faster onboarding and consistent internal knowledge—especially HR, Operations, Customer Support, Sales Enablement, and Product teams.",
    value: "item-1",
  },
  {
    question: "What problem does it solve?",
    answer:
      "It reduces repetitive internal questions, helps employees find the right policy or SOP in seconds, and gives leaders visibility into knowledge gaps—so training becomes measurable and continuously improved.",
    value: "item-2",
  },
  {
    question: "How is this different from a traditional LMS?",
    answer:
      "An LMS is course-first. This is question-first: employees ask in natural language and get source-cited answers instantly. You can still run lightweight quizzes, but the core value is fast, trusted retrieval during daily work.",
    value: "item-3",
  },
  {
    question: "How do you ensure answers are accurate and trustworthy?",
    answer:
      "Every response is grounded in your uploaded documents and includes citations with links to the exact section. If the system can’t find reliable evidence, it responds safely instead of guessing.",
    value: "item-4",
  },
  {
    question: "What types of content can we upload?",
    answer:
      "You can upload common internal formats such as PDFs, DOCX, PPTX, and HTML pages. You can organize content by topic (e.g., onboarding, HR policies, SOPs, product knowledge).",
    value: "item-5",
  },
  {
    question: "Does it support multiple departments or workspaces?",
    answer:
      "Yes. You can separate knowledge by department or topic and control who can access what. Enterprise adds stronger governance with role-based access controls and provisioning.",
    value: "item-6",
  },
  {
    question: "Can we control access to sensitive information?",
    answer:
      "Yes. Access is permission-based so employees only see what they’re allowed to see. Enterprise supports SSO (SAML/OIDC) and advanced role-based access controls for stricter governance.",
    value: "item-7",
  },
  {
    question: "Is our data used to train public AI models?",
    answer:
      "No. Your documents and conversations remain private to your workspace. The system is designed for enterprise use where confidentiality and data protection are mandatory.",
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
          Get answers to common questions about our AI-powered training platform
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
