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
          "hover:text-white hover:bg-[#ac9ef9] hover:border-[#f3f3f3] focus:text-white focus:bg-[#140084] focus:border-[#ff0000d2]",
          // text glow on hover
          "hover:[text-shadow:0_0_5px_#fff,0_0_10px_#fff,0_0_20px_#fff] focus:[text-shadow:0_0_5px_#fff,0_0_10px_#fff,0_0_20px_#fff]",
          // box glow on hover
          "hover:[box-shadow:0_0_5px_#ac9ef9,0_0_20px_#ac9ef9,0_0_50px_#ac9ef9,0_0_100px_#ac9ef9] focus:[box-shadow:0_0_5px_#ac9ef9,0_0_20px_#ac9ef9,0_0_50px_#ac9ef9,0_0_100px_#ac9ef9]",
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
