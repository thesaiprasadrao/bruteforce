import type { Metadata } from "next";
import "./globals.css";

import SmoothScrollProvider from "@/components/providers/smooth-scroll-provider";

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
      <body className={`antialiased`}>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
