"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorFollower() {
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  // Large soft circle — very laggy
  const blobX = useSpring(rawX, { stiffness: 50,  damping: 18, mass: 0.6 });
  const blobY = useSpring(rawY, { stiffness: 50,  damping: 18, mass: 0.6 });

  // Small sharp dot — snappy
  const dotX  = useSpring(rawX, { stiffness: 400, damping: 28 });
  const dotY  = useSpring(rawY, { stiffness: 400, damping: 28 });

  useEffect(() => {
    // Hide on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const move = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const down = () => setClicking(true);
    const up   = () => setClicking(false);

    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(
        !!target.closest("a, button, [role='button'], input, textarea, select, [data-cursor-hover]")
      );
    };

    window.addEventListener("mousemove", move,       { passive: true });
    window.addEventListener("mousemove", checkHover, { passive: true });
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup",   up);
    document.documentElement.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousemove", checkHover);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup",   up);
      document.documentElement.style.cursor = "";
    };
  }, [rawX, rawY, visible]);

  if (!visible) return null;

  return (
    <>
      {/* Soft trailing blob */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-9998 rounded-full mix-blend-screen"
        style={{
          x: blobX,
          y: blobY,
          translateX: "-50%",
          translateY: "-50%",
          width:  hovering ? 64  : 40,
          height: hovering ? 64  : 40,
          background: hovering
            ? "radial-gradient(circle, rgba(139,92,246,0.35) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)",
          transition: "width 0.3s ease, height 0.3s ease, background 0.3s ease",
        }}
      />

      {/* Sharp dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-9999 rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width:  clicking ? 6  : hovering ? 10 : 7,
          height: clicking ? 6  : hovering ? 10 : 7,
          background: hovering ? "rgba(34,211,238,0.9)" : "rgba(139,92,246,0.9)",
          transition: "width 0.15s ease, height 0.15s ease, background 0.2s ease",
          boxShadow: hovering
            ? "0 0 10px rgba(34,211,238,0.6)"
            : "0 0 8px rgba(139,92,246,0.5)",
        }}
      />
    </>
  );
}
