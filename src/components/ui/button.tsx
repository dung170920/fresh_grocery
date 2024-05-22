import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-primary dark:focus-visible:ring-primary/300",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-primary/80",
        destructive:
          "bg-red-500 text-white hover:bg-red-500/90",
        outline:
          "border border-primary bg-transparent hover:bg-primary/100 text-primary",
        // secondary:
        //   "bg-neutral-100 text-primary hover:bg-slate-100/80 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-800/80",
        ghost: "hover:bg-primary/10 text-primary",
        link: "text-neutral-900 hover:text-primary underline-offset-4 hover:underline",
        download: "bg-black text-white rounded-lg hover:bg-black/80 gap-2"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-lg px-3",
        lg: "h-11 rounded-lg px-8 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
