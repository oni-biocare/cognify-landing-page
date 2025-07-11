"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Building2, Clock, Mail, Phone, MessageCircle, Calendar, BookOpen } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const formSchema = z.object({
  firstName: z.string().min(2).max(255),
  lastName: z.string().min(2).max(255),
  email: z.string().email(),
  company: z.string().min(2).max(255),
  subject: z.string().min(2).max(255),
  message: z.string(),
});

export const ContactSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      subject: "General Question",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { firstName, lastName, email, company, subject, message } = values;
    console.log(values);

    const mailToLink = `mailto:onibiocare@gmail.com?subject=${subject}&body=Hello, I am ${firstName} ${lastName} from ${company}. My Email is ${email}. %0D%0A%0D%0A${message}`;

    window.location.href = mailToLink;
  }

  return (
    <section id="contact" className="container py-24 sm:py-32">
      <div className="text-center mb-16">
        <h2 className="text-lg text-primary mb-2 tracking-wider">
          <Badge className="text-white">Get Started</Badge>
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Transform Your E-commerce Business?
        </h2>
        <p className="md:w-2/3 mx-auto text-xl text-muted-foreground">
          Join thousands of successful e-commerce businesses using AI-powered market intelligence to drive growth. Start free today and transform your e-commerce strategy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <Card className="text-center p-6 border-2 hover:border-primary/50 transition-all duration-300">
          <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <MessageCircle className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Start Free Trial</h3>
          <p className="text-muted-foreground mb-4">Get 10 free credits monthly. No credit card required.</p>
          <Button className="w-full" asChild>
            <a href="mailto:onibiocare@gmail.com?subject=Start Free Trial Request">Start Free Trial</a>
          </Button>
        </Card>

        <Card className="text-center p-6 border-2 hover:border-primary/50 transition-all duration-300">
          <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <BookOpen className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Enterprise Solutions</h3>
          <p className="text-muted-foreground mb-4">Custom AI models and dedicated support for large businesses.</p>
          <Button variant="outline" className="w-full" asChild>
            <a href="mailto:onibiocare@gmail.com?subject=Enterprise Solutions Inquiry">Contact Sales</a>
          </Button>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
          <p className="mb-8 text-muted-foreground text-lg">
            Have questions about how AI-powered market intelligence can help your business? Our team of e-commerce experts is here to help.
          </p>

          <div className="flex flex-col gap-6">
            <div>
              <div className="flex gap-3 mb-2">
                <Mail className="w-5 h-5 text-primary mt-1" />
                <div className="font-semibold">Email Us</div>
              </div>
              <div className="text-muted-foreground">onibiocare@gmail.com</div>
            </div>

            <div>
              <div className="flex gap-3 mb-2">
                <MessageCircle className="w-5 h-5 text-primary mt-1" />
                <div className="font-semibold">Live Chat</div>
              </div>
              <div className="text-muted-foreground">Available Monday - Friday, 9AM - 6PM EST</div>
            </div>

            <div>
              <div className="flex gap-3 mb-2">
                <Clock className="w-5 h-5 text-primary mt-1" />
                <div className="font-semibold">Response Time</div>
              </div>
              <div className="text-muted-foreground">We typically respond within 2 hours during business hours</div>
            </div>
          </div>
        </div>

        <Card className="bg-muted/30 border-2">
          <CardHeader>
            <div className="text-primary text-2xl font-bold">Send us a message</div>
            <p className="text-muted-foreground">We&apos;ll get back to you as soon as possible.</p>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid w-full gap-4"
              >
                <div className="flex flex-col md:flex-row gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your first name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your last name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company</FormLabel>
                      <FormControl>
                        <Input placeholder="Your company name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Pricing Inquiry">Pricing Inquiry</SelectItem>
                          <SelectItem value="Technical Support">Technical Support</SelectItem>
                          <SelectItem value="Partnership">Partnership</SelectItem>
                          <SelectItem value="Enterprise Sales">Enterprise Sales</SelectItem>
                          <SelectItem value="General Question">General Question</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={4}
                          placeholder="Tell us about your business and how we can help..."
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button className="mt-4" size="lg" type="submit">Send Message</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
