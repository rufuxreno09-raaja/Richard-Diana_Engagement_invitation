"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import Image from "next/image";
import { engagementConfig } from "@/config/engagement";

interface CoverSectionProps {
  onOpenInvitation: () => void;
  isOpen: boolean;
}

export const CoverSection: React.FC<CoverSectionProps> = ({ onOpenInvitation, isOpen }) => {
  return (
    <motion.section
      initial={{ opacity: 1, scale: 1 }}
      animate={isOpen ? { opacity: 0, scale: 0.96, pointerEvents: "none" as const } : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-0 z-40 flex items-center justify-center p-4 sm:p-6 overflow-hidden ${
        isOpen ? "hidden" : "flex"
      }`}
      style={{
        background: `
          radial-gradient(ellipse at 50% 0%, rgba(212, 175, 55, 0.08) 0%, transparent 50%),
          radial-gradient(ellipse at 20% 80%, rgba(232, 160, 181, 0.05) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 80%, rgba(212, 175, 55, 0.04) 0%, transparent 50%),
          linear-gradient(180deg, #0c0a1a 0%, #0f1629 50%, #0c0a1a 100%)
        `,
      }}
    >
      {/* Animated radial rings behind card */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full border border-gold-400/10 ring-expand" />
        <div className="absolute w-[400px] h-[400px] rounded-full border border-gold-400/10 ring-expand" style={{ animationDelay: "0.8s" }} />
        <div className="absolute w-[300px] h-[300px] rounded-full border border-gold-400/10 ring-expand" style={{ animationDelay: "1.6s" }} />
      </div>

      {/* Christian Cross watermark */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 cross-glow pointer-events-none">
        <svg width="60" height="80" viewBox="0 0 60 80" fill="none">
          <rect x="24" y="0" width="12" height="80" rx="3" fill="rgba(212, 175, 55, 0.12)" />
          <rect x="6" y="18" width="48" height="12" rx="3" fill="rgba(212, 175, 55, 0.12)" />
        </svg>
      </div>

      {/* Main Cover Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative w-full max-w-[420px] max-h-[92vh] aspect-[1/1.55] p-6 sm:p-8 rounded-3xl glass-card gradient-border shadow-card flex flex-col items-center justify-between text-center overflow-hidden"
      >
        {/* Gold corner accents */}
        {["top-3 left-3", "top-3 right-3 rotate-90", "bottom-3 left-3 -rotate-90", "bottom-3 right-3 rotate-180"].map(
          (pos, i) => (
            <div key={i} className={`absolute ${pos} w-8 h-8 pointer-events-none opacity-50`}>
              <svg viewBox="0 0 32 32" fill="none">
                <path d="M0 0 L12 0 L12 2 L2 2 L2 12 L0 12 Z" fill="rgba(212, 175, 55, 0.6)" />
              </svg>
            </div>
          )
        )}

        {/* Inner border frame */}
        <div className="absolute inset-4 border border-gold-400/10 rounded-2xl pointer-events-none" />

        {/* Top ribbon badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative z-10 pt-1"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="w-10 h-[1px] bg-gradient-to-r from-transparent to-gold-400/60" />
            <svg className="w-5 h-5 text-gold-400 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2L12 22M5 8L19 8" strokeLinecap="round" />
            </svg>
            <span className="w-10 h-[1px] bg-gradient-to-l from-transparent to-gold-400/60" />
          </div>
          <p className="font-cinzel text-[10px] sm:text-xs tracking-[0.35em] uppercase text-gold-400 font-semibold">
            Christian Engagement Invitation
          </p>
        </motion.div>

        {/* Center couple photo and names */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
          className="relative z-10 my-auto py-3 flex flex-col items-center"
        >
          {/* Floating oval photo frame */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-2 border-gold-400/40 shadow-gold-glow glow-pulse"
          >
            <Image
              src="/images/couple-photo.jpg"
              alt="Richard Rex & Diana Jose"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay shimmer */}
            <div className="absolute inset-0 bg-gradient-to-t from-deep/40 via-transparent to-transparent" />
          </motion.div>

          {/* Couple Names */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-5 space-y-1.5"
          >
            <h1 className="font-script text-4xl sm:text-5xl gold-gradient-text animate-shimmer leading-tight px-2">
              Richard Rex
            </h1>
            <div className="flex items-center justify-center gap-3">
              <span className="w-10 h-[1px] bg-gradient-to-r from-transparent to-gold-400/40" />
              <Heart className="w-4 h-4 text-rose-400 fill-rose-400 animate-pulse" />
              <span className="w-10 h-[1px] bg-gradient-to-l from-transparent to-gold-400/40" />
            </div>
            <h2 className="font-script text-4xl sm:text-5xl gold-gradient-text animate-shimmer leading-tight px-2">
              Diana Jose
            </h2>
          </motion.div>

          {/* Date badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-4 px-5 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 inline-block shadow-gold-soft"
          >
            <p className="font-cinzel text-[10px] sm:text-xs tracking-[0.25em] uppercase text-gold-300 font-semibold">
              November 29, 2026
            </p>
          </motion.div>
        </motion.div>

        {/* Footer: Open button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="relative z-10 pb-1 w-full flex flex-col items-center gap-2"
        >
          <button
            onClick={onOpenInvitation}
            id="open-invitation-btn"
            aria-label="Open Engagement Invitation"
            className="group relative w-full sm:w-auto px-8 py-3.5 rounded-full gold-gradient-bg text-deep font-cinzel text-xs sm:text-sm font-bold tracking-[0.2em] uppercase shadow-gold hover:shadow-gold-glow hover:scale-[1.03] active:scale-95 transition-all duration-500 flex items-center justify-center gap-2.5 overflow-hidden border border-gold-500/50"
          >
            <span className="relative z-10">Open Invitation</span>
            <Heart className="w-4 h-4 text-deep/70 fill-deep/70 group-hover:scale-125 transition-transform duration-300" />

            {/* Shimmer sweep */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all pointer-events-none" />
          </button>

          <p className="font-sans text-[10px] tracking-[0.3em] text-gold-400/50 uppercase mt-1">
            Tap to enter celebration
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
