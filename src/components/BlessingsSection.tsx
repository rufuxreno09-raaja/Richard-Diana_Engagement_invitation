"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUp, Heart, Sparkles } from "lucide-react";
import Image from "next/image";
import { engagementConfig } from "@/config/engagement";

interface BlessingsSectionProps {
  onReturnToCover: () => void;
}

export const BlessingsSection: React.FC<BlessingsSectionProps> = ({ onReturnToCover }) => {
  return (
    <section className="relative py-14 px-4 sm:px-6 w-full max-w-xl mx-auto text-center">
      {/* Decorative floral crest top */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-28 h-28 mx-auto mb-4 relative"
      >
        <Image
          src="/images/couple-floral-crest.svg"
          alt="Richard & Diana Crest"
          fill
          className="object-contain"
        />
      </motion.div>

      {/* Main Closing Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="relative p-6 sm:p-8 rounded-3xl glass-card border-2 border-gold-400/50 shadow-soft"
      >
        {/* Corner floral elements */}
        <div className="absolute top-2 left-2 w-8 h-8 pointer-events-none opacity-75">
          <Image src="/images/floral-corner.svg" alt="" width={32} height={32} />
        </div>
        <div className="absolute top-2 right-2 w-8 h-8 pointer-events-none opacity-75 rotate-90">
          <Image src="/images/floral-corner.svg" alt="" width={32} height={32} />
        </div>
        <div className="absolute bottom-2 left-2 w-8 h-8 pointer-events-none opacity-75 -rotate-90">
          <Image src="/images/floral-corner.svg" alt="" width={32} height={32} />
        </div>
        <div className="absolute bottom-2 right-2 w-8 h-8 pointer-events-none opacity-75 rotate-180">
          <Image src="/images/floral-corner.svg" alt="" width={32} height={32} />
        </div>

        {/* Closing Tag */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-100/80 border border-gold-300 text-gold-700 text-xs font-cinzel font-semibold tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          With Heartfelt Gratitude
        </div>

        {/* Required Closing Thank-You Text */}
        <p className="font-serif italic text-lg sm:text-xl text-[#2A2521] leading-relaxed max-w-md mx-auto">
          &ldquo;Thank you for being a part of our happiness. We look forward to celebrating this special milestone with your love, prayers, and blessings.&rdquo;
        </p>

        {/* Gold divider */}
        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto my-5" />

        {/* Couple Names and Engagement Date */}
        <div className="space-y-1">
          <h4 className="font-script text-3xl sm:text-4xl text-[#967418]">
            {engagementConfig.couple.groom.fullName} &amp; {engagementConfig.couple.bride.fullName}
          </h4>
          <p className="font-cinzel text-xs tracking-widest uppercase text-[#6A6059] font-semibold mt-1">
            {engagementConfig.event.date}
          </p>
        </div>

        {/* Return to Cover Button */}
        <div className="mt-8 pt-4 border-t border-gold-200/60">
          <button
            onClick={onReturnToCover}
            id="return-to-cover-btn"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-gold-400 bg-white/80 hover:bg-gold-50 text-gold-700 font-cinzel text-xs font-semibold tracking-wider transition-all duration-300 shadow-sm active:scale-95"
          >
            <ArrowUp className="w-4 h-4 text-gold-500" />
            <span>Return to Cover</span>
          </button>
        </div>
      </motion.div>

      {/* Footer credit */}
      <div className="mt-8 text-center text-[11px] font-serif italic text-[#7D736A]">
        Lovingly created for Richard Rex &amp; Diana Joe &bull; November 29, 2026
      </div>
    </section>
  );
};
