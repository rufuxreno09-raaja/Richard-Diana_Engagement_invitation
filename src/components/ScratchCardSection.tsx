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

  // Trigger celebration confetti
  const triggerCelebration = useCallback(() => {
    if (hasTriggeredConfetti) return;
    setHasTriggeredConfetti(true);

    try {
      // Golden and blush rose confetti burst
      const count = 120;
      const defaults = {
        origin: { y: 0.6 },
        colors: ["#D4AF37", "#FCE1E7", "#9FB992", "#FFF2B2", "#EE9EB3"],
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

  // Reveal card helper
  const completeReveal = useCallback(() => {
    setIsRevealed(true);
    setScratchPercent(100);
    triggerCelebration();

    // Clear canvas completely
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
  }, [triggerCelebration]);

  // Draw the luxury scratch cover onto canvas
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

    // Luxury shimmering gold/champagne gradient background
    const grad = ctx.createLinearGradient(0, 0, rect.width, rect.height);
    grad.addColorStop(0, "#C5A059");
    grad.addColorStop(0.3, "#F3E5AB");
    grad.addColorStop(0.5, "#DFBA5C");
    grad.addColorStop(0.8, "#F7E8BA");
    grad.addColorStop(1, "#967418");

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Subtle decorative borders on scratch surface
    ctx.strokeStyle = "rgba(255, 255, 255, 0.45)";
    ctx.lineWidth = 2;
    ctx.strokeRect(12, 12, rect.width - 24, rect.height - 24);

    ctx.setLineDash([6, 4]);
    ctx.strokeStyle = "rgba(150, 116, 24, 0.4)";
    ctx.strokeRect(18, 18, rect.width - 36, rect.height - 36);
    ctx.setLineDash([]);

    // Decorative text on scratch surface
    ctx.fillStyle = "#2A2521";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Sparkle icon drawing
    ctx.fillStyle = "#8C6514";
    ctx.font = "bold 13px 'Cinzel', serif";
    ctx.fillText("✨ SECRET INVITATION DETAILS ✨", rect.width / 2, rect.height / 2 - 35);

    ctx.fillStyle = "#2A2521";
    ctx.font = "bold 17px 'Playfair Display', Georgia, serif";
    ctx.fillText("A Special Day Is Waiting", rect.width / 2, rect.height / 2 - 5);
    ctx.fillText("to Be Revealed", rect.width / 2, rect.height / 2 + 18);

    ctx.fillStyle = "#6A6059";
    ctx.font = "italic 13px 'Cormorant Garamond', Georgia, serif";
    ctx.fillText("Scratch here with touch or mouse!", rect.width / 2, rect.height / 2 + 48);
  }, []);

  useEffect(() => {
    initCanvas();
    const handleResize = () => {
      if (!isRevealed) {
        initCanvas();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [initCanvas, isRevealed]);

  // Scratch check percentage
  const calculateScratchedArea = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    try {
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;
      let transparentPixels = 0;
      const totalPixels = data.length / 4;

      // Sample every 16th pixel for high performance
      const stride = 16;
      let sampled = 0;
      for (let i = 3; i < data.length; i += 4 * stride) {
        sampled++;
        if (data[i] === 0) {
          transparentPixels++;
        }
      }

      const percent = Math.round((transparentPixels / sampled) * 100);
      setScratchPercent(percent);

      // Reveal if threshold (~40%) reached
      if (percent >= 38) {
        completeReveal();
      }
    } catch {
      // In case of security restrictions
    }
  }, [isRevealed, completeReveal]);

  // Erase at point
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
    // Generous smooth scratch circle brush
    ctx.arc(x, y, 28 * dpr, 0, Math.PI * 2);
    ctx.fill();

    calculateScratchedArea();
  };

  // Mouse handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    scratch(e.clientX, e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    scratch(e.clientX, e.clientY);
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (e.touches.length > 0) {
      setIsDrawing(true);
      const touch = e.touches[0];
      scratch(touch.clientX, touch.clientY);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing || e.touches.length === 0) return;
    const touch = e.touches[0];
    scratch(touch.clientX, touch.clientY);
  };

  const handleTouchEnd = () => {
    setIsDrawing(false);
  };

  return (
    <section className="relative py-10 px-4 sm:px-6 w-full max-w-xl mx-auto text-center">
      {/* Section Header */}
      <div className="mb-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blush-100/80 border border-blush-300 text-blush-500 text-xs font-cinzel font-semibold tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          Interactive Experience
        </div>
        <h3 className="font-playfair text-2xl sm:text-3xl text-[#2A2521] font-semibold">
          A Special Day Is Waiting to Be Revealed
        </h3>
        <p className="font-serif italic text-base text-[#6A6059] mt-1">
          Scratch here to discover our engagement celebration!
        </p>
      </div>

      {/* The Scratch Card Container */}
      <div
        ref={containerRef}
        className="relative w-full aspect-[1/1.05] sm:aspect-[1.2/1] rounded-2xl glass-card border-2 border-gold-400/60 shadow-xl overflow-hidden p-6 sm:p-8 flex flex-col justify-between items-center text-center select-none"
      >
        {/* REVEALED CONTENT (Lies underneath the canvas) */}
        <div className="relative z-0 w-full h-full flex flex-col justify-between items-center py-2">
          {/* Top Tag */}
          <div className="flex items-center gap-2 text-gold-600 font-cinzel text-xs tracking-widest font-semibold uppercase">
            <Heart className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
            <span>{engagementConfig.event.title}</span>
            <Heart className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
          </div>

          {/* Couple Names */}
          <div className="my-auto space-y-1">
            <h4 className="font-script text-3xl sm:text-4xl md:text-5xl text-[#2A2521]">
              {engagementConfig.couple.groom.fullName}
            </h4>
            <p className="font-cinzel text-xs text-gold-600 tracking-widest italic font-bold">
              &amp;
            </p>
            <h4 className="font-script text-3xl sm:text-4xl md:text-5xl text-[#2A2521]">
              {engagementConfig.couple.bride.fullName}
            </h4>
          </div>

          {/* Date & Venue Details Revealed */}
          <div className="space-y-2 w-full pt-2 border-t border-gold-300/40">
            <div className="flex items-center justify-center gap-2 text-[#967418] font-cinzel text-sm sm:text-base font-semibold">
              <Calendar className="w-4 h-4 text-gold-500" />
              <span>{engagementConfig.event.date}</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-[#6A6059] font-sans text-xs sm:text-sm">
              <MapPin className="w-4 h-4 text-gold-500 shrink-0" />
              <span className="truncate max-w-[90%]">
                {engagementConfig.venue.name}, {engagementConfig.venue.city}
              </span>
            </div>
          </div>
        </div>

        {/* SCRATCH CANVAS OVERLAY */}
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
              onTouchEnd={handleTouchEnd}
            />
          )}
        </AnimatePresence>

        {/* Scratch Progress indicator (shown while scratching) */}
        {!isRevealed && scratchPercent > 0 && (
          <div className="absolute bottom-2 z-20 px-3 py-0.5 rounded-full bg-black/60 text-white text-[10px] font-sans pointer-events-none">
            {scratchPercent}% revealed
          </div>
        )}
      </div>

      {/* Accessible Fallback Button */}
      <div className="mt-4 flex flex-col items-center gap-2">
        {!isRevealed ? (
          <button
            onClick={completeReveal}
            id="reveal-invitation-fallback-btn"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold-400 bg-white/80 hover:bg-gold-50 text-gold-700 font-cinzel text-xs font-semibold tracking-wider transition-all shadow-sm active:scale-95"
          >
            <Eye className="w-4 h-4 text-gold-500" />
            Reveal Invitation Details
          </button>
        ) : (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage-100 border border-sage-300 text-sage-600 text-xs font-sans font-medium"
          >
            <Sparkles className="w-3.5 h-3.5 text-sage-500" />
            Invitation revealed with blessings!
          </motion.div>
        )}
      </div>
    </section>
  );
};
