"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Heart } from "lucide-react";
import { engagementConfig } from "@/config/engagement";

export const CoupleSection: React.FC = () => {
  return (
    <section className="relative py-14 px-4 sm:px-6 w-full max-w-xl mx-auto text-center">
      {/* Header */}
      <div className="mb-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-rose-300/10 border border-rose-300/20 text-rose-300 text-xs font-cinzel font-semibold tracking-wider mb-3"
        >
          <Heart className="w-3.5 h-3.5 fill-rose-400/60" />
          The Happy Couple
        </motion.div>
        <h3 className="font-playfair text-2xl sm:text-3xl text-cream font-semibold">
          Richard Rex &amp; Diana Jose
        </h3>
        <p className="font-serif italic text-base text-gold-300/60 mt-1.5">
          Two souls, one sacred journey blessed by God
        </p>
      </div>

      {/* Photo Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mx-auto max-w-[360px] p-5 sm:p-6 rounded-3xl glass-card gradient-border shadow-card flex flex-col items-center"
      >
        {/* Glowing background behind photo */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gold-400/5 blur-[60px] rounded-full pointer-events-none" />

        {/* Corner gold accents */}
        {["top-3 left-3", "top-3 right-3 rotate-90", "bottom-3 left-3 -rotate-90", "bottom-3 right-3 rotate-180"].map(
          (pos, i) => (
            <div key={i} className={`absolute ${pos} w-6 h-6 pointer-events-none opacity-40`}>
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M0 0 L8 0 L8 1.5 L1.5 1.5 L1.5 8 L0 8 Z" fill="rgba(212, 175, 55, 0.8)" />
              </svg>
            </div>
          )
        )}

        {/* Arch-shaped photo frame */}
        <div className="relative w-56 h-72 sm:w-64 sm:h-80 rounded-t-full rounded-b-3xl border-2 border-gold-400/30 p-1.5 bg-navy/50 shadow-inner-glow overflow-hidden">
          <div className="relative w-full h-full rounded-t-full rounded-b-2xl overflow-hidden">
            <Image
              src="/images/couple-photo.jpg"
              alt={engagementConfig.couple.photoPlaceholderAlt}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* Photo overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-deep/30 via-transparent to-transparent" />
          </div>
        </div>

        {/* Names Grid */}
        <div className="mt-6 space-y-4 w-full">
          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="px-2 py-3 rounded-xl bg-gold-400/5 border border-gold-400/10">
              <span className="font-cinzel text-[10px] uppercase tracking-[0.2em] text-gold-400/60 font-semibold block">
                The Groom
              </span>
              <h4 className="font-script text-2xl sm:text-3xl gold-gradient-text mt-0.5">
                {engagementConfig.couple.groom.name}
              </h4>
            </div>

            <div className="px-2 py-3 rounded-xl bg-rose-300/5 border border-rose-300/10">
              <span className="font-cinzel text-[10px] uppercase tracking-[0.2em] text-rose-300/60 font-semibold block">
                The Bride
              </span>
              <h4 className="font-script text-2xl sm:text-3xl text-rose-300 mt-0.5">
                {engagementConfig.couple.bride.name}
              </h4>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
