import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const glassVariants = cva(
  "backdrop-blur-[20px] border transition-all duration-200 ease-out",
  {
    variants: {
      variant: {
        default: "bg-white/80 dark:bg-black/80 border-white/20 dark:border-white/10",
        card: "bg-card/80 border-white/20 dark:border-white/10 shadow-glass",
        sidebar: "bg-sidebar/95 border-sidebar-border shadow-glass-light",
        popover: "bg-popover/90 border-white/20 dark:border-white/10 shadow-glass",
      },
      intensity: {
        light: "backdrop-blur-[10px]",
        medium: "backdrop-blur-[20px]",
        strong: "backdrop-blur-[30px]",
      },
    },
    defaultVariants: {
      variant: "default",
      intensity: "medium",
    },
  }
)

export interface GlassProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof glassVariants> {}

const Glass = React.forwardRef<HTMLDivElement, GlassProps>(
  ({ className, variant, intensity, ...props }, ref) => {
    return (
      <div
        className={cn(glassVariants({ variant, intensity }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Glass.displayName = "Glass"

export { Glass, glassVariants } 