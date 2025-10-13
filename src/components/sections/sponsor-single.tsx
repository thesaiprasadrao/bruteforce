"use client";

import Image from "next/image";
import SponsorCard from "@/components/ui/sponsor-card";

export default function SponsorSingleSection() {
  return (
    <section id="sponsor" className="relative w-full min-h-screen flex items-center justify-center px-6">
      <SponsorCard
        name="Acme Corp"
        description="Innovating the future, today."
        logo={<Image src="/sponsors/logo-1.svg" alt="Acme Corp" width={32} height={32} />}
        website="https://example.com"
        instagram="https://instagram.com/example"
        twitter="https://twitter.com/example"
      />
    </section>
  );
}
