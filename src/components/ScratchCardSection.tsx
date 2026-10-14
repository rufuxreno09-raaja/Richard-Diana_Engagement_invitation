"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Calendar, MapPin, Heart, Eye } from "lucide-react";
import confetti from "canvas-confetti";
import { engagementConfig } from "@/config/engagement";

export const ScratchCardSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [scratchPercent, setScratchPercent] = useState(0);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasTriggeredConfetti, setHasTriggeredConfetti] = useState(false);

  const triggerCelebration = useCallback(() => {
    if (hasTriggeredConfetti) return;
    setHasTriggeredConfetti(true);

    try {
      const count = 120;
      const defaults = {
        origin: { y: 0.6 },
        colors: ["#D4AF37", "#e8a0b5", "#faf3e0", "#FFF2B2", "#967418"],
      };

      confetti({
        ...defaults,
        particleCount: Math.floor(count * 0.6),
        spread: 60,
      });
      confetti({
        ...defaults,
        particleCount: Math.floor(count * 0.4),
        spread: 100,
        decay: 0.91,
        scalar: 0.8,
      });
    } catch {
      // Confetti not available
    }
  }, [hasTriggeredConfetti]);

  const completeReveal = useCallback(() => {
    setIsRevealed(true);
    setScratchPercent(100);
    triggerCelebration();

    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
  }, [triggerCelebration]);

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;
    ctx.scale(dpr, dpr);

    // Dark navy to midnight gradient
    const grad = ctx.createLinearGradient(0, 0, rect.width, rect.height);
    grad.addColorStop(0, "#0f1629");
    grad.addColorStop(0.3, "#1a2340");
    grad.addColorStop(0.5, "#151a30");
    grad.addColorStop(0.7, "#1a2340");
    grad.addColorStop(1, "#0c0a1a");

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Gold border lines
    ctx.strokeStyle = "rgba(212, 175, 55, 0.2)";
    ctx.lineWidth = 1.5;
    ctx.strokeRect(14, 14, rect.width - 28, rect.height - 28);

    ctx.setLineDash([8, 4]);
    ctx.strokeStyle = "rgba(212, 175, 55, 0.1)";
    ctx.strokeRect(20, 20, rect.width - 40, rect.height - 40);
    ctx.setLineDash([]);

    // Add cross symbol
    ctx.fillStyle = "rgba(212, 175, 55, 0.08)";
    ctx.fillRect(rect.width / 2 - 4, rect.height / 2 - 50, 8, 100);
    ctx.fillRect(rect.width / 2 - 30, rect.height / 2 - 20, 60, 8);

    // Text on scratch surface
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.fillStyle = "rgba(212, 175, 55, 0.6)";
    ctx.font = "bold 12px 'Cinzel', serif";
    ctx.fillText("✦ SECRET INVITATION DETAILS ✦", rect.width / 2, rect.height / 2 - 40);

    ctx.fillStyle = "rgba(250, 243, 224, 0.7)";
    ctx.font = "bold 16px 'Playfair Display', Georgia, serif";
    ctx.fillText("A Special Day Is Waiting", rect.width / 2, rect.height / 2 - 5);
    ctx.fillText("to Be Revealed", rect.width / 2, rect.height / 2 + 18);

    ctx.fillStyle = "rgba(212, 175, 55, 0.4)";
    ctx.font = "italic 12px 'Cormorant Garamond', Georgia, serif";
    ctx.fillText("Scratch here with touch or mouse!", rect.width / 2, rect.height / 2 + 50);
  }, []);

  useEffect(() => {
    initCanvas();
    const handleResize = () => {
      if (!isRevealed) initCanvas();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [initCanvas, isRevealed]);

  const calculateScratchedArea = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    try {
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;
      let transparentPixels = 0;
      const stride = 16;
      let sampled = 0;
      for (let i = 3; i < data.length; i += 4 * stride) {
        sampled++;
        if (data[i] === 0) transparentPixels++;
      }

      const percent = Math.round((transparentPixels / sampled) * 100);
      setScratchPercent(percent);
      if (percent >= 38) completeReveal();
    } catch {
      // Security restrictions
    }
  }, [isRevealed, completeReveal]);

  const scratch = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const x = (clientX - rect.left) * dpr;
    const y = (clientY - rect.top) * dpr;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 28 * dpr, 0, Math.PI * 2);
    ctx.fill();

    calculateScratchedArea();
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    scratch(e.clientX, e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    scratch(e.clientX, e.clientY);
  };

  const handleMouseUp = () => setIsDrawing(false);

  const handleTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (e.touches.length > 0) {
      setIsDrawing(true);
      scratch(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing || e.touches.length === 0) return;
    scratch(e.touches[0].clientX, e.touches[0].clientY);
  };

  return (
    <section className="relative py-12 px-4 sm:px-6 w-full max-w-xl mx-auto text-center">
      {/* Header */}
      <div className="mb-5">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-300/10 border border-rose-300/20 text-rose-300 text-xs font-cinzel font-semibold tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          Interactive Experience
        </div>
        <h3 className="font-playfair text-2xl sm:text-3xl text-cream font-semibold">
          A Special Day Is Waiting to Be Revealed
        </h3>
        <p className="font-serif italic text-base text-gold-300/60 mt-1.5">
          Scratch here to discover our engagement celebration!
        </p>
      </div>

      {/* Scratch Card */}
      <div
        ref={containerRef}
        className="relative w-full aspect-[1/1.05] sm:aspect-[1.2/1] rounded-3xl glass-card gradient-border shadow-card overflow-hidden p-6 sm:p-8 flex flex-col justify-between items-center text-center select-none"
      >
        {/* Revealed Content */}
        <div className="relative z-0 w-full h-full flex flex-col justify-between items-center py-3">
          {/* Top tag */}
          <div className="flex items-center gap-2 text-gold-400 font-cinzel text-xs tracking-widest font-semibold uppercase">
            <Heart className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
            <span>{engagementConfig.event.title}</span>
            <Heart className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
          </div>

          {/* Couple names */}
          <div className="my-auto space-y-1.5">
            <h4 className="font-script text-3xl sm:text-4xl md:text-5xl gold-gradient-text animate-shimmer">
              {engagementConfig.couple.groom.fullName}
            </h4>
            <p className="font-cinzel text-xs text-gold-400/50 tracking-widest italic font-bold">&amp;</p>
            <h4 className="font-script text-3xl sm:text-4xl md:text-5xl gold-gradient-text animate-shimmer">
              {engagementConfig.couple.bride.fullName}
            </h4>
          </div>

          {/* Date & Venue */}
          <div className="space-y-2 w-full pt-3 border-t border-gold-400/10">
            <div className="flex items-center justify-center gap-2 text-gold-400 font-cinzel text-sm sm:text-base font-semibold">
              <Calendar className="w-4 h-4" />
              <span>{engagementConfig.event.date}</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gold-300/50 font-sans text-xs sm:text-sm">
              <MapPin className="w-4 h-4 shrink-0" />
              <span className="truncate max-w-[90%]">
                {engagementConfig.venue.name}, {engagementConfig.venue.city}
              </span>
            </div>
          </div>
        </div>

        {/* Scratch Canvas */}
        <AnimatePresence>
          {!isRevealed && (
            <canvas
              ref={canvasRef}
              id="scratch-card-canvas"
              aria-label="Interactive scratch card cover"
              className="absolute inset-0 z-10 w-full h-full cursor-pointer scratch-container transition-opacity duration-500"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={() => setIsDrawing(false)}
            />
          )}
        </AnimatePresence>

        {/* Progress */}
        {!isRevealed && scratchPercent > 0 && (
          <div className="absolute bottom-3 z-20 px-4 py-1 rounded-full bg-gold-400/20 backdrop-blur-sm text-gold-300 text-[10px] font-sans pointer-events-none border border-gold-400/20">
            {scratchPercent}% revealed
          </div>
        )}
      </div>

      {/* Fallback Button */}
      <div className="mt-5 flex flex-col items-center gap-2">
        {!isRevealed ? (
          <button
            onClick={completeReveal}
            id="reveal-invitation-fallback-btn"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-gold-400/30 bg-gold-400/5 hover:bg-gold-400/10 text-gold-400 font-cinzel text-xs font-semibold tracking-wider transition-all shadow-gold-soft active:scale-95"
          >
            <Eye className="w-4 h-4" />
            Reveal Invitation Details
          </button>
        ) : (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gold-400/10 border border-gold-400/20 text-gold-400 text-xs font-sans font-medium"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Invitation revealed with blessings!
          </motion.div>
        )}
      </div>
    </section>
  );
};
