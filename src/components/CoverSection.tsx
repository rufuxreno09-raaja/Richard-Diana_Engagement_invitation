"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";
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
      animate={isOpen ? { opacity: 0, scale: 0.96, pointerEvents: "none" } : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-0 z-40 flex items-center justify-center p-4 sm:p-6 bg-[#FAF5ED] overflow-hidden ${
        isOpen ? "hidden" : "flex"
      }`}
      style={{
        backgroundImage: `
          radial-gradient(circle at 10% 20%, rgba(252, 225, 231, 0.5) 0%, transparent 40%),
          radial-gradient(circle at 90% 80%, rgba(244, 229, 184, 0.45) 0%, transparent 45%),
          radial-gradient(circle at 50% 50%, #FDFAF6 0%, #F5EDE1 100%)
        `,
      }}
    >
      {/* Decorative Ornate Border Card Container */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-full max-w-[420px] max-h-[92vh] aspect-[1/1.55] p-5 sm:p-7 rounded-2xl glass-card border-2 border-gold-400/50 shadow-2xl flex flex-col items-center justify-between text-center overflow-hidden"
      >
        {/* Ornate corner embellishments */}
        <div className="absolute top-2 left-2 w-10 h-10 pointer-events-none opacity-85">
          <Image src="/images/floral-corner.svg" alt="" width={40} height={40} />
        </div>
        <div className="absolute top-2 right-2 w-10 h-10 pointer-events-none opacity-85 rotate-90">
          <Image src="/images/floral-corner.svg" alt="" width={40} height={40} />
        </div>
        <div className="absolute bottom-2 left-2 w-10 h-10 pointer-events-none opacity-85 -rotate-90">
          <Image src="/images/floral-corner.svg" alt="" width={40} height={40} />
        </div>
        <div className="absolute bottom-2 right-2 w-10 h-10 pointer-events-none opacity-85 rotate-180">
          <Image src="/images/floral-corner.svg" alt="" width={40} height={40} />
        </div>

        {/* Inner delicate dotted frame */}
        <div className="absolute inset-3 border border-gold-300/40 border-dashed rounded-xl pointer-events-none" />

        {/* Header Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative z-10 pt-2"
        >
          <div className="flex items-center justify-center gap-2 mb-1.5">
            <span className="w-6 h-[1px] bg-gold-400" />
            <Sparkles className="w-3.5 h-3.5 text-gold-500 animate-pulse" />
            <span className="w-6 h-[1px] bg-gold-400" />
          </div>
          <p className="font-cinzel text-xs tracking-[0.3em] uppercase text-gold-600 font-semibold">
            Engagement Invitation
          </p>
        </motion.div>

        {/* Center: Elegant Oval Frame with Monogram R & D */}
        <motion.div
          initial={{ scale: 0.88, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          className="relative z-10 my-auto py-2 flex flex-col items-center"
        >
          {/* Animated Crest */}
          <motion.div
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-44 h-44 sm:w-52 sm:h-52 drop-shadow-md"
          >
            <Image
              src="/images/couple-floral-crest.svg"
              alt="Richard Rex & Diana Joe Monogram Crest"
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Names in elegant script font */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-3 space-y-1"
          >
            <h1 className="font-script text-4xl sm:text-5xl text-[#2A2521] leading-tight px-2">
              Richard Rex
            </h1>
            <div className="flex items-center justify-center gap-3">
              <span className="w-8 h-[1px] bg-gold-400/60" />
              <span className="font-cinzel text-sm text-gold-600 italic font-semibold">&amp;</span>
              <span className="w-8 h-[1px] bg-gold-400/60" />
            </div>
            <h2 className="font-script text-4xl sm:text-5xl text-[#2A2521] leading-tight px-2">
              Diana Joe
            </h2>
          </motion.div>

          {/* Date banner */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-3 px-4 py-1 rounded-full bg-gold-100/70 border border-gold-300/50 inline-block shadow-sm"
          >
            <p className="font-cinzel text-[11px] sm:text-xs tracking-[0.2em] uppercase text-gold-700 font-semibold">
              November 29, 2026
            </p>
          </motion.div>
        </motion.div>

        {/* Footer: Open Invitation Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="relative z-10 pb-2 w-full flex flex-col items-center gap-2"
        >
          <button
            onClick={onOpenInvitation}
            id="open-invitation-btn"
            aria-label="Open Engagement Invitation"
            className="group relative w-full sm:w-auto px-8 py-3.5 rounded-full gold-gradient-bg text-[#2A2521] font-cinzel text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase shadow-lg shadow-gold/30 hover:shadow-gold-glow hover:scale-[1.03] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2.5 overflow-hidden border border-gold-300"
          >
            <span className="relative z-10">Open Invitation</span>
            <Heart className="w-4 h-4 text-[#8C6514] fill-[#8C6514] group-hover:scale-125 transition-transform duration-300" />
            
            {/* Shimmer light sweep across button */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent transition-all pointer-events-none" />
          </button>
          
          <p className="font-sans text-[10px] tracking-widest text-[#7D736A] uppercase mt-1">
            Tap to enter celebration
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
