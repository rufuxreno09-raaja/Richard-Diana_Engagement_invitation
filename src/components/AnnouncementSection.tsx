"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { engagementConfig } from "@/config/engagement";

export const AnnouncementSection: React.FC = () => {
  return (
    <section className="relative py-12 px-4 sm:px-6 w-full max-w-xl mx-auto text-center">
      {/* Decorative floral divider at top */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-48 h-8 mx-auto mb-4 relative"
      >
        <Image src="/images/floral-divider.svg" alt="" fill className="object-contain" />
      </motion.div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="font-cinzel text-xs tracking-[0.25em] uppercase text-gold-600 font-semibold mb-3"
      >
        {engagementConfig.announcement.tagline}
      </motion.p>

      {/* Main Announcement Card with subtle glass framing */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative p-6 sm:p-8 rounded-2xl glass-card border border-gold-300/40 shadow-soft"
      >
        {/* Subtle Christian Dove / Cross watermark accent */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 opacity-15 pointer-events-none">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path
              d="M20 5V35M10 14H30"
              stroke="#D4AF37"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Romantic Announcement Message */}
        <p className="font-serif text-lg sm:text-xl md:text-2xl text-[#2A2521] leading-relaxed italic font-normal tracking-wide px-2 sm:px-4">
          &ldquo;{engagementConfig.announcement.message}&rdquo;
        </p>

        {/* Gold Accent Divider */}
        <div className="w-24 h-[1.5px] bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto my-5" />

        {/* Couple Names Highlight */}
        <div className="space-y-1">
          <h2 className="font-script text-3xl sm:text-4xl text-[#967418]">
            {engagementConfig.couple.groom.fullName}
          </h2>
          <span className="font-cinzel text-xs tracking-widest text-[#6A6059] uppercase block">
            &amp;
          </span>
          <h2 className="font-script text-3xl sm:text-4xl text-[#967418]">
            {engagementConfig.couple.bride.fullName}
          </h2>
        </div>
      </motion.div>

      {/* Bottom subtle divider */}
      <div className="w-32 h-6 mx-auto mt-4 relative opacity-75">
        <Image src="/images/floral-divider.svg" alt="" fill className="object-contain" />
      </div>
    </section>
  );
};
