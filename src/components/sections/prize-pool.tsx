"use client";

import { CardSpotlight } from "@/components/ui/card-spotlight";
import { BorderBeam } from "@/components/ui/border-beam";
import { HyperText } from "@/components/ui/hyper-text";

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

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{/* Box 1 */}
					<CardSpotlight
						className="relative rounded-2xl bg-background/40 border border-white/10 p-8 sm:p-10 overflow-hidden"
						color="#0b0b0b"
						radius={420}
					>
						{/* animated border */}
						<BorderBeam borderWidth={1.5} size={96} duration={8} colorFrom="#22d3ee" colorTo="#8b5cf6" />

						<div className="relative z-[1]">
							<div className="inline-flex items-center gap-2 mb-3">
								
								<span className="text-sm uppercase tracking-wider text-foreground/70">Track Prices</span>
							</div>
							<div className="mt-2">
								<div className="text-4xl sm:text-5xl font-extrabold tracking-tight">TBA</div>
								<p className="mt-2 text-sm text-foreground/80 max-w-md">
									Awarded to the top project that demonstrates outstanding innovation, execution, and impact.
								</p>
							</div>
						</div>
					</CardSpotlight>

					{/* Box 2 */}
					<CardSpotlight
						className="relative rounded-2xl bg-background/40 border border-white/10 p-8 sm:p-10 overflow-hidden"
						color="#0b0b0b"
						radius={420}
					>
						{/* animated border */}
						<BorderBeam borderWidth={1.5} size={96} duration={8} colorFrom="#8b5cf6" colorTo="#22d3ee" reverse initialOffset={50} />

						<div className="relative z-[1]">
							<div className="inline-flex items-center gap-2 mb-3">
								<span className="text-sm uppercase tracking-wider text-foreground/70">Special Prize</span>
							</div>
							<div className="mt-2">
								<div className="text-4xl sm:text-5xl font-extrabold tracking-tight">TBA</div>
								<p className="mt-2 text-sm text-foreground/80 max-w-md">
									Recognizes exceptional work with strong methodology, creativity, and presentation.
								</p>
							</div>
						</div>
					</CardSpotlight>
				</div>
			</div>
		</section>
	);
}

