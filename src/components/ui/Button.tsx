import { ButtonHTMLAttributes, forwardRef } from "react";
import Link from "next/link";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
}

const variants = {
  primary:
    "bg-primary text-primary-foreground hover:bg-accent border-transparent",
  secondary:
    "bg-accent text-primary-foreground hover:bg-accent-dark border-transparent",
  outline:
    "bg-transparent text-foreground border-foreground/20 hover:border-accent hover:text-accent",
  ghost: "bg-transparent text-foreground hover:text-accent border-transparent",
};

const sizes = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "primary", size = "md", href, children, className = "", ...props },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium tracking-wide border transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";
    const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
      return (
        <Link href={href} className={combinedStyles}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={combinedStyles} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
