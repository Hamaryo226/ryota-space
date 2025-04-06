import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "success" | "secondary" | "destructive" | "outline";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  const variantStyles = {
    default: "bg-blue-500/20 text-blue-500 border-blue-500/30",
    success: "bg-emerald-500/20 text-emerald-500 border-emerald-500/30",
    secondary: "bg-purple-500/20 text-purple-500 border-purple-500/30",
    destructive: "bg-red-500/20 text-red-500 border-red-500/30",
    outline: "bg-transparent border-zinc-700 text-zinc-400",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
