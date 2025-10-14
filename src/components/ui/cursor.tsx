"use client";

import React from "react";

/**
 * A minimal circular cursor that follows the pointer.
 * - Hidden on touch devices via globals.css media query
 * - Uses pointer-events: none so it never blocks clicks/hover
 */
export default function Cursor() {
	const [visible, setVisible] = React.useState(false);
	const [pressed, setPressed] = React.useState(false);
	const posRef = React.useRef({ x: 0, y: 0 });
	const [, forceRerender] = React.useState(0);

	// Re-render at most on animation frames when the mouse moves
	const rafRef = React.useRef<number | null>(null);
	const scheduleUpdate = React.useCallback(() => {
		if (rafRef.current != null) return;
		rafRef.current = requestAnimationFrame(() => {
			rafRef.current = null;
			forceRerender((v) => v + 1);
		});
	}, []);

	React.useEffect(() => {
		const onMouseMove = (e: MouseEvent) => {
			posRef.current = { x: e.clientX, y: e.clientY };
			setVisible(true);
			scheduleUpdate();
		};
		const onMouseDown = () => setPressed(true);
		const onMouseUp = () => setPressed(false);
		const onMouseLeave = () => setVisible(false);

		window.addEventListener("mousemove", onMouseMove, { passive: true });
		window.addEventListener("mousedown", onMouseDown);
		window.addEventListener("mouseup", onMouseUp);
		window.addEventListener("mouseleave", onMouseLeave);

			return () => {
				window.removeEventListener("mousemove", onMouseMove);
				window.removeEventListener("mousedown", onMouseDown);
				window.removeEventListener("mouseup", onMouseUp);
				window.removeEventListener("mouseleave", onMouseLeave);
				if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
			};
	}, [scheduleUpdate]);

	// Center the circle on the pointer
	const size = 10; // px diameter of the cursor
	const { x, y } = posRef.current;
	const transform = `translate3d(${x - size / 2}px, ${y - size / 2}px, 0) scale(${visible ? (pressed ? 0.8 : 1) : 0})`;

	return (
		<div
			aria-hidden
			style={{
				position: "fixed",
				left: 0,
				top: 0,
				width: size,
				height: size,
				borderRadius: "9999px",
				border: "2px solid rgba(255,255,255,0.9)",
				// Slight glow so it's visible on dark backgrounds
				boxShadow: "0 0 8px rgba(255,255,255,0.4)",
				mixBlendMode: "difference",
				pointerEvents: "none",
				zIndex: 9999,
				transform,
				transition: "transform 80ms ease-out, opacity 120ms ease",
				opacity: visible ? 1 : 0,
				willChange: "transform",
			}}
		/>
	);
}

