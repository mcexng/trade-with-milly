import { cn } from "@/lib/utils";
import React from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  glowColor?: "cyan" | "purple" | "neon";
}

export function GlassCard({
  children,
  className,
  glow = false,
  glowColor = "cyan",
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-card relative overflow-hidden transition-all duration-300",
        glow && "hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {glow && (
        <div
          className={cn(
            "absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[80px] opacity-20 pointer-events-none transition-opacity duration-300 group-hover:opacity-40",
            {
              "bg-[var(--color-brand-cyan)]": glowColor === "cyan",
              "bg-[var(--color-brand-purple)]": glowColor === "purple",
              "bg-[var(--color-brand-neon)]": glowColor === "neon",
            }
          )}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
