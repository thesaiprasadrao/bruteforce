"use client";

import React, { createContext, useContext, useEffect, useMemo, useRef } from "react";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

type ScrollCtx = {
  instance: import("locomotive-scroll").LocomotiveScrollInstance | null;
  scrollTo: (
    target: number | string | HTMLElement,
    options?: { offset?: number; duration?: number; easing?: string }
  ) => void;
};

const SmoothScrollContext = createContext<ScrollCtx | undefined>(undefined);

export function useSmoothScroll() {
  const ctx = useContext(SmoothScrollContext);
  if (!ctx) throw new Error("useSmoothScroll must be used within SmoothScrollProvider");
  return ctx;
}

export default function SmoothScrollProvider({ children }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const instanceRef = useRef<import("locomotive-scroll").LocomotiveScrollInstance | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const reducedMotion = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!containerRef.current) return;

    let mounted = true;
    let resizeTimer: ReturnType<typeof setTimeout> | null = null;
    let ro: ResizeObserver | null = null;

    const onResize = () => {
      if (!instanceRef.current) return;
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => instanceRef.current?.update(), 120);
    };

    const init = async () => {
      if (reducedMotion) {
        // Respect reduced motion: don't initialize the engine
        document.documentElement.classList.remove("scroll-engine");
        return;
      }

      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      if (!mounted || !containerRef.current) return;

      const scroll = new LocomotiveScroll({
        el: containerRef.current,
        smooth: true,
        multiplier: 1,
        smartphone: { smooth: true },
        tablet: { smooth: true },
        getDirection: true,
        getSpeed: true,
      });

      instanceRef.current = scroll;
      (window as unknown as { __loco?: typeof scroll }).__loco = scroll;
      document.documentElement.classList.add("scroll-engine");

      // Update after images or content shifts
      ro = new ResizeObserver(() => scroll.update());
      ro.observe(containerRef.current);

      window.addEventListener("resize", onResize);
    };

    init();

    return () => {
      mounted = false;
      if (resizeTimer) clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      if (ro) ro.disconnect();
      if (instanceRef.current) {
        try {
          (window as unknown as { __loco?: undefined }).__loco = undefined;
        } catch {}
        instanceRef.current.destroy();
        instanceRef.current = null;
      }
      document.documentElement.classList.remove("scroll-engine");
    };
  }, []);

  // Update on route change (App Router)
  useEffect(() => {
    if (instanceRef.current) {
      // allow layout to settle then update
      const t = setTimeout(() => instanceRef.current?.update(), 60);
      return () => clearTimeout(t);
    }
  }, [pathname]);

  const api = useMemo<ScrollCtx>(() => ({
    instance: instanceRef.current,
    scrollTo: (target, options) => {
      const reducedMotion = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const inst = instanceRef.current;
      if (inst) {
        inst.scrollTo(target, options);
      } else {
        // Fallback to native behavior
        let el: HTMLElement | null = null;
        if (typeof target === "string") el = document.querySelector(target) as HTMLElement | null;
        else if (typeof target === "number") {
          window.scrollTo({ top: target, behavior: reducedMotion ? "auto" : "smooth" });
          return;
        } else el = target as HTMLElement | null;
        if (el) el.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
      }
    },
  }), []);

  return (
    <SmoothScrollContext.Provider value={api}>
      <div ref={containerRef} data-scroll-container>
        {children}
      </div>
    </SmoothScrollContext.Provider>
  );
}
