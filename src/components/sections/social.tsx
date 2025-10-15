"use client"
import * as React from "react"
import { InstagramButton } from "@/components/ui/instagram-button"
import { LinkedInButton } from "@/components/ui/linkedin-button"
import { HyperText } from "@/components/ui/hyper-text"
export const SocialSection: React.FC = () => {
  return (
    <section
      className="py-0 min-h-[40vh] w-full flex flex-col items-center gap-6 sm:gap-8 rounded-xl max-w-5xl mx-auto "
    >
      <h2 className="mb-1 sm:mb-2 text-center text-2xl sm:text-4xl md:text-4xl font-semibold text-white">
                Do follow us here for more  {"  "}
                <HyperText as="span" startOnView hoverScope="parent" className="py-0 font-semibold text-2xl sm:text-4xl md:text-4xl" aurora>
                  Updates
                </HyperText> {"  "}
        </h2>
      <div className="flex gap-6 sm:gap-8">
        <div className="flex flex-col items-center gap-2">
          <InstagramButton onClick={() => window.open("https://www.instagram.com/_udbhava/", "_blank")} />
          <span className="text-xs sm:text-sm text-white/60">Udbhava</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <LinkedInButton onClick={() => window.open("https://www.linkedin.com/company/dsce-cb", "_blank")} />
          <span className="text-xs sm:text-sm text-white/60">CSBS</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <InstagramButton onClick={() => window.open("https://www.instagram.com/csbs_dsce/", "_blank")} />
          <span className="text-xs sm:text-sm text-white/60">CSBS</span>
        </div>
      </div>
    </section>
  )
}

export default SocialSection