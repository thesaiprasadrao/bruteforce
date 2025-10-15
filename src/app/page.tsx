"use client"

import { useState } from "react"
import Image from "next/image"
import { Terminal, TypingAnimation , AnimatedSpan } from "@/components/ui/terminal"
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text"
import { digital7 } from "./fonts"
import AboutSection from "@/components/sections/about"
import Countdown from "@/components/ui/countdown"
import TimelineSection from "@/components/sections/timeline"
import SponsorsSection from "@/components/sections/sponsors";
import HighlightsSection from "@/components/sections/highlights";
import FAQ from "@/components/sections/faq/faq";
import SocialSection from "@/components/sections/social"
import PrizePoolSection from "@/components/sections/prize-pool";
export default function Home() {
  const [done, setDone] = useState(false)

  return (
    <>
      {!done ? (
        <div className="flex min-h-screen items-center justify-center bg-black">
          <Terminal onSequenceComplete={() => setDone(true)}>
            <TypingAnimation>Initializing BruteForce v1.0</TypingAnimation>
            <AnimatedSpan>✔ Loading core modules</AnimatedSpan>
            <AnimatedSpan>✔ Presented by Udbhava, CSBS dept </AnimatedSpan>
            <TypingAnimation>Connecting to DataBase...</TypingAnimation>
            <AnimatedSpan>✔ Date: 28th October 2025</AnimatedSpan>
         <TypingAnimation>Launch sequence complete. Welcome Aboard👋</TypingAnimation>
          </Terminal>
        </div>
      ) : (
        <>
          <section className="relative min-h-[100svh] w-full overflow-hidden" data-scroll-section>
            <div className="absolute inset-0" />
            <div className="relative z-0 min-h-[100svh] w-full flex flex-col items-center justify-center text-center gap-2 sm:gap-3 md:gap-4 px-4 sm:px-6">
              {/* Udbhava arrangement */}
              <div className="flex flex-col items-center gap-2 sm:gap-3 mb-3 sm:mb-5">
                {/* Row: Udbhava text with logo on the right */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">Udbhava</p>
                  <Image
                    src="/udbhava-logo.png"
                    alt="Udbhava logo"
                    width={90}
                    height={90}
                    className="h-8 w-auto sm:h-10 md:h-12 opacity-95"
                  />
                </div>
                {/* Row: Presents smaller */}
                <p className="text-lg sm:text-xl md:text-2xl font-semibold tracking-wide">Presents</p>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 sm:px-2.5 sm:py-1 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.88)]">
                <span className="text-sm sm:text-base">🗓️</span>
                <AnimatedGradientText>
                  28th October 2025
                </AnimatedGradientText>
              </div>
              <h1 className={`${digital7.className} tracking-[0.06em] hero-glow text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-white leading-[0.9]`}>
                BRUTEFORCE
              </h1>
              <div className="mt-1 text-center text-base sm:text-lg md:text-2xl font-medium text-white/80 max-w-3xl">
                <span className="text-white/70">The Future Isn&apos;t Built , it&apos;s</span>{" "}
                <span className="text-[#ac9ef9] font-semibold">BRUTEFORCED</span>
              </div>
              <div className="mt-4 w-full sm:w-auto max-w-xs sm:max-w-none">
                {/* <a className="inline-block w-full sm:w-auto" href="https://bruteforce.devfolio.co" target="_blank" rel="noopener noreferrer">
                  <GlowButton>Register Now</GlowButton>
                </a> */}
                <p className="hero-glow text-[#ac9ef9] text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide">
                  Registrations Opening Soon
                </p>
      
              </div>
              <div className="mt-3 sm:mt-4 transform-gpu scale-95 sm:scale-100">
                <p>Hackathon Begins In:</p>
                <Countdown
                  target={new Date("2025-10-28T00:00:00+05:30")}
                  colors={["#ac9ef9", "#8b78f6", "#c9c1ff", "#6a5ae0"]}
                  speed={1.15}
                  showLabels
                  labels={["Days", "Hours", "Mins", "Sec"]}
                />
              </div>
            </div>
          </section>
          <div data-scroll-section>
            <AboutSection />
          </div>
          <div data-scroll-section>
            <TimelineSection />
          </div>
          <div data-scroll-section>
            <PrizePoolSection />
          </div>
          <div data-scroll-section>
            <SponsorsSection />
          </div>
          <div data-scroll-section>
            <HighlightsSection />
          </div>

          <div data-scroll-section>
            <SocialSection />
          </div>
          <div data-scroll-section>
            <FAQ />
          </div>
        
          <div data-scroll-section className="w-full py-10 text-center text-sm text-foreground/60">
              © 2025 BruteForce Hackathon. Organized by Udhbhava - <a href="https://www.dsce.edu.in/academics/ug/csbs">Department of CSBS</a>
          </div>
        </>
      )}
    </>
  )
}
    
