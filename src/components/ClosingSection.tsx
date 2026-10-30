"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { engagementConfig } from "@/config/engagement";

export const ClosingSection: React.FC = () => {
  return (
    <section className="relative py-16 px-4 sm:px-6 w-full max-w-xl mx-auto text-center overflow-hidden">
      {/* Floating floral decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-10 pointer-events-none">
        <svg viewBox="0 0 120 120" fill="none">
          {[0, 72, 144, 216, 288].map((angle, i) => (
            <ellipse
              key={i}
              cx="60"
              cy="60"
              rx="25"
              ry="12"
              fill="rgba(232, 160, 181, 0.6)"
              transform={`rotate(${angle} 60 60) translate(0 -20)`}
            />
          ))}
          <circle cx="60" cy="60" r="8" fill="rgba(212, 175, 55, 0.5)" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 pointer-events-none rotate-180">
        <svg viewBox="0 0 120 120" fill="none">
          {[0, 72, 144, 216, 288].map((angle, i) => (
            <ellipse
              key={i}
              cx="60"
              cy="60"
              rx="25"
              ry="12"
              fill="rgba(232, 160, 181, 0.6)"
              transform={`rotate(${angle} 60 60) translate(0 -20)`}
            />
          ))}
          <circle cx="60" cy="60" r="8" fill="rgba(212, 175, 55, 0.5)" />
        </svg>
      </div>

      {/* Romantic message card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative p-8 sm:p-10 rounded-3xl overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(15,22,41,0.85) 0%, rgba(30,15,25,0.8) 50%, rgba(15,22,41,0.85) 100%)",
          border: "1px solid rgba(232, 160, 181, 0.2)",
          boxShadow: "0 25px 60px -15px rgba(0,0,0,0.5), 0 0 40px rgba(232,160,181,0.08), inset 0 1px 0 rgba(255,255,255,0.05)",
        }}
      >
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-rose-300/5 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-gold-400/5 blur-3xl rounded-full pointer-events-none" />

        {/* Decorative hearts */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6, ease: "backOut" }}
          className="flex justify-center mb-5"
        >
          <div className="relative">
            <div className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, rgba(232,160,181,0.15), rgba(212,175,55,0.1))",
                border: "1px solid rgba(232,160,181,0.25)",
              }}
            >
              <Heart className="w-7 h-7 text-rose-300/80 fill-rose-300/30" />
            </div>
            {/* Pulsing rings */}
            <div className="absolute inset-0 rounded-full border border-rose-300/20 ring-expand" />
            <div className="absolute inset-0 rounded-full border border-rose-300/15 ring-expand" style={{ animationDelay: "1s" }} />
          </div>
        </motion.div>

        {/* Section tag */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full mb-5"
          style={{
            background: "rgba(232, 160, 181, 0.08)",
            border: "1px solid rgba(232, 160, 181, 0.2)",
          }}
        >
          <Sparkles className="w-3.5 h-3.5 text-rose-300/80" />
          <span className="font-cinzel text-[10px] tracking-[0.3em] uppercase text-rose-300/80 font-semibold">
            Forever & Always
          </span>
        </motion.div>

        {/* Main romantic message */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h3 className="font-script text-3xl sm:text-4xl mb-4"
            style={{
              background: "linear-gradient(135deg, #e8a0b5, #d4af37, #e8a0b5)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Two Hearts, One Journey
          </h3>

          <p className="font-serif italic text-lg sm:text-xl text-cream/80 leading-relaxed max-w-md mx-auto mb-6">
            &ldquo;Love is patient, love is kind. It always protects, always trusts, always hopes, always perseveres. Love never fails.&rdquo;
          </p>

          <p className="font-cinzel text-[10px] tracking-[0.2em] uppercase font-semibold mb-6"
            style={{ color: "rgba(212, 175, 55, 0.5)" }}
          >
            — 1 Corinthians 13:4-8
          </p>
        </motion.div>

        {/* Gold divider */}
        <div className="w-32 h-[1px] mx-auto my-4" style={{
          background: "linear-gradient(90deg, transparent, rgba(232,160,181,0.4), rgba(212,175,55,0.4), rgba(232,160,181,0.4), transparent)",
        }} />

        {/* Couple names */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="space-y-2 mt-5"
        >
          <p className="font-serif text-base text-cream/60 leading-relaxed max-w-sm mx-auto">
            As we embark on this beautiful journey of togetherness, your love, prayers, and blessings mean the world to us.
          </p>

          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="w-12 h-[1px]" style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.3))" }} />
            <Heart className="w-4 h-4 text-rose-400/60 fill-rose-400/30 animate-pulse" />
            <span className="w-12 h-[1px]" style={{ background: "linear-gradient(90deg, rgba(212,175,55,0.3), transparent)" }} />
          </div>

          <h4 className="font-script text-2xl sm:text-3xl gold-gradient-text animate-shimmer mt-3">
            {engagementConfig.couple.groom.name} &amp; {engagementConfig.couple.bride.name}
          </h4>
          <p className="font-cinzel text-[10px] tracking-[0.25em] uppercase text-gold-300/60 font-semibold">
            November 29, 2026 &bull; Thiruvannamalai
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};
