import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar))",
          border: "hsl(var(--sidebar-border))",
        },
        // Semantic colors
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        info: {
          DEFAULT: "hsl(var(--info))",
          foreground: "hsl(var(--info-foreground))",
        },
        subheading:{
          DEFAULT: "hsl(var(--subheading))",
          foreground: "hsl(var(--subheading-foreground))",
        },
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      spacing: {
        'apple': '1.5rem',
        'apple-sm': '1rem',
        'apple-lg': '2rem',
        'apple-xl': '3rem',
      },
      keyframes: {
        "accordion-down": {
          from: { height: '0' },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: '0' },
        },
        "collapsible-down": {
          from: { height: '0' },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        "collapsible-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: '0' },
        },
        "appleFadeIn": {
          from: { 
            opacity: "0",
            transform: "translateY(10px)"
          },
          to: { 
            opacity: "1",
            transform: "translateY(0)"
          },
        },
        "appleSlideUp": {
          from: { 
            opacity: "0",
            transform: "translateY(20px)"
          },
          to: { 
            opacity: "1",
            transform: "translateY(0)"
          },
        },
        "appleScale": {
          from: { 
            opacity: "0",
            transform: "scale(0.95)"
          },
          to: { 
            opacity: "1",
            transform: "scale(1)"
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-in-out",
        "collapsible-up": "collapsible-up 0.2s ease-in-out",
        "apple-fade-in": "appleFadeIn 0.3s ease-out",
        "apple-slide-up": "appleSlideUp 0.4s ease-out",
        "apple-scale": "appleScale 0.2s ease-out",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'hsl(var(--foreground))',
            a: {
              color: 'hsl(var(--primary))',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            h1: {
              color: 'hsl(var(--foreground))',
              fontWeight: '600',
              letterSpacing: '-0.025em',
            },
            h2: {
              color: 'hsl(var(--foreground))',
              fontWeight: '600',
              letterSpacing: '-0.025em',
            },
            h3: {
              color: 'hsl(var(--foreground))',
              fontWeight: '600',
              letterSpacing: '-0.025em',
            },
            h4: {
              color: 'hsl(var(--foreground))',
              fontWeight: '600',
              letterSpacing: '-0.025em',
            },
            blockquote: {
              borderLeftColor: 'hsl(var(--primary))',
              color: 'hsl(var(--muted-foreground))',
            },
            hr: {
              borderColor: 'hsl(var(--border))',
            },
            ul: {
              li: {
                '&::marker': {
                  color: 'hsl(var(--muted-foreground))',
                },
              },
            },
            ol: {
              li: {
                '&::marker': {
                  color: 'hsl(var(--muted-foreground))',
                },
              },
            },
            code: {
              color: 'hsl(var(--foreground))',
              backgroundColor: 'hsl(var(--muted))',
              borderRadius: '0.25rem',
              padding: '0.15rem 0.3rem',
            },
            pre: {
              backgroundColor: 'hsl(var(--card))',
              borderRadius: 'calc(var(--radius) - 2px)',
              border: '1px solid hsl(var(--border))',
            },
            table: {
              thead: {
                tr: {
                  th: {
                    color: 'hsl(var(--foreground))',
                  },
                },
              },
              tbody: {
                tr: {
                  td: {
                    color: 'hsl(var(--foreground))',
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} satisfies Config;
