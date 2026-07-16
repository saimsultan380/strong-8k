import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  size?: "sm" | "md" | "lg";
}

export function Section({
  children,
  className,
  as: Component = "section",
  size = "md",
  ...props
}: SectionProps) {
  const sizeClasses = {
    sm: "py-section-sm",
    md: "py-section-md md:py-section-lg",
    lg: "py-section-lg md:py-[8rem]",
  };

  return (
    <Component
      className={cn(sizeClasses[size], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
