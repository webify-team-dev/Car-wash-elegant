import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-heading tracking-wide",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-gold-light hover:shadow-[0_4px_30px_hsl(45_90%_55%_/_0.3)] active:scale-95",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-primary/50 bg-transparent text-foreground hover:bg-primary/10 hover:border-primary hover:text-primary",
        secondary: "bg-secondary text-secondary-foreground hover:bg-charcoal-lighter",
        ghost: "hover:bg-charcoal-lighter hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        gold: "bg-gradient-to-r from-primary to-gold-dark text-charcoal font-bold hover:shadow-[0_4px_30px_hsl(45_90%_55%_/_0.4)] hover:scale-105 active:scale-95",
        hero: "bg-gradient-to-r from-primary to-gold-dark text-charcoal font-bold text-lg px-8 py-6 hover:shadow-[0_8px_40px_hsl(45_90%_55%_/_0.5)] hover:scale-105 active:scale-95",
        cta: "bg-gradient-to-r from-primary to-gold-dark text-charcoal font-bold uppercase tracking-widest hover:shadow-[0_4px_30px_hsl(45_90%_55%_/_0.4)] hover:scale-105 active:scale-95",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-md px-4",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
