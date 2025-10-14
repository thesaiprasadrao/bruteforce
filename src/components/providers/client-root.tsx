"use client"

import React from "react"
import SmoothScrollProvider from "@/components/providers/smooth-scroll-provider"
import Cursor from "@/components/ui/cursor"

export function ClientRoot({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScrollProvider>
      {children}
      <Cursor />
    </SmoothScrollProvider>
  )
}
