import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GradientBorderProps {
  children: ReactNode;
  className?: string;
  borderClassName?: string;
}

export function GradientBorder({
  children,
  className,
  borderClassName,
}: GradientBorderProps) {
  return (
    <div className="relative group">
      <div
        className={cn(
          "absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-xl opacity-20 group-hover:opacity-40 blur-sm transition duration-500",
          borderClassName
        )}
      ></div>
      <div className={cn("relative", className)}>{children}</div>
    </div>
  );
}
