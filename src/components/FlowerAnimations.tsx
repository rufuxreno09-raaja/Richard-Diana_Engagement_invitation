"use client";

import React, { useEffect, useRef, useCallback, useState } from "react";

interface FloatingPetal {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  velocityX: number;
  velocityY: number;
  rotationSpeed: number;
  opacity: number;
  color: string;
  type: "petal" | "sparkle" | "blossom";
  life: number;
  maxLife: number;
}

const PETAL_COLORS = [
  "rgba(232, 160, 181, 0.8)",   // blush pink
  "rgba(196, 104, 126, 0.7)",   // deep rose
  "rgba(212, 175, 55, 0.6)",    // gold
  "rgba(250, 243, 224, 0.5)",   // cream
  "rgba(245, 200, 210, 0.7)",   // light pink
  "rgba(220, 130, 160, 0.6)",   // medium rose
];

export const FlowerAnimations: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const petalsRef = useRef<FloatingPetal[]>([]);
  const animFrameRef = useRef<number>(0);
  const lastScrollRef = useRef(0);
  const idCounterRef = useRef(0);
  const [dimensions, setDimensions] = useState({ w: 0, h: 0 });

  const createPetal = useCallback(
    (x: number, y: number, burst = false): FloatingPetal => {
      const isBurst = burst;
      const types: FloatingPetal["type"][] = ["petal", "petal", "petal", "sparkle", "blossom"];
      return {
        id: idCounterRef.current++,
        x,
        y,
        size: isBurst ? 4 + Math.random() * 10 : 3 + Math.random() * 7,
        rotation: Math.random() * 360,
        velocityX: isBurst
          ? (Math.random() - 0.5) * 6
          : (Math.random() - 0.5) * 1.5,
        velocityY: isBurst
          ? -(2 + Math.random() * 4)
          : -(0.3 + Math.random() * 1.2),
        rotationSpeed: (Math.random() - 0.5) * 4,
        opacity: 0.7 + Math.random() * 0.3,
        color: PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)],
        type: types[Math.floor(Math.random() * types.length)],
        life: 0,
        maxLife: isBurst ? 80 + Math.random() * 60 : 120 + Math.random() * 80,
      };
    },
    []
  );

  const spawnBurst = useCallback(
    (x: number, y: number, count: number) => {
      for (let i = 0; i < count; i++) {
        petalsRef.current.push(createPetal(x + (Math.random() - 0.5) * 60, y + (Math.random() - 0.5) * 40, true));
      }
    },
    [createPetal]
  );

  // Draw petals on canvas
  const drawPetal = useCallback(
    (ctx: CanvasRenderingContext2D, p: FloatingPetal) => {
      const fadeIn = Math.min(p.life / 10, 1);
      const fadeOut = Math.max(0, 1 - (p.life - p.maxLife + 20) / 20);
      const alpha = p.opacity * fadeIn * (p.life > p.maxLife - 20 ? fadeOut : 1);
      if (alpha <= 0) return;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = alpha;

      if (p.type === "sparkle") {
        // ✦ small sparkle
        const s = p.size * 0.5;
        ctx.fillStyle = "rgba(212, 175, 55, 0.9)";
        ctx.beginPath();
        for (let i = 0; i < 4; i++) {
          const angle = (i * Math.PI) / 2;
          ctx.lineTo(Math.cos(angle) * s * 2, Math.sin(angle) * s * 2);
          ctx.lineTo(
            Math.cos(angle + Math.PI / 4) * s * 0.5,
            Math.sin(angle + Math.PI / 4) * s * 0.5
          );
        }
        ctx.closePath();
        ctx.fill();
        // Glow
        ctx.shadowColor = "rgba(212, 175, 55, 0.5)";
        ctx.shadowBlur = 8;
        ctx.fill();
      } else if (p.type === "blossom") {
        // 5-petal blossom shape
        ctx.fillStyle = p.color;
        for (let i = 0; i < 5; i++) {
          ctx.beginPath();
          const angle = (i * 2 * Math.PI) / 5;
          const cx = Math.cos(angle) * p.size * 0.5;
          const cy = Math.sin(angle) * p.size * 0.5;
          ctx.ellipse(cx, cy, p.size * 0.5, p.size * 0.3, angle, 0, Math.PI * 2);
          ctx.fill();
        }
        // Center
        ctx.beginPath();
        ctx.fillStyle = "rgba(212, 175, 55, 0.6)";
        ctx.arc(0, 0, p.size * 0.2, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // Rose petal - elliptical with a point
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.ellipse(0, 0, p.size, p.size * 0.6, 0, 0, Math.PI * 2);
        ctx.fill();
        // Petal vein
        ctx.strokeStyle = `rgba(255,255,255,0.15)`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(-p.size * 0.6, 0);
        ctx.quadraticCurveTo(0, -p.size * 0.2, p.size * 0.6, 0);
        ctx.stroke();
      }

      ctx.restore();
    },
    []
  );

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const updateDimensions = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      setDimensions({ w, h });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const animate = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      petalsRef.current.forEach((p) => {
        // Gravity & drift
        p.velocityY += 0.02;
        p.velocityX += Math.sin(p.life * 0.03) * 0.02;
        p.x += p.velocityX;
        p.y += p.velocityY;
        p.rotation += p.rotationSpeed;
        p.life++;
        drawPetal(ctx, p);
      });

      // Remove dead petals
      petalsRef.current = petalsRef.current.filter(
        (p) => p.life < p.maxLife && p.y < window.innerHeight + 50
      );

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", updateDimensions);
    };
  }, [drawPetal]);

  // Scroll-triggered petal bursts
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const delta = Math.abs(currentScroll - lastScrollRef.current);

      if (delta > 80) {
        const burstCount = Math.min(Math.floor(delta / 30), 12);
        // Burst from the sides
        const side = Math.random() > 0.5 ? 0 : window.innerWidth;
        const burstY = Math.random() * window.innerHeight * 0.6 + window.innerHeight * 0.2;
        spawnBurst(side, burstY, burstCount);

        // Occasional center burst
        if (delta > 200) {
          spawnBurst(window.innerWidth / 2, window.innerHeight * 0.3, 8);
        }
        lastScrollRef.current = currentScroll;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [spawnBurst]);

  // Ambient petals falling continuously (light)
  useEffect(() => {
    const interval = setInterval(() => {
      if (petalsRef.current.length < 50) {
        const x = Math.random() * window.innerWidth;
        petalsRef.current.push(createPetal(x, -10, false));
      }
    }, 800);

    return () => clearInterval(interval);
  }, [createPetal]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[2]"
      aria-hidden="true"
    />
  );
};
