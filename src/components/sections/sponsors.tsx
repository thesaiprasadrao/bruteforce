"use client";

import Image from "next/image";
import { HyperText } from "@/components/ui/hyper-text";
import { SPONSORS } from "@/data/sponsors";

export default function SponsorsSection() {
  const single = SPONSORS.length === 1;
  const pair = SPONSORS.length === 2;

  return (
    <section id="sponsors" className={`relative w-full py-24 ${single ? "min-h-screen flex items-center" : ""}`}>
      <div className={`mx-auto w-full max-w-6xl px-6 ${single ? "flex flex-col items-center" : ""}`}>
        <h2 className="mb-8 sm:mb-10 text-center text-2xl sm:text-4xl md:text-4xl font-semibold text-white">
          Our {"  "}
          <HyperText as="span" startOnView hoverScope="parent" className="py-0 font-semibold text-2xl sm:text-4xl md:text-4xl">
            Sponsors
          </HyperText>
        </h2>

        {single ? (
          <div className="w-full flex justify-center">
            {SPONSORS.map((s) => (
              <div key={s.name} className="flex flex-col items-center">
                <a
                  href={s.url ?? "#"}
                  target={s.url ? "_blank" : undefined}
                  rel={s.url ? "noopener noreferrer" : undefined}
                  className="group rounded-2xl border border-white/15 transition-colors hover:border-[#ac9ef9] flex items-center justify-center"
                  style={{ width: 786, height: 146 }}
                >
                  <div className="relative h-full w-full flex items-center justify-center">
                    <div className="relative h-20 w-80">
                      <Image src={s.logo} alt={s.name} fill className="object-contain" sizes="786px" />
                    </div>
                  </div>
                </a>
                <div className="mt-6 text-base text-white/80 text-center">{s.name}</div>
              </div>
            ))}
          </div>
        ) : pair ? (
          <div className="w-full flex flex-col md:flex-row md:justify-center gap-10 md:gap-16 items-center">
            {SPONSORS.map((s) => (
              <div key={s.name} className="flex flex-col items-center">
                <a
                  href={s.url ?? "#"}
                  target={s.url ? "_blank" : undefined}
                  rel={s.url ? "noopener noreferrer" : undefined}
                  className="group rounded-2xl border border-white/15 transition-colors hover:border-[#ac9ef9] flex items-center justify-center"
                  style={{ width: 420, height: 160 }}
                >
                  <div className="relative h-full w-full flex items-center justify-center p-6">
                    <div className="relative h-24 w-64">
                      <Image src={s.logo} alt={s.name} fill className="object-contain" sizes="420px" />
                    </div>
                  </div>
                </a>
                <div className="mt-4 text-base text-white/80 text-center font-medium">{s.name}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {SPONSORS.map((s) => (
              <div key={s.name} className="flex flex-col items-center">
                <a
                  href={s.url ?? "#"}
                  target={s.url ? "_blank" : undefined}
                  rel={s.url ? "noopener noreferrer" : undefined}
                  className="group w-full max-w-[240px] rounded-2xl border border-white/15 p-6 transition-colors hover:border-[#ac9ef9] h-[146px] flex items-center justify-center"
                >
                  <div className="relative h-20 w-40">
                    <Image src={s.logo} alt={s.name} fill className="object-contain" sizes="(max-width: 768px) 160px, 200px" />
                  </div>
                </a>
                <div className="mt-3 text-sm text-white/80">{s.name}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
