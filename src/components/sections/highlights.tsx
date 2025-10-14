"use client";

import { Marquee } from "@/components/ui/marquee";
import { useId } from "react";
import { HyperText } from "@/components/ui/hyper-text";
const POINTS = [
  {
    icon: "💡",
    title: "Showcase your innovation",
    text: "Bring your unique ideas to life and compete against top talent from various colleges.",
  },
  {
    icon: "🧩",
    title: "Choose your domain",
    text: "Pick between AI/ML or Business & Innovation and build what excites you most.",
  },
  {
    icon: "🤝",
    title: "Collaborate & network",
    text: "Work in teams, connect with mentors, and grow your circle with like-minded creators.",
  },
  {
    icon: "⚙️",
    title: "Hands-on experience",
    text: "Code, design, and develop real solutions in an 8-hour sprint round.",
  },
  {
    icon: "🧭",
    title: "Mentorship support",
    text: "Get guidance from experienced mentors throughout the hackathon journey.",
  },
  {
    icon: "🏆",
    title: "Exciting rewards",
    text: "₹25K prize pool, special domain awards, goodies, and certificates for all participants.",
  },
  {
    icon: "🚀",
    title: "Boost your portfolio",
    text: "Build a project you can showcase to recruiters, judges, or future hackathons.",
  },
  {
    icon: "🎯",
    title: "Challenge yourself",
    text: "Step out of your comfort zone, test your problem-solving skills, and have fun doing it!",
  },
];

export default function HighlightsSection() {
  const id = useId();
  return (
    <section id={`highlights-${id}`} className="relative w-full py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        <h2 className="mb-8 sm:mb-10 text-center text-2xl sm:text-4xl md:text-4xl font-semibold text-white">
          Why should you  {"  "}
          <HyperText as="span" startOnView hoverScope="parent" className="py-0 font-semibold text-white">
            Register
          </HyperText> {"  "}
          ?
        </h2>

        <div className="mt-6">
          <Marquee className="py-2" pauseOnHover repeat={6}>
            {POINTS.map((p) => (
              <div key={p.title} className="flex-shrink-0 w-[360px] max-w-[360px] h-[140px] mr-4 rounded-2xl bg-background/40 border border-white/10 p-6 flex items-start gap-4">
                <div className="text-3xl leading-none">{p.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{p.title}</h3>
                  <p className="text-sm text-foreground/80">{p.text}</p>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
