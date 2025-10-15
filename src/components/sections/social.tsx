"use client"
import * as React from "react"
import { InstagramButton } from "@/components/ui/instagram-button"
import { LinkedInButton } from "@/components/ui/linkedin-button"

export const SocialSection: React.FC = () => {
  return (
    <section
      className="py-0 min-h-[40vh] w-full flex flex-col items-center gap-10 rounded-xl max-w-5xl mx-auto "
    >
      <h2 className="text-center font-extrabold tracking-tight text-2xl sm:text-3xl md:text-4xl  ">
        Do follow us here for more updates
      </h2>
      <div className="flex gap-10">
        <div className="flex flex-col items-center gap-2">
          <InstagramButton onClick={() => window.open("https://instagram.com/", "_blank")} />
          <span className="text-xs sm:text-sm text-white/60">Udbhava</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <LinkedInButton onClick={() => window.open("https://linkedin.com/", "_blank")} />
          <span className="text-xs sm:text-sm text-white/60">CSBS</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <InstagramButton onClick={() => window.open("https://instagram.com/", "_blank")} />
          <span className="text-xs sm:text-sm text-white/60">CSBS</span>
        </div>
      </div>
    </section>
  )
}

export default SocialSection