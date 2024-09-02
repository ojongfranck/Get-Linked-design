import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm  transition focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring ring-offset-1  disabled:cursor-not-allowed disabled:opacity-50 active:scale-[.98] active:opacity-95",
  {
    variants: {
      variant: {
        default: "bg-primary-btn",
        ghost: "hover:bg-accent/10",
        outline: "bg-background",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        icon: "size-9",
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
  wrapperClassName?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ wrapperClassName, className, variant, size, ...props }, ref) => {
    const Wrapper = variant === "outline" && "div";

    const Content = (
      <button
        className={cn(
          buttonVariants({
            variant,
            size,
            className,
          })
        )}
        ref={ref}
        {...props}
      />
    );
    return Wrapper ? (
      <Wrapper
        style={{ "--primary-dir": "to top" } as React.CSSProperties}
        className={cn(
          "p-px max-w-fit rounded-md  bg-primary-btn",
          wrapperClassName
        )}
      >
        {Content}
      </Wrapper>
    ) : (
      Content
    );
  }
);
Button.displayName = "Button";

export default Button;
