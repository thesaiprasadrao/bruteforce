"use client";

import Image from "next/image";
import { HyperText } from "@/components/ui/hyper-text";
import { SPONSORS } from "@/data/sponsors";

export default function SponsorsSection() {
  const single = SPONSORS.length === 1;
  const pair = SPONSORS.length === 2;

  return (
    <section id="sponsors" className={`relative w-full py-24 ${single ? "min-h-[70svh] flex items-center" : ""}`}>
      <div className={`mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 ${single ? "flex flex-col items-center" : ""}`}>
        <h2 className="mb-8 sm:mb-10 text-center text-2xl sm:text-4xl md:text-4xl font-semibold text-white">
          Our {"  "}
          <HyperText as="span" startOnView hoverScope="parent" className="py-0 font-semibold text-2xl sm:text-4xl md:text-4xl" aurora>
            Sponsors
          </HyperText>
        </h2>

        {single ? (
          <div className="w-full flex justify-center px-2 sm:px-0">
            {SPONSORS.map((s) => (
              <div key={s.name} className="flex flex-col items-center">
               
                  <a
                    href={s.url ?? "#"}
                    target={s.url ? "_blank" : undefined}
                    rel={s.url ? "noopener noreferrer" : undefined}
                    className="group rounded-2xl border border-white/15 transition-colors hover:border-[#ac9ef9] flex items-center justify-center w-full h-[110px] sm:h-[130px] md:h-[150px] px-4 sm:px-8 bg-background/40"
                  >
                    <div className="relative h-full w-full flex items-center justify-center">
                      <div className="relative h-[60%] w-full">
                        <Image src={s.logo} alt={s.name} fill className="object-contain" sizes="(max-width: 640px) 92vw, 900px" />
                      </div>
                    </div>
                  </a>
                <div className="mt-6 text-base text-white/80 text-center">{s.name}</div>
              </div>
            ))}
          </div>
        ) : pair ? (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-stretch px-2 sm:px-0">
            {SPONSORS.map((s) => (
              <div key={s.name} className="flex flex-col items-center">
                
                  <a
                    href={s.url ?? "#"}
                    target={s.url ? "_blank" : undefined}
                    rel={s.url ? "noopener noreferrer" : undefined}
                    className="group rounded-2xl border border-white/15 transition-colors hover:border-[#ac9ef9] flex items-center justify-center w-full h-[130px] sm:h-[160px] md:h-[180px] px-6 sm:px-8 bg-background/40"
                  >
                    <div className="relative h-full w-full flex items-center justify-center">
                      <div className="relative h-[65%] w-full">
                        <Image src={s.logo} alt={s.name} fill className="object-contain" sizes="(max-width: 640px) 88vw, (max-width: 1536px) 40vw, 600px" />
                      </div>
                    </div>
                  </a>
                <div className="mt-4 text-base text-white/80 text-center font-medium">{s.name}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 place-items-center px-2 sm:px-0">
            {SPONSORS.map((s) => (
              <div key={s.name} className="flex flex-col items-center">
                
                  <a
                    href={s.url ?? "#"}
                    target={s.url ? "_blank" : undefined}
                    rel={s.url ? "noopener noreferrer" : undefined}
                    className="group w-full rounded-2xl border border-white/15 transition-colors hover:border-[#ac9ef9] h-[110px] sm:h-[130px] md:h-[150px] px-4 sm:px-8 flex items-center justify-center bg-background/40"
                  >
                    <div className="relative h-[70%] w-full">
                      <Image src={s.logo} alt={s.name} fill className="object-contain" sizes="(max-width: 640px) 45vw, (max-width: 1024px) 23vw, 240px" />
                    </div>
                  </a>
                <div className="mt-3 text-sm text-white/80">{s.name}</div>
              </div>
            ))}
          </div>
        )}
      </div>
      <p className="mt-8 text-center text-sm sm:text-lg md:text-xl text-white/60">
        More sponsors coming soon...
      </p>
    </section>
  );
}
