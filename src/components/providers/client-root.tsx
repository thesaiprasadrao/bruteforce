"use client"

import React from "react"
import SmoothScrollProvider from "@/components/providers/smooth-scroll-provider"
import Cursor from "@/components/ui/cursor"

export function ClientRoot({ children }: { children: React.ReactNode }) {
  const [showCursor, setShowCursor] = React.useState(false)

  React.useEffect(() => {
    // Show custom cursor only on devices that support hover and fine pointer (i.e., not phones)
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)")
    const update = () => setShowCursor(mq.matches)
    update()
    // Safari compatibility for older matchMedia interfaces
    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", update)
      return () => mq.removeEventListener("change", update)
    } else if (typeof mq.addListener === "function") {
      mq.addListener(update)
      return () => mq.removeListener(update)
    }
  }, [])

  return (
    <SmoothScrollProvider>
      {children}
      {showCursor ? <Cursor /> : null}
    </SmoothScrollProvider>
  )
}
