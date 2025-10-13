"use client";

import React from "react";

export function WarpBackground({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

export default WarpBackground;
