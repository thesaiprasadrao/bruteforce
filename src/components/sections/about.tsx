"use client";
import { Particles } from "@/components/ui/particles";
import { HyperText } from "@/components/ui/hyper-text";
import { motion } from "motion/react";
import { BorderBeam } from "@/components/ui/border-beam"

export default function AboutSection() {
  return (
    <section className="relative w-full min-h-screen px-6 py-24 flex items-center justify-center">
      {/* Subtle particles background */}
      <Particles overlay={false} className="absolute inset-0 -z-10 opacity-40" quantity={120} size={0.4} color="#ffffff" />
      <motion.div
        className="mx-auto max-w-3xl text-foreground/90"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="mb-3 text-2xl sm:text-3xl font-semibold">
          About {" "}
          <HyperText
            as="span"
            startOnView
            className="py-0 text-2xl sm:text-3xl font-semibold"
          >
            BruteForce
          </HyperText>
        </h2>
        <p className="text-base sm:text-lg leading-relaxed">
          BruteForce is an inter-college hackathon designed to inspire innovation, teamwork, and creative problem-solving among students. It provides a platform for participants to showcase their technical and business-oriented skills through real-world challenges.
        </p>
      </motion.div>
    </section>
  );
}
