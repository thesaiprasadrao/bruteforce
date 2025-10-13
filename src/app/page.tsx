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


export default function Home() {
  const [done, setDone] = useState(false)

  return (
    <>
      {!done ? (
        <div className="flex min-h-screen items-center justify-center">
          <Terminal onSequenceComplete={() => setDone(true)}>
            <TypingAnimation>Initializing BruteForce v1.0</TypingAnimation>
            <AnimatedSpan>✔ Loading core modules</AnimatedSpan>
            <AnimatedSpan>✔ Presented by Udbhava</AnimatedSpan>
            <TypingAnimation>Connecting to DataBase...</TypingAnimation>
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
                <div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.88)]">
                  <span className="text-lg">🗓️</span>
                  <AnimatedGradientText>
                    28th October 2025
                  </AnimatedGradientText>
                </div>
              }
              cta={
                <a href="https://bruteforce.devfolio.co" target="_blank" rel="noopener noreferrer">
                  <GlowButton>Register Now</GlowButton>
                </a>
              }
              
            />
          </section>
          {/* <div data-scroll-section>
            <AboutSection />
          </div> */}
          
        </>
      )}
    </>
  )
}
    
