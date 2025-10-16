import localFont from "next/font/local";
import { Cinzel_Decorative as GoogleCinzelDecorative } from "next/font/google";

export const digital7 = localFont({
  // From src/app/fonts.ts to /fonts/digital-7/digital-7.ttf (two levels up)
  src: [{ path: "../../fonts/digital-7/digital-7.ttf", weight: "400", style: "normal" }],
  variable: "--font-digital7",
  display: "swap",
});

export const cinzelDecorative = GoogleCinzelDecorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-cinzel-decorative",
  display: "swap",
});
