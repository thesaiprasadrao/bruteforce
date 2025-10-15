"use client"
import * as React from "react"
import { cn } from "@/lib/utils"

export interface EmailButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
}

/**
 * Email icon button that matches the Instagram button's vibe.
 * Reuses the same gradient/hover classes for visual consistency.
 */
export const EmailButton: React.FC<EmailButtonProps> = ({ className, label = "Email", ...props }) => {
  return (
    <button
      aria-label={label}
      className={cn("insta-btn", className)}
      type="button"
      {...props}
    >
      <span className="insta-svg-wrapper">
        <svg
          fill="white"
          className="insta-svg"
          viewBox="0 0 512 512"
          height="1.5em"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          {/* Envelope icon */}
          <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.5 0 48-21.49 48-48V112c0-26.51-21.5-48-48-48zM48 96h416c8.8 0 16 7.16 16 16v9.5L274.3 300.2c-11.3 8.5-25.3 8.5-36.6 0L32 121.5V112c0-8.84 7.16-16 16-16zm416 320H48c-8.84 0-16-7.2-16-16V167.2l182.5 137c13.6 10.2 32.4 10.2 46 0L480 167.2V400c0 8.8-7.2 16-16 16z" />
        </svg>
      </span>
      <span className="insta-bg" aria-hidden="true" />
    </button>
  )
}

EmailButton.displayName = "EmailButton"