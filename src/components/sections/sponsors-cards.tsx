"use client";

import UiverseCard from "@/components/ui/uiverse-card";
import { HyperText } from "../ui/hyper-text";
type Sponsor = {
  name: string;
  description?: string;
  logo?: string; // path in /public or remote
  website?: string;
  social?: {
    instagram?: string;
    twitter?: string;
    discord?: string;
  };
};

const SPONSORS: Sponsor[] = [
  {
    name: "DERBI",
    description: "Transforming ideas into scalable ventures.",
    logo: "./public/sponsors/logo-1.svg",
    website: "https://derbifoundation.com/",
    social: {
      twitter: "https://twitter.com/example",
      instagram: "https://instagram.com/example",
    },
  },
  
];

export default function SponsorsCardsSection() {
  const single = SPONSORS.length === 1;
  return (
    <section
      id="sponsors-cards"
      className={`relative w-full py-20 ${single ? "min-h-screen flex items-center" : ""}`}
    >
      <div className={`mx-auto w-full max-w-6xl px-6 ${single ? "flex flex-col items-center" : ""}`}>
        
          <h2 className="mb-8 sm:mb-10 text-center text-2xl sm:text-4xl md:text-4xl font-semibold">
          Our {"  "}
          <HyperText
            as="span"
            startOnView 
            hoverScope="parent"
            className="py-0 font-semibold"
          >
            Sponsers
          </HyperText>
          </h2>
        
        <div
          className={
            single
              ? "flex justify-center"
              : "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center"
          }
        >
          {SPONSORS.map((s) => (
            <div key={s.name} className="[perspective:1000px]">
              <UiverseCard
                title={s.name}
                text={s.description ?? ""}
                onViewMore={() => s.website && window.open(s.website, "_blank")}
                onInstagramClick={(e) => {
                  e.preventDefault();
                  if (s.social?.instagram) window.open(s.social.instagram, "_blank");
                }}
                onTwitterClick={(e) => {
                  e.preventDefault();
                  if (s.social?.twitter) window.open(s.social.twitter, "_blank");
                }}
                onDiscordClick={(e) => {
                  e.preventDefault();
                  if (s.social?.discord) window.open(s.social.discord, "_blank");
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
