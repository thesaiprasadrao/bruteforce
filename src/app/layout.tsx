import type { Metadata } from "next";
import { digital7 } from "./fonts";
import "./globals.css";

import { ClientRoot } from "@/components/providers/client-root";
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
        <ClientRoot>{children}</ClientRoot>
      </body>
    </html>
  );
}
