"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface GlowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

/**
 * GlowButton – port of Uiverse.io (author: zjssun) button
 * Tailwind translation of the provided CSS. Works on dark backgrounds.
 */
export const GlowButton = React.forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // base
          "inline-flex select-none items-center justify-center rounded-lg border px-5 py-2.5 text-[17px] font-medium uppercase outline-none transition duration-500 ease-in-out",
          // colors/initial state
          "text-white/50 border-white/50 bg-transparent shadow-transparent",
          // hover & focus state (match provided CSS)
          "hover:text-white hover:bg-[#008cff] hover:border-[#008cff] focus:text-white focus:bg-[#008cff] focus:border-[#008cff]",
          // text glow on hover
          "hover:[text-shadow:0_0_5px_#fff,0_0_10px_#fff,0_0_20px_#fff] focus:[text-shadow:0_0_5px_#fff,0_0_10px_#fff,0_0_20px_#fff]",
          // box glow on hover
          "hover:[box-shadow:0_0_5px_#008cff,0_0_20px_#008cff,0_0_50px_#008cff,0_0_100px_#008cff] focus:[box-shadow:0_0_5px_#008cff,0_0_20px_#008cff,0_0_50px_#008cff,0_0_100px_#008cff]",
          className
        )}
        {...props}
      >
        {children ?? "Button"}
      </button>
    );
  }
);
GlowButton.displayName = "GlowButton";

export default GlowButton;
