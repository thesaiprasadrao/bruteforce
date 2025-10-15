"use client";
import { HyperText } from "@/components/ui/hyper-text";
import { motion } from "motion/react";
import { ShineBorder } from "@/components/ui/shine-border"
import { MagicCard } from "@/components/ui/magic-card"
import { Brain, Briefcase } from "lucide-react"
export default function AboutSection() {
  return (
    <section className="relative w-full px-6 pt-4 sm:pt-8 pb-10 flex items-start justify-center">
      {/* Subtle particles background */}
      <motion.div
        className="mx-auto w-full max-w-7xl text-foreground/90">  
  <h2 className="mb-4 sm:mb-8 text-center text-2xl sm:text-4xl md:text-4xl font-semibold">
          About {"  "}
          <HyperText
            as="span"
            startOnView 
            hoverScope="parent"
            className="py-0 font-semibold text-2xl sm:text-4xl md:text-4xl"

          >
            BruteForce
          </HyperText>
        </h2>
        <p className="text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto text-center">
          {/* BruteForce is an inter-college hackathon where ideas collide, codes compile, and innovation takes its own shape. It brings together sharp minds, restless curiosity, and a shared belief that any problem can be solved with enough logic. Think of it as a celebration of chaos, creativity, and the eternal truth of programming: if it doesn’t work the first time, brute force it. */}
          BruteForce is an inter-college hackathon where ideas collide, codes compile, and innovation takes shape. It unites sharp minds and restless curiosity in a celebration of creativity, chaos, and the ultimate programming truth: if it doesn't work the first time, brute-force it.
        </p>
        
        {/* Cards */}
  <div className="mt-6 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="group relative rounded-xl bg-background/40 border border-foreground/10 p-6 overflow-hidden transition-transform duration-300 ease-out hover:-translate-y-1 hover:border-foreground/20 hover:shadow-[0_10px_30px_-10px_rgba(34,211,238,0.35)]">
            <ShineBorder
              borderWidth={1.5}
              duration={12}
              shineColor={["#8b5cf6", "#06b6d4", "#22d3ee"]}
            />
            {/* soft glow overlay */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{background: "radial-gradient(1200px 200px at 50% 0%, rgba(34,211,238,0.08), transparent 60%)"}} />
            <div className="mb-3 inline-flex items-center gap-2">
              <div className="h-9 w-9 rounded-full border border-foreground/10 bg-gradient-to-br from-indigo-500/20 via-cyan-400/20 to-emerald-400/20 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-0.5">
                <Brain className="h-5 w-5 text-cyan-300 transition-transform duration-300 group-hover:rotate-6" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Track 1 - Artificial Intelligence</h3>
            <p className="text-sm text-foreground/80">
              Explore the cutting-edge world of AI and machine learning. Build intelligent applications that leverage data to solve complex problems and create innovative solutions.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group relative rounded-xl bg-background/40 border border-foreground/10 p-6 overflow-hidden transition-transform duration-300 ease-out hover:-translate-y-1 hover:border-foreground/20 hover:shadow-[0_10px_30px_-10px_rgba(139,92,246,0.35)]">
            <ShineBorder
              borderWidth={1.5}
              duration={12}
              shineColor={["#22d3ee", "#06b6d4", "#8b5cf6"]}
            />
            {/* soft glow overlay */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{background: "radial-gradient(1200px 200px at 50% 0%, rgba(139,92,246,0.08), transparent 60%)"}} />
            <div className="mb-3 inline-flex items-center gap-2">
              <div className="h-9 w-9 rounded-full border border-foreground/10 bg-gradient-to-br from-emerald-400/20 via-cyan-400/20 to-indigo-500/20 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-0.5">
                <Briefcase className="h-5 w-5 text-emerald-300 transition-transform duration-300 group-hover:-rotate-6" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Track 2 - Business & Entrepreneurship</h3>
            <p className="text-sm text-foreground/80">
              Dive into the business side of technology. Develop solutions that address market needs, focusing on innovation, scalability, and real-world impact.
            </p>
          </div>
        </div>
        {/* Three Stages to Victory */}
  <div className="mt-12 sm:mt-16">
           <h2 className="mb-8 sm:mb-10 text-center text-2xl sm:text-4xl md:text-4xl font-semibold">
          Three Stages to {"  "}
          <HyperText
            as="span"
            startOnView 
            hoverScope="parent"
            className="py-0 font-semibold text-2xl sm:text-4xl md:text-4xl"
          >
            Victory
          </HyperText>
        </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Stage 1 */}
            <MagicCard
              className="relative rounded-3xl overflow-hidden transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(34,211,238,0.35)]"
              gradientSize={280}
            >
              <div className="p-6 sm:p-8">
                <div className="text-foreground/25 text-5xl font-extrabold tracking-tight select-none transition-transform duration-300 group-hover:-translate-y-0.5">01</div>
                <div className="mt-4 flex items-center gap-3">
                  <span className="text-cyan-300 text-xl transition-transform duration-300 group-hover:-translate-y-0.5">•</span>
                  <h4 className="text-xl sm:text-2xl font-semibold">Idea Submission</h4>
                </div>
                <p className="mt-3 text-foreground/80 text-sm sm:text-base">
                  Submit your innovative concept and pitch your solution to the problem statement
                </p>
              </div>
            </MagicCard>


            {/* Stage 2 */}
            <MagicCard
              className="relative rounded-3xl overflow-hidden transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(139,92,246,0.35)]"
              gradientSize={280}
            >
              <div className="p-6 sm:p-8">
                <div className="text-foreground/25 text-5xl font-extrabold tracking-tight select-none transition-transform duration-300 group-hover:-translate-y-0.5">02</div>
                <div className="mt-4 flex items-center gap-3">
                  <span className="text-cyan-300 text-xl transition-transform duration-300 group-hover:-translate-y-0.5">•</span>
                  <h4 className="text-xl sm:text-2xl font-semibold">Development Sprint</h4>
                </div>
                <p className="mt-3 text-foreground/80 text-sm sm:text-base">
                  12-hour intensive coding session to bring your idea to life with your team
                </p>
              </div>
            </MagicCard>

            {/* Stage 3 */}
            <MagicCard
              className="relative rounded-3xl overflow-hidden transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(34,211,238,0.35)]"
              gradientSize={280}
            >
              <div className="p-6 sm:p-8">
                <div className="text-foreground/25 text-5xl font-extrabold tracking-tight select-none transition-transform duration-300 group-hover:-translate-y-0.5">03</div>
                <div className="mt-4 flex items-center gap-3">
                  <span className="text-cyan-300 text-xl transition-transform duration-300 group-hover:-translate-y-0.5">•</span>
                  <h4 className="text-xl sm:text-2xl font-semibold">Final Presentation</h4>
                </div>
                <p className="mt-3 text-foreground/80 text-sm sm:text-base">
                  Present your working prototype to industry experts and compete for the top prize
                </p>
              </div>
            </MagicCard>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
