"use client"

import { useEffect, useMemo, useState } from "react"
import { AuroraText } from "@/components/ui/aurora-text"

export type CountdownProps = {
  target: Date | string | number // Date object, ISO string, or timestamp
  className?: string
  colors?: string[]
  speed?: number
}

function getTimeParts(diffMs: number) {
  const clamped = Math.max(0, diffMs)
  const s = Math.floor(clamped / 1000)
  const days = Math.floor(s / 86400)
  const hours = Math.floor((s % 86400) / 3600)
  const minutes = Math.floor((s % 3600) / 60)
  const seconds = s % 60
  return { days, hours, minutes, seconds }
}

function pad(n: number) {
  return n.toString().padStart(2, "0")
}

export function Countdown({
  target,
  className = "",
  colors = ["#ac9ef9", "#8b78f6", "#c9c1ff", "#6a5ae0"],
  speed = 1,
}: CountdownProps) {
  const targetMs = useMemo(() => {
    if (target instanceof Date) return target.getTime()
    if (typeof target === "string") return new Date(target).getTime()
    return target
  }, [target])

  const [now, setNow] = useState<number>(Date.now())

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  const diff = targetMs - now
  const { days, hours, minutes, seconds } = getTimeParts(diff)

  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <div className="flex items-center gap-3 sm:gap-4">
        <TimeBlock value={days} colors={colors} speed={speed} />
        <Separator />
        <TimeBlock value={hours} colors={colors} speed={speed} />
        <Separator />
        <TimeBlock value={minutes} colors={colors} speed={speed} />
        <Separator />
        <TimeBlock value={seconds} colors={colors} speed={speed} />
      </div>
    </div>
  )
}

function TimeBlock({ value, colors, speed }: { value: number; colors?: string[]; speed?: number }) {
  return (
    <div className="flex flex-col items-center">
      <AuroraText className="text-3xl sm:text-4xl md:text-5xl font-semibold tabular-nums" colors={colors} speed={speed}>
        {pad(value)}
      </AuroraText>
    </div>
  )
}

function Separator() {
  return <span className="text-xl sm:text-2xl opacity-50">:</span>
}

export default Countdown
