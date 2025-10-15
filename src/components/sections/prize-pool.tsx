"use client";

import { CardSpotlight } from "@/components/ui/card-spotlight";
import { HyperText } from "@/components/ui/hyper-text";
import { CometCard } from "../ui/comet-card";
export default function PrizePoolSection() {
    return (
        <section className="relative w-full py-24">
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="mb-8 sm:mb-10 text-center text-2xl sm:text-4xl md:text-4xl font-semibold text-white">
                    Prize{" "}
                    {/* <HyperText className="py-0 font-semibold text-2xl sm:text-4xl md:text-4xl">
                        Pool
                    </HyperText> */}
                    <HyperText as="span" startOnView hoverScope="parent" className="py-0 font-semibold text-2xl sm:text-4xl md:text-4xl" aurora>
                        Pool
                    </HyperText>
                </h2>

                <div className="w-full flex justify-center">
                    <CometCard className="w-full max-w-xl md:max-w-2xl">
                        <CardSpotlight
                            className="relative w-full rounded-2xl bg-background/40 border border-white/10 px-6 sm:px-8 pt-4 sm:pt-6 pb-6 sm:pb-8 overflow-hidden"
                            color="#0b0b0b"
                            radius={420}
                        >

                            <div className="relative z-[1]">
                                <div className="mt-0">
                                    <div className="text-4xl sm:text-5xl font-extrabold tracking-tight text-center">₹ 25,000</div>
                                    <p className="mt-2 text-sm sm:text-base text-foreground/80 max-w-prose text-left text-balance leading-relaxed">
                                        The prize pool will be generously divided among the tracks and awarded to the idea with the most potential. Also the ones who flourish with creativity and innovation will be awarded and appreciated.
                                    </p>
                                </div>
                            </div>
                        </CardSpotlight>
                    </CometCard>
                </div>
            </div>
        </section>
    );
}

