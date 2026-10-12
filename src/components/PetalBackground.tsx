"use client";

import React, { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  rotate: number;
}

export const PetalBackground: React.FC = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    // Generate a subtle gentle shower of 14 petals
    const items: Petal[] = Array.from({ length: 14 }).map((_, i) => ({
      id: i,
      left: Math.random() * 95,
      size: 14 + Math.random() * 14,
      duration: 12 + Math.random() * 12,
      delay: Math.random() * 8,
      rotate: Math.random() * 360,
    }));
    setPetals(items);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden" aria-hidden="true">
      {petals.map((p) => (
        <div
          key={p.id}
          className="petal"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size * 1.3}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        >
          <svg viewBox="0 0 30 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15 0 C25 10 30 25 15 40 C0 25 5 10 15 0 Z"
              fill="rgba(252, 225, 231, 0.55)"
              stroke="rgba(238, 158, 179, 0.4)"
              strokeWidth="0.8"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};
