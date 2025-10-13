"use client"

import { useState } from "react"
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal"
import { Particles } from "@/components/ui/particles"
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text"
import { GlowButton } from "@/components/ui/glow-button"
import AboutSection from "@/components/sections/about"
import Countdown from "@/components/ui/countdown"
import TimelineSection from "@/components/sections/timeline"
// import SponsorsCardsSection from "@/components/sections/sponsors-cards"

export default function Home() {
  const [done, setDone] = useState(false)

  return (
    <>
      {!done ? (
        <div className="flex min-h-screen items-center justify-center">
          <Terminal onSequenceComplete={() => setDone(true)}>
            <TypingAnimation>Initializing BruteForce v1.0</TypingAnimation>
            {/* <AnimatedSpan>✔ Loading core modules</AnimatedSpan>
            <AnimatedSpan>✔ Presented by Udbhava</AnimatedSpan>
            <TypingAnimation>Connecting to DataBase...</TypingAnimation> */}
            {/* <AnimatedSpan>✔ Event: BruteForce – Tagline</AnimatedSpan>
            <AnimatedSpan>✔ Date: 15th October 2025</AnimatedSpan>
            <AnimatedSpan>✔ Some info about hackathon</AnimatedSpan> */}
            <TypingAnimation>Launch sequence complete. Welcome Aboard👋</TypingAnimation>
          </Terminal>
        </div>
      ) : (
        <>
          <section className="relative h-screen w-full overflow-hidden" data-scroll-section>
            <Particles
              subtitle={
                <div className="flex flex-col items-center gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.88)]">
                    <span className="text-lg">🗓️</span>
                    <AnimatedGradientText>
                      28th October 2025
                    </AnimatedGradientText>
                  </div>
                  
                </div>
              }
              cta={
                <div className="flex flex-col items-center gap-4">
                  <a href="https://bruteforce.devfolio.co" target="_blank" rel="noopener noreferrer">
                    <GlowButton>Register Now</GlowButton>
                  </a>
                  <div>
                    <Countdown
                      target={new Date("2025-10-28T00:00:00+05:30")}
                      colors={["#ac9ef9", "#8b78f6", "#c9c1ff", "#6a5ae0"]}
                      speed={1.15}
                    />
                  </div>
                </div>
              }
            
            />
          </section>
          <div data-scroll-section>
            <AboutSection />
          </div>
          <div data-scroll-section>
            <TimelineSection />
          </div>
          {/* <div data-scroll-section>
            <SponsorsCardsSection />
          </div> */}
          
        </>
      )}
    </>
  )
}
    
