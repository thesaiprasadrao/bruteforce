"use client"

import { BorderBeam } from "@/components/ui/border-beam"
import { cn } from "@/lib/utils"
import { HyperText } from "../ui/hyper-text"
export type TimelineEvent = {
  title: string
  date: string
  description: string
}

const defaultEvents: TimelineEvent[] = [
  {
    title: "Registrations Open",
    date: "Oct 15, 2025",
    description:
      "Kickoff for BruteForce! Form your team and submit your application on Devfolio.",
  },
  {
    title: "Shortlisting",
    date: "Oct 24, 2025",
    description:
      "We review submissions and shortlist teams based on problem fit and ideas.",
  },
  {
    title: "Hackathon Day",
    date: "Oct 28, 2025",
    description:
      "24 hours of building, mentoring, checkpoints, and lots of caffeine.",
  },
  {
    title: "Demos & Results",
    date: "Oct 28, 2025",
    description:
      "Showtime! Final presentations, jury Q&A, and winners announcement.",
  },
  {
    title: "Hmm",
    date: "Oct 28, 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  }
]

function Card({ className, children }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={cn(
        "relative rounded-xl border border-white/10 bg-[rgb(2_6_23_/_0.5)] p-6 backdrop-blur",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset,0_8px_32px_rgba(0,0,0,0.35)]",
        className
      )}
    >
      <BorderBeam borderWidth={1} size={96} duration={8} colorFrom="#5b8cff" colorTo="#b067ff" />
      {children}
    </div>
  )
}

interface TimelineSectionProps {
  events?: TimelineEvent[]
}

export default function TimelineSection({ events = defaultEvents }: TimelineSectionProps) {
  return (
    <section id="timeline" className="relative py-24">
      {/* Center vertical line */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/20 to-transparent" />

      <div className="mx-auto max-w-5xl px-4">
        <header className="mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            <HyperText>Timeline</HyperText> </h2>
          <p className="mt-2 text-sm text-white/70">What to expect and when</p>
        </header>

        <ul className="space-y-16 md:space-y-20">
          {events.map((ev, idx) => {
            const isLeft = idx % 2 === 0
            return (
              <li key={ev.title} className="relative">
                {/* Dot on the center line */}
                <span className="absolute left-1/2 top-1/2 block size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-400 ring-4 ring-violet-400/20" />

                <div className="grid grid-cols-1 items-center md:grid-cols-2">
                  {/* Left column */}
                  <div className="md:pr-10">
                    {isLeft ? (
                      <Card>
                        <h3 className="text-lg md:text-xl font-semibold">{ev.title}</h3>
                        <p className="mt-1 text-xs md:text-sm text-white/70">{ev.date}</p>
                        <p className="mt-3 text-sm md:text-base text-white/80">{ev.description}</p>
                      </Card>
                    ) : null}
                  </div>

                  {/* Right column */}
                  <div className="md:pl-10">
                    {!isLeft ? (
                      <Card>
                        <h3 className="text-lg md:text-xl font-semibold">{ev.title}</h3>
                        <p className="mt-1 text-xs md:text-sm text-white/70">{ev.date}</p>
                        <p className="mt-3 text-sm md:text-base text-white/80">{ev.description}</p>
                      </Card>
                    ) : null}
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
