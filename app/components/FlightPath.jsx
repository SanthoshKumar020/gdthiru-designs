"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, animate } from "motion/react";

const D = "M 70 175 C 220 55, 330 55, 450 105 S 700 35, 830 65";
const STOPS = [
  { x: 70, y: 175, label: "Chennai", labelY: 205, delay: 0 },
  { x: 450, y: 105, label: "London", labelY: 140, delay: 0.4 },
  { x: 830, y: 65, label: "New York", labelY: 100, delay: 0.8 },
];

function Airplane() {
  return (
    <svg x={-60} y={-23} width={120} height={46} viewBox="0 0 120 46" aria-hidden="true" style={{ display: "block", overflow: "visible" }}>
      <path d="M 14 14 L 22 2 L 30 2 L 30 14 Z" fill="currentColor" />
      <path d="M 10 29 L 22 29 L 28 35 L 16 35 Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
      <path d="M 48 29 L 70 29 L 86 42 L 70 42 Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
      <path d="M 8 24 C 8 16, 18 12, 32 12 L 96 12 C 106 12, 113 16, 113 21 C 113 26, 106 29, 96 29 L 32 30 C 18 30, 8 28, 8 24 Z" fill="#ffffff" stroke="#94a3b8" strokeWidth="1" />
      <path d="M 97 14 L 107 15 L 110 19 L 99 18 Z" fill="#1e293b" />
      {[34, 44, 54, 64, 74, 84].map((wx) => (
        <rect key={wx} x={wx} y={18} width={6} height={4} rx={2} fill="#1e293b" />
      ))}
      <ellipse cx={72} cy={42} rx={7} ry={3.5} fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
    </svg>
  );
}

export default function FlightPath({ className, duration = 10 }) {
  const pathRef = useRef(null);
  const x = useMotionValue(70);
  const y = useMotionValue(175);
  const rotate = useMotionValue(-38);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return undefined;
    const len = path.getTotalLength();
    const controls = animate(0, len, {
      duration,
      ease: "linear",
      repeat: Infinity,
      onUpdate: (v) => {
        const p = path.getPointAtLength(v);
        const p2 = path.getPointAtLength((v + 1) % len);
        x.set(p.x);
        y.set(p.y);
        rotate.set((Math.atan2(p2.y - p.y, p2.x - p.x) * 180) / Math.PI);
      },
    });
    return () => controls.stop();
  }, [duration, x, y, rotate]);

  return (
    <div className={className} style={{ position: "relative", overflow: "hidden" }}>
      <motion.div
        aria-hidden="true"
        style={{ position: "absolute", top: "16%", left: "-12%", width: 110, height: 30, borderRadius: 999, background: "#ffffff", opacity: 0.35, filter: "blur(8px)", zIndex: 0 }}
        animate={{ left: ["-12%", "108%"] }}
        transition={{ duration: 32, ease: "linear", repeat: Infinity }}
      />
      <motion.div
        aria-hidden="true"
        style={{ position: "absolute", top: "60%", left: "-12%", width: 70, height: 20, borderRadius: 999, background: "#ffffff", opacity: 0.3, filter: "blur(8px)", zIndex: 0 }}
        animate={{ left: ["-12%", "108%"] }}
        transition={{ duration: 44, ease: "linear", repeat: Infinity, delay: 12 }}
      />
      <p style={{ position: "relative", zIndex: 1, textAlign: "center", margin: "0 0 8px", fontWeight: 600 }}>One journey, handled end to end.</p>
      <div style={{ position: "relative", zIndex: 1 }}>
        <svg viewBox="0 0 900 230" role="img" aria-label="Flight route from Chennai to London and New York" style={{ width: "100%", maxWidth: 900, height: "auto", display: "block", margin: "0 auto" }}>
          <motion.path
            ref={pathRef}
            d={D}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.15"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
          <path d={D} fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="1 9" strokeLinecap="round" opacity="0.9" />
          {STOPS.map((s) => (
            <g key={s.label}>
              <motion.circle
                cx={s.x}
                cy={s.y}
                r={10}
                fill="currentColor"
                style={{ transformBox: "fill-box", transformOrigin: "center" }}
                animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 2.4, repeat: Infinity, delay: s.delay }}
              />
              <circle cx={s.x} cy={s.y} r={5} fill="currentColor" />
              <text x={s.x} y={s.labelY} textAnchor="middle" fill="currentColor" fontSize={16} fontWeight={600}>
                {s.label}
              </text>
            </g>
          ))}
          <motion.g style={{ x, y, rotate, transformBox: "fill-box", transformOrigin: "center" }} aria-hidden="true">
            <Airplane />
          </motion.g>
        </svg>
      </div>
    </div>
  );
}
