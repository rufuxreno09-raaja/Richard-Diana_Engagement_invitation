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
      <div className="mb-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-cinzel font-semibold tracking-wider mb-3"
          style={{
            background: "rgba(232, 160, 181, 0.08)",
            border: "1px solid rgba(232, 160, 181, 0.25)",
            color: "rgba(232, 160, 181, 0.9)",
          }}
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

      {/* Individual Portraits - Side by Side */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {/* Groom Portrait */}
        <motion.div
          initial={{ opacity: 0, x: -30, rotate: -3 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative group"
        >
          <div
            className="relative rounded-t-full rounded-b-2xl overflow-hidden"
            style={{
              border: "2px solid rgba(212, 175, 55, 0.3)",
              boxShadow: "0 15px 40px -10px rgba(212, 175, 55, 0.15), 0 0 30px rgba(212, 175, 55, 0.06)",
            }}
          >
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/images/richard-portrait.jpg"
                alt="Richard Rex - The Groom"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a1a]/70 via-transparent to-transparent" />
            </div>
          </div>
          {/* Name badge */}
          <div className="mt-3 text-center">
            <span className="font-cinzel text-[9px] uppercase tracking-[0.25em] font-semibold" style={{ color: "rgba(212,175,55,0.5)" }}>
              The Groom
            </span>
            <h4 className="font-script text-2xl gold-gradient-text mt-0.5">
              {engagementConfig.couple.groom.name}
            </h4>
          </div>
        </motion.div>

        {/* Bride Portrait */}
        <motion.div
          initial={{ opacity: 0, x: 30, rotate: 3 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative group"
        >
          <div
            className="relative rounded-t-full rounded-b-2xl overflow-hidden"
            style={{
              border: "2px solid rgba(232, 160, 181, 0.3)",
              boxShadow: "0 15px 40px -10px rgba(232, 160, 181, 0.15), 0 0 30px rgba(232, 160, 181, 0.06)",
            }}
          >
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/images/diana-portrait.jpg"
                alt="Diana Jose - The Bride"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a1a]/70 via-transparent to-transparent" />
            </div>
          </div>
          {/* Name badge */}
          <div className="mt-3 text-center">
            <span className="font-cinzel text-[9px] uppercase tracking-[0.25em] font-semibold" style={{ color: "rgba(232,160,181,0.5)" }}>
              The Bride
            </span>
            <h4 className="font-script text-2xl mt-0.5" style={{ color: "rgba(232, 160, 181, 0.9)" }}>
              {engagementConfig.couple.bride.name}
            </h4>
          </div>
        </motion.div>
      </div>

      {/* Connecting Heart */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6, ease: "backOut" }}
        className="flex items-center justify-center gap-3 my-4"
      >
        <span className="w-12 h-[1px]" style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.3))" }} />
        <div className="w-10 h-10 rounded-full flex items-center justify-center glow-pulse"
          style={{
            background: "linear-gradient(135deg, rgba(232,160,181,0.12), rgba(212,175,55,0.08))",
            border: "1px solid rgba(232,160,181,0.3)",
          }}
        >
          <Heart className="w-5 h-5 text-rose-400 fill-rose-400/40 animate-pulse" />
        </div>
        <span className="w-12 h-[1px]" style={{ background: "linear-gradient(90deg, rgba(212,175,55,0.3), transparent)" }} />
      </motion.div>

      {/* Main Couple Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="relative mx-auto max-w-[380px] p-[3px] rounded-3xl overflow-hidden group"
        style={{
          background: "linear-gradient(135deg, rgba(212,175,55,0.5), rgba(232,160,181,0.3), rgba(212,175,55,0.5))",
          boxShadow: "0 20px 50px -15px rgba(212, 175, 55, 0.2), 0 0 40px rgba(232,160,181,0.08)",
        }}
      >
        <div className="rounded-[21px] overflow-hidden bg-deep p-5 sm:p-6 flex flex-col items-center"
          style={{
            background: "rgba(15, 22, 41, 0.85)",
            backdropFilter: "blur(20px)",
          }}
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

          {/* Couple together photo */}
          <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden"
            style={{ border: "2px solid rgba(212,175,55,0.2)" }}
          >
            <Image
              src="/images/couple-together.jpg"
              alt={engagementConfig.couple.photoPlaceholderAlt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Photo overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-deep/40 via-transparent to-transparent" />
          </div>

          {/* Caption below photo */}
          <div className="mt-5 text-center">
            <h4 className="font-script text-2xl sm:text-3xl gold-gradient-text animate-shimmer">
              Together Forever
            </h4>
            <p className="font-serif italic text-xs text-gold-300/50 mt-1">
              Blessed by God &bull; United in Love
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
