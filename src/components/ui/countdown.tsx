"use client"

import { useEffect, useMemo, useState } from "react"
import { AuroraText } from "@/components/ui/aurora-text"

export type CountdownProps = {
  target: Date | string | number // Date object, ISO string, or timestamp
  className?: string
  colors?: string[]
  speed?: number
  showLabels?: boolean
  labels?: [string, string, string, string]
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
  showLabels = false,
  labels = ["Days", "Hours", "Mins", "Sec"],
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
        <TimeBlock value={days} colors={colors} speed={speed} label={showLabels ? labels[0] : undefined} />
        <Separator />
        <TimeBlock value={hours} colors={colors} speed={speed} label={showLabels ? labels[1] : undefined} />
        <Separator />
        <TimeBlock value={minutes} colors={colors} speed={speed} label={showLabels ? labels[2] : undefined} />
        <Separator />
        <TimeBlock value={seconds} colors={colors} speed={speed} label={showLabels ? labels[3] : undefined} />
      </div>
    </div>
  )
}

function TimeBlock({ value, colors, speed, label }: { value: number; colors?: string[]; speed?: number; label?: string }) {
  return (
    <div className="flex flex-col items-center">
      <AuroraText className="text-3xl sm:text-4xl md:text-5xl font-semibold tabular-nums" colors={colors} speed={speed}>
        {pad(value)}
      </AuroraText>
      {label ? (
        <span className="mt-1 text-[10px] sm:text-xs tracking-wide uppercase text-white/70 select-none">{label}</span>
      ) : null}
    </div>
  )
}

function Separator() {
  return <span className="text-xl sm:text-2xl opacity-50">:</span>
}

export default Countdown
