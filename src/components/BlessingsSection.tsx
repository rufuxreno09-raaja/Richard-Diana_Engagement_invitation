"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUp, Sparkles, Heart } from "lucide-react";
import Image from "next/image";
import { engagementConfig } from "@/config/engagement";

interface BlessingsSectionProps {
  onReturnToCover: () => void;
}

export const BlessingsSection: React.FC<BlessingsSectionProps> = ({ onReturnToCover }) => {
  return (
    <section className="relative py-14 px-4 sm:px-6 w-full max-w-xl mx-auto text-center">
      {/* Decorative Christian cross & dove symbol */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center mb-6"
      >
        <div className="relative w-16 h-16 rounded-full bg-gold-500/10 border border-gold-400/40 flex items-center justify-center shadow-gold">
          {/* Christian Cross */}
          <svg className="w-8 h-8 text-gold-300 drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11 2h2v6h5v2h-5v12h-2v-12h-5v-2h5z" />
          </svg>
        </div>
        <span className="font-cinzel text-[11px] tracking-[0.3em] uppercase text-gold-400/80 mt-2 font-semibold">
          SOLI DEO GLORIA
        </span>
      </motion.div>

      {/* Main Closing Card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="relative p-6 sm:p-8 rounded-3xl bg-midnight-800/85 backdrop-blur-xl border border-gold-400/40 shadow-[0_10px_35px_rgba(0,0,0,0.6)] text-center overflow-hidden"
      >
        {/* Ambient gradient glow in background */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-48 h-48 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Closing Tag */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-300 text-xs font-cinzel font-semibold tracking-wider mb-5">
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          With Heartfelt Gratitude
        </div>

        {/* Required Closing Thank-You Text */}
        <p className="font-serif italic text-lg sm:text-xl text-cream-100 leading-relaxed max-w-md mx-auto">
          &ldquo;Thank you for being a part of our happiness. We look forward to celebrating this special milestone with your love, prayers, and blessings.&rdquo;
        </p>

        {/* Gold divider */}
        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto my-6" />

        {/* Couple Names and Engagement Date */}
        <div className="space-y-1.5">
          <h4 className="font-script text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-100 to-gold-400">
            {engagementConfig.couple.groom.fullName} &amp; {engagementConfig.couple.bride.fullName}
          </h4>
          <p className="font-cinzel text-xs tracking-[0.25em] uppercase text-gold-300/80 font-semibold mt-1">
            {engagementConfig.event.date}
          </p>
        </div>

        {/* Return to Cover Button */}
        <div className="mt-8 pt-5 border-t border-gold-400/20">
          <button
            onClick={onReturnToCover}
            id="return-to-cover-btn"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-gold-400/50 bg-gold-500/15 hover:bg-gold-500/25 text-gold-200 font-cinzel text-xs font-semibold tracking-widest uppercase transition-all duration-300 shadow-gold active:scale-95"
          >
            <ArrowUp className="w-4 h-4 text-gold-400" />
            <span>Return to Cover</span>
          </button>
        </div>
      </motion.div>

      {/* Footer credit - DIANA JOSE */}
      <div className="mt-8 text-center text-xs font-serif italic text-cream-200/50">
        Lovingly created for Richard Rex &amp; Diana Jose &bull; November 29, 2026
      </div>
    </section>
  );
};
