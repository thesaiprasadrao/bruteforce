import type { Metadata } from "next";
import "./globals.css";

import { ClientRoot } from "@/components/providers/client-root";
import { Particles } from "@/components/ui/particles";
export const metadata: Metadata = {
  title: "BruteForce",
  description: "BruteForce",
  icons: {
    icon: [{ url: "/icon.png?v=5", type: "image/png" }],
    shortcut: "/icon.png?v=5",
    apple: "/icon.png?v=5",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"antialiased"}>
        {/* Global particles background */}
        <div className="fixed inset-0 -z-10">
          <Particles
            className="h-full w-full"
            quantity={500}
            size={0.6}
            ease={10}
            staticity={30}
            color="#ac9ef9"
            vx={0.05}
            vy={0.05}
            overlay={false}
          />
        </div>

        <ClientRoot>{children}</ClientRoot>
      </body>
    </html>
  );
}
