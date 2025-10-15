"use client";

import { CardSpotlight } from "@/components/ui/card-spotlight";
import { HyperText } from "@/components/ui/hyper-text";
import { CometCard } from "../ui/comet-card";
export default function PrizePoolSection() {
	return (
		<section className="relative w-full py-24">
			<div className="mx-auto w-full max-w-7xl px-6"> 
				<h2 className="mb-8 sm:mb-10 text-center text-2xl sm:text-4xl md:text-4xl font-semibold text-white">
                    Prize{" "}
                    {/* <HyperText className="py-0 font-semibold text-2xl sm:text-4xl md:text-4xl">
                        Pool
                    </HyperText> */}
					<HyperText as="span" startOnView hoverScope="parent" className="py-0 font-semibold text-2xl sm:text-4xl md:text-4xl">
						Pool
					</HyperText>
				</h2>

				<div className="w-full flex justify-center">
					<CometCard className="w-full max-w-3xl md:max-w-4xl">
					<CardSpotlight
							className="relative w-full rounded-2xl bg-background/40 border border-white/10 p-8 sm:p-10 overflow-hidden"
						color="#0b0b0b"
						radius={420}
					>
                        
						<div className="relative z-[1]">
							<div className="inline-flex items-center gap-2 mb-3">
								<span className="text-sm uppercase tracking-wider text-foreground/70">Prize Pool</span>
							</div>
							<div className="mt-2">
								<div className="text-4xl sm:text-5xl font-extrabold tracking-tight">₹ 25,000</div>
								<p className="mt-2 text-sm text-foreground/80 max-w-md  text-center">
							    Includes track awards and special recognitions for standout projects.
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

