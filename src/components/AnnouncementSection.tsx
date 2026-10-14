"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { engagementConfig } from "@/config/engagement";

export const AnnouncementSection: React.FC = () => {
  return (
    <section className="relative py-14 px-4 sm:px-6 w-full max-w-xl mx-auto text-center">
      {/* Decorative cross watermark */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex justify-center mb-6"
      >
        <div className="relative">
          <svg className="w-12 h-16 cross-glow" viewBox="0 0 48 64" fill="none">
            <rect x="19" y="0" width="10" height="64" rx="2" fill="rgba(212, 175, 55, 0.25)" />
            <rect x="4" y="14" width="40" height="10" rx="2" fill="rgba(212, 175, 55, 0.25)" />
          </svg>
          {/* Glow behind cross */}
          <div className="absolute inset-0 bg-gold-400/10 blur-2xl rounded-full" />
        </div>
      </motion.div>

      {/* Bible Verse */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mb-8"
      >
        <p className="font-serif italic text-lg sm:text-xl text-gold-300/80 verse-glow leading-relaxed max-w-md mx-auto">
          &ldquo;{engagementConfig.bibleVerse.text}&rdquo;
        </p>
        <p className="font-cinzel text-[11px] tracking-[0.2em] uppercase text-gold-500/60 mt-2 font-semibold">
          — {engagementConfig.bibleVerse.reference}
        </p>
      </motion.div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="font-cinzel text-xs tracking-[0.3em] uppercase text-gold-400/70 font-semibold mb-5"
      >
        {engagementConfig.announcement.tagline}
      </motion.p>

      {/* Main Announcement Card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="relative p-7 sm:p-9 rounded-3xl glass-card gradient-border shadow-card overflow-hidden"
      >
        {/* Ambient glow inside */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-gold-400/5 blur-3xl rounded-full pointer-events-none" />

        {/* Dove / Peace icon */}
        <div className="flex justify-center mb-4">
          <motion.div
            className="dove-float"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <svg className="w-10 h-8 text-gold-400/40" viewBox="0 0 64 48" fill="currentColor">
              <path d="M32 8 C24 0, 8 4, 4 16 C0 28, 12 40, 32 48 C52 40, 64 28, 60 16 C56 4, 40 0, 32 8Z" opacity="0.3" />
              <path d="M32 12 C26 6, 14 8, 10 18 C6 28, 16 36, 32 44 C48 36, 58 28, 54 18 C50 8, 38 6, 32 12Z" opacity="0.2" />
            </svg>
          </motion.div>
        </div>

        {/* Message */}
        <p className="font-serif text-lg sm:text-xl md:text-2xl text-cream leading-relaxed italic font-light tracking-wide px-2 sm:px-4 relative z-10">
          &ldquo;{engagementConfig.announcement.message}&rdquo;
        </p>

        {/* Gold divider */}
        <div className="w-28 h-[1px] bg-gradient-to-r from-transparent via-gold-400/50 to-transparent mx-auto my-6" />

        {/* Couple Names */}
        <div className="space-y-1.5 relative z-10">
          <h2 className="font-script text-3xl sm:text-4xl gold-gradient-text animate-shimmer">
            {engagementConfig.couple.groom.fullName}
          </h2>
          <span className="font-cinzel text-xs tracking-widest text-gold-400/50 uppercase block">
            &amp;
          </span>
          <h2 className="font-script text-3xl sm:text-4xl gold-gradient-text animate-shimmer">
            {engagementConfig.couple.bride.fullName}
          </h2>
        </div>
      </motion.div>

      {/* Bottom decorative line */}
      <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-400/30 to-transparent mx-auto mt-8" />
    </section>
  );
};
