"use client";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from "../ui/navigation-menu";
import { Separator } from "../ui/separator";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { ToggleTheme } from "./toogle-theme";

interface RouteProps {
  href: string;
  label: string;
}

interface FeatureProps {
  title: string;
  description: string;
}

const routeList: RouteProps[] = [
  {
    href: "/#features",
    label: "Features",
  },
  {
    href: "/#pricing",
    label: "Pricing",
  },

  {
    href: "/#testimonials",
    label: "Success Stories",
  },
  {
    href: "/#faq",
    label: "FAQ",
  },
  {
    href: "/blog",
    label: "Blog",
  },
];

const featureList: FeatureProps[] = [
  {
    title: "AI-Powered Insights",
    description: "Advanced artificial intelligence analyzes market trends and predicts future opportunities with precision.",
  },
  {
    title: "E-commerce Focus",
    description: "Built specifically for e-commerce businesses with seamless platform integrations and industry expertise.",
  },
  {
    title: "Real-time Monitoring",
    description: "Continuous monitoring based on 50+ data algorithms to deliver insights exactly when you need them.",
  },
  {
    title: "Competitive Advantage",
    description: "Stay ahead of competitors with early trend detection and strategic market intelligence.",
  },
  {
    title: "Proven Results",
    description: "Join 1000+ successful businesses experiencing measurable growth and improved market positioning.",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card">
      <Link href="/" className="font-bold text-lg flex items-center">
        {/* <ChevronsDown className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" /> */}
        <Image
          className="border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white"
          src="/logo.png"
          width={48}
          height={48}
          alt="Cognify Metrics Logo"
          priority
        />
        Cognify Metrics
      </Link>
      {/* <!-- Mobile --> */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex items-center">
                    {/* <ChevronsDown className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" /> */}
                    <Image
                      className="border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white"
                      src="/logo.png"
                      width={48}
                      height={48}
                      alt="Cognify Metrics Logo"
                      priority
                    />
                    Cognify Metrics
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />
              
              <div className="flex items-center justify-between w-full mb-2">
                <ToggleTheme />
                <Button variant="default" asChild>
                  <a href="mailto:onibiocare@gmail.com?subject=Contact Request">Contact Us</a>
                </Button>
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* <!-- Desktop --> */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          {/* <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-card text-base">
              About us
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[800px] grid-cols-2 gap-5 p-4">
                <Image
                  src="/onibiocare-logo-full.png"
                  alt="Insight Agent Logo"
                  className="h-full w-full rounded-md object-cover"
                  width={800}
                  height={800}
                />
                <ul className="flex flex-col gap-2">
                  {featureList.map(({ title, description }) => (
                    <li
                      key={title}
                      className="rounded-md p-3 text-sm hover:bg-muted"
                    >
                      <p className="mb-1 font-semibold leading-none text-foreground">
                        {title}
                      </p>
                      <p className="line-clamp-2 text-muted-foreground">
                        {description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem> */}

          <NavigationMenuItem>
            {routeList.map(({ href, label }) => (
              <NavigationMenuLink key={href} asChild>
                <Link href={href} className="text-base px-2">
                  {label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex items-center gap-4">
        <Button variant="default" asChild>
          <a href="mailto:onibiocare@gmail.com?subject=Contact Request">Contact Us</a>
        </Button>
        <ToggleTheme />
      </div>
    </header>
  );
};
