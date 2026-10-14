"use client";

import React, { useEffect, useState } from "react";

interface Particle {
  id: number;
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
  type: "cross" | "star" | "dot";
}

export const PetalBackground: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const colors = [
      "rgba(212, 175, 55, 0.4)",
      "rgba(212, 175, 55, 0.25)",
      "rgba(232, 160, 181, 0.3)",
      "rgba(255, 255, 255, 0.15)",
      "rgba(212, 175, 55, 0.2)",
    ];
    const types: Particle["type"][] = ["cross", "star", "dot"];

    const items: Particle[] = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 3 + Math.random() * 6,
      duration: 6 + Math.random() * 10,
      delay: Math.random() * 8,
      color: colors[Math.floor(Math.random() * colors.length)],
      type: types[Math.floor(Math.random() * types.length)],
    }));
    setParticles(items);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[1] overflow-hidden"
      aria-hidden="true"
    >
      {/* Ambient gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gold-400/[0.03] blur-[100px] animate-pulse-subtle" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-rose-300/[0.04] blur-[80px] animate-pulse-subtle" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-0 w-64 h-64 rounded-full bg-gold-400/[0.02] blur-[60px] animate-pulse-subtle" style={{ animationDelay: "3s" }} />

      {/* Floating particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.type === "dot" ? p.color : "transparent",
            border: p.type === "cross" ? `1px solid ${p.color}` : "none",
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            borderRadius: p.type === "dot" ? "50%" : p.type === "star" ? "2px" : "0",
            transform: p.type === "cross" ? "rotate(45deg)" : "none",
            boxShadow: p.type === "dot" ? `0 0 ${p.size * 2}px ${p.color}` : "none",
          }}
        />
      ))}

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(212,175,55,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,175,55,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
};
