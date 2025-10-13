"use client";

import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
};

export default function SmoothScrollProvider({ children }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let scroll: import("locomotive-scroll").LocomotiveScrollInstance | undefined;
    let mounted = true;

    const init = async () => {
      if (!containerRef.current) return;
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      if (!mounted) return;
      scroll = new LocomotiveScroll({
        el: containerRef.current,
  smooth: true,
  multiplier: 1,
        smartphone: { smooth: true },
        tablet: { smooth: true },
      });
      // expose for programmatic control
      (window as unknown as { __loco?: typeof scroll }).__loco = scroll;
    };

    init();

    return () => {
      mounted = false;
      if (scroll) {
        try {
          (window as unknown as { __loco?: undefined }).__loco = undefined;
        } catch {}
        scroll.destroy();
      }
    };
  }, []);

  return (
    <div ref={containerRef} data-scroll-container>
      {children}
    </div>
  );
}
