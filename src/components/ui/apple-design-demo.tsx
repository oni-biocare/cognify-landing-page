import * as React from "react";
import { Button } from "./button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Badge } from "./badge";
import { Glass } from "./glass";

export function AppleDesignDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-apple space-apple">
      {/* Hero Section */}
      <section className="text-center space-apple-sm">
        <h1 className="animate-apple-fade-in">
          Apple-Inspired Design System
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-apple-slide-up">
          A beautiful, accessible, and emotionally restrained design system built with glassmorphism, 
          semantic colors, and generous white space.
        </p>
      </section>

      {/* Glass Effects Demo */}
      <section className="space-apple">
        <h2 className="text-center">Glass Effects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Glass variant="default" className="p-apple rounded-xl">
            <h3 className="text-lg font-semibold mb-2">Default Glass</h3>
            <p className="text-muted-foreground">
              Clean, translucent background with subtle borders and blur effects.
            </p>
          </Glass>

          <Glass variant="card" className="p-apple rounded-xl">
            <h3 className="text-lg font-semibold mb-2">Card Glass</h3>
            <p className="text-muted-foreground">
              Enhanced with shadow effects for elevated appearance.
            </p>
          </Glass>

          <Glass variant="popover" className="p-apple rounded-xl">
            <h3 className="text-lg font-semibold mb-2">Popover Glass</h3>
            <p className="text-muted-foreground">
              Higher opacity for overlay and popover contexts.
            </p>
          </Glass>
        </div>
      </section>

      {/* Button Variants Demo */}
      <section className="space-apple">
        <h2 className="text-center">Button Variants</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="default">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="glass">Glass</Button>
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="info">Info</Button>
        </div>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="default" size="sm">Small</Button>
          <Button variant="default" size="default">Default</Button>
          <Button variant="default" size="lg">Large</Button>
          <Button variant="default" size="xl">Extra Large</Button>
        </div>
      </section>

      {/* Card Variants Demo */}
      <section className="space-apple">
        <h2 className="text-center">Card Variants</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card variant="default" className="hover-lift">
            <CardHeader>
              <CardTitle>Default Card</CardTitle>
              <CardDescription>
                Traditional card with subtle shadows and borders.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Perfect for content containers and information display.
              </p>
            </CardContent>
          </Card>

          <Card variant="glass" className="hover-lift">
            <CardHeader>
              <CardTitle>Glass Card</CardTitle>
              <CardDescription>
                Modern glassmorphism effect with backdrop blur.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Creates depth and visual interest with translucent backgrounds.
              </p>
            </CardContent>
          </Card>

          <Card variant="elevated" className="hover-lift">
            <CardHeader>
              <CardTitle>Elevated Card</CardTitle>
              <CardDescription>
                Enhanced shadows for prominent content.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Ideal for featured content and call-to-action sections.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Badge Variants Demo */}
      <section className="space-apple">
        <h2 className="text-center">Badge Variants</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="info">Info</Badge>
          <Badge variant="glass">Glass</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </section>

      {/* Spacing Demo */}
      <section className="space-apple">
        <h2 className="text-center">Apple-Inspired Spacing</h2>
        <div className="space-apple-sm">
          <div className="bg-primary/10 p-apple rounded-xl">
            <h3 className="font-semibold mb-2">Generous Padding (p-apple)</h3>
            <p className="text-muted-foreground">
              This container uses the Apple-inspired spacing system with generous white space.
            </p>
          </div>
          
          <div className="bg-secondary/50 px-apple py-apple rounded-xl">
            <h3 className="font-semibold mb-2">Horizontal & Vertical Spacing</h3>
            <p className="text-muted-foreground">
              Separate horizontal (px-apple) and vertical (py-apple) spacing utilities.
            </p>
          </div>
        </div>
      </section>

      {/* Animation Demo */}
      <section className="space-apple">
        <h2 className="text-center">Smooth Animations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="animate-apple-fade-in bg-card p-apple rounded-xl border">
            <h3 className="font-semibold mb-2">Fade In</h3>
            <p className="text-muted-foreground">
              Subtle fade-in animation for content appearance.
            </p>
          </div>
          
          <div className="animate-apple-slide-up bg-card p-apple rounded-xl border">
            <h3 className="font-semibold mb-2">Slide Up</h3>
            <p className="text-muted-foreground">
              Smooth slide-up animation for dynamic content.
            </p>
          </div>
          
          <div className="animate-apple-scale bg-card p-apple rounded-xl border">
            <h3 className="font-semibold mb-2">Scale</h3>
            <p className="text-muted-foreground">
              Gentle scale animation for interactive elements.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Effects Demo */}
      <section className="space-apple">
        <h2 className="text-center">Interactive Effects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="hover-lift bg-card p-apple rounded-xl border cursor-pointer">
            <h3 className="font-semibold mb-2">Hover Lift</h3>
            <p className="text-muted-foreground">
              Hover to see the lift effect with shadow and translation.
            </p>
          </div>
          
          <div className="hover-glow bg-card p-apple rounded-xl border cursor-pointer">
            <h3 className="font-semibold mb-2">Hover Glow</h3>
            <p className="text-muted-foreground">
              Hover to see the glow effect with primary color shadow.
            </p>
          </div>
        </div>
      </section>

      {/* Color System Demo */}
      <section className="space-apple">
        <h2 className="text-center">Semantic Color System</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-primary text-primary-foreground p-4 rounded-lg text-center">
            <div className="font-semibold">Primary</div>
            <div className="text-sm opacity-90">#6C63FF</div>
          </div>
          <div className="bg-success text-success-foreground p-4 rounded-lg text-center">
            <div className="font-semibold">Success</div>
            <div className="text-sm opacity-90">Green</div>
          </div>
          <div className="bg-warning text-warning-foreground p-4 rounded-lg text-center">
            <div className="font-semibold">Warning</div>
            <div className="text-sm opacity-90">Orange</div>
          </div>
          <div className="bg-destructive text-destructive-foreground p-4 rounded-lg text-center">
            <div className="font-semibold">Destructive</div>
            <div className="text-sm opacity-90">Red</div>
          </div>
        </div>
      </section>
    </div>
  );
} 