"use client"
import * as React from "react"
import { cn } from "@/lib/utils"

export interface LinkedInButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
}

/**
 * LinkedIn style icon button (rotating blue background on hover).
 */
export const LinkedInButton: React.FC<LinkedInButtonProps> = ({ className, label = "LinkedIn", ...props }) => {
  return (
    <button
      aria-label={label}
      className={cn("linkedin-btn", className)}
      type="button"
      {...props}
    >
      <span className="linkedin-svg-wrapper">
        <svg
          viewBox="0 0 448 512"
          height="1.6em"
          xmlns="http://www.w3.org/2000/svg"
          className="linkedin-svg"
          fill="white"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
        </svg>
      </span>
      <span className="linkedin-bg" aria-hidden="true" />
    </button>
  )
}

LinkedInButton.displayName = "LinkedInButton"