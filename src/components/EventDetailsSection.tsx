"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Sparkles, Shirt, Wine } from "lucide-react";
import { engagementConfig } from "@/config/engagement";

export const EventDetailsSection: React.FC = () => {
  return (
    <section className="relative py-14 px-4 sm:px-6 w-full max-w-xl mx-auto text-center">
      {/* Floating floral decoration */}
      <div className="absolute -top-4 -right-2 w-24 h-24 opacity-[0.06] pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none">
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <ellipse key={i} cx="50" cy="50" rx="22" ry="10" fill="rgba(232,160,181,0.8)" transform={`rotate(${angle} 50 50) translate(0 -18)`} />
          ))}
          <circle cx="50" cy="50" r="8" fill="rgba(212,175,55,0.6)" />
        </svg>
      </div>

      {/* Header */}
      <div className="mb-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-cinzel font-semibold tracking-wider mb-3"
          style={{
            background: "rgba(212, 175, 55, 0.08)",
            border: "1px solid rgba(212, 175, 55, 0.25)",
            color: "rgba(212, 175, 55, 0.9)",
          }}
        >
          <Sparkles className="w-3.5 h-3.5" />
          Ceremony Information
        </motion.div>
        <h3 className="font-playfair text-2xl sm:text-3xl text-cream font-semibold">
          Engagement Ceremony Details
        </h3>
        <p className="font-serif italic text-base text-gold-300/60 mt-1.5">
          {engagementConfig.couple.groom.name} &amp; {engagementConfig.couple.bride.name}
        </p>
      </div>

      {/* Event Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative p-6 sm:p-8 rounded-3xl overflow-hidden"
        style={{
          background: "rgba(15, 22, 41, 0.7)",
          backdropFilter: "blur(20px) saturate(1.5)",
          border: "1px solid rgba(212, 175, 55, 0.15)",
          boxShadow: "0 25px 60px -15px rgba(0,0,0,0.5), 0 0 40px rgba(212,175,55,0.08), inset 0 1px 0 rgba(255,255,255,0.05)",
        }}
      >
        {/* Corner accents */}
        {["top-3 left-3", "top-3 right-3 rotate-90", "bottom-3 left-3 -rotate-90", "bottom-3 right-3 rotate-180"].map(
          (pos, i) => (
            <div key={i} className={`absolute ${pos} w-6 h-6 pointer-events-none opacity-30`}>
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M0 0 L8 0 L8 1.5 L1.5 1.5 L1.5 8 L0 8 Z" fill="rgba(212, 175, 55, 0.8)" />
              </svg>
            </div>
          )
        )}

        {/* Event Header */}
        <div className="space-y-1.5 pb-6 border-b border-gold-400/10 relative z-10">
          <span className="font-cinzel text-[10px] tracking-[0.3em] uppercase text-gold-400/60 font-semibold">
            {engagementConfig.event.subtitle}
          </span>
          <h4 className="font-cinzel text-2xl sm:text-3xl font-bold gold-gradient-text tracking-wide">
            {engagementConfig.event.title}
          </h4>
        </div>

        {/* Event Details - Beautiful Cards */}
        <div className="py-6 space-y-4 text-left max-w-md mx-auto relative z-10">
          {/* Date Card */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-start gap-4 p-4 rounded-2xl group transition-all duration-500"
            style={{
              background: "rgba(212, 175, 55, 0.04)",
              border: "1px solid rgba(212, 175, 55, 0.12)",
            }}
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:shadow-gold-soft transition-shadow duration-500"
              style={{ background: "linear-gradient(135deg, rgba(212,175,55,0.15), rgba(212,175,55,0.05))", border: "1px solid rgba(212,175,55,0.2)" }}
            >
              <Calendar className="w-5 h-5 text-gold-400" />
            </div>
            <div>
              <p className="font-cinzel text-[10px] uppercase tracking-[0.2em] text-gold-400/60 font-semibold">
                Event Date
              </p>
              <p className="font-playfair text-lg text-cream font-semibold mt-0.5">
                {engagementConfig.event.date}
              </p>
            </div>
          </motion.div>

          {/* TIME CARD - Prominent 6:30 PM Display */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative p-5 rounded-2xl group transition-all duration-500 overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(232,160,181,0.06), rgba(212,175,55,0.08))",
              border: "1px solid rgba(232, 160, 181, 0.2)",
              boxShadow: "0 10px 30px -10px rgba(232,160,181,0.1)",
            }}
          >
            {/* Decorative clock background */}
            <div className="absolute top-1/2 right-4 -translate-y-1/2 w-20 h-20 opacity-[0.04] pointer-events-none">
              <svg viewBox="0 0 100 100" fill="currentColor" className="text-gold-400">
                <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="3" fill="none" />
                <circle cx="50" cy="50" r="3" fill="currentColor" />
                <line x1="50" y1="50" x2="50" y2="20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <line x1="50" y1="50" x2="70" y2="50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                {[...Array(12)].map((_, i) => {
                  const angle = (i * 30 * Math.PI) / 180;
                  return (
                    <circle key={i} cx={50 + 38 * Math.sin(angle)} cy={50 - 38 * Math.cos(angle)} r={i % 3 === 0 ? 2.5 : 1.5} fill="currentColor" />
                  );
                })}
              </svg>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background: "linear-gradient(135deg, rgba(232,160,181,0.15), rgba(212,175,55,0.12))",
                  border: "1px solid rgba(232,160,181,0.25)",
                  boxShadow: "0 0 20px rgba(232,160,181,0.1)",
                }}
              >
                <Clock className="w-6 h-6 text-rose-300" />
              </div>
              <div className="flex-1">
                <p className="font-cinzel text-[10px] uppercase tracking-[0.2em] font-semibold" style={{ color: "rgba(232,160,181,0.7)" }}>
                  Ceremony Timing
                </p>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-cinzel text-3xl sm:text-4xl font-bold"
                    style={{
                      background: "linear-gradient(135deg, #e8a0b5, #d4af37, #e8a0b5)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    6:30
                  </span>
                  <span className="font-cinzel text-lg font-bold text-gold-400/80">PM</span>
                </div>
                <p className="font-serif italic text-xs mt-0.5" style={{ color: "rgba(212,175,55,0.4)" }}>
                  Evening ceremony &bull; IST
                </p>
              </div>
            </div>
          </motion.div>

          {/* Venue Card */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-start gap-4 p-4 rounded-2xl group transition-all duration-500"
            style={{
              background: "rgba(212, 175, 55, 0.04)",
              border: "1px solid rgba(212, 175, 55, 0.12)",
            }}
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:shadow-gold-soft transition-shadow duration-500"
              style={{ background: "linear-gradient(135deg, rgba(212,175,55,0.15), rgba(212,175,55,0.05))", border: "1px solid rgba(212,175,55,0.2)" }}
            >
              <MapPin className="w-5 h-5 text-gold-400" />
            </div>
            <div>
              <p className="font-cinzel text-[10px] uppercase tracking-[0.2em] text-gold-400/60 font-semibold">
                Ceremony Venue
              </p>
              <p className="font-playfair text-lg text-cream font-semibold mt-0.5">
                {engagementConfig.venue.name}
              </p>
              <p className="font-sans text-xs text-gold-300/50 mt-0.5">
                {engagementConfig.venue.city}, {engagementConfig.venue.state}, {engagementConfig.venue.country}
              </p>
            </div>
          </motion.div>

          {/* Dress Code */}
          {engagementConfig.dressCode?.enabled && (
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 p-4 rounded-2xl transition-all duration-500"
              style={{ background: "rgba(232,160,181,0.04)", border: "1px solid rgba(232,160,181,0.12)" }}
            >
              <div className="w-11 h-11 rounded-xl bg-rose-300/10 flex items-center justify-center text-rose-300 shrink-0">
                <Shirt className="w-5 h-5" />
              </div>
              <div>
                <p className="font-cinzel text-[10px] uppercase tracking-[0.2em] text-gold-400/60 font-semibold">
                  {engagementConfig.dressCode.title || "Dress Code"}
                </p>
                <p className="font-serif text-base text-cream mt-0.5">
                  {engagementConfig.dressCode.theme}
                </p>
              </div>
            </motion.div>
          )}

          {/* Reception */}
          {engagementConfig.reception?.enabled && (
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 p-4 rounded-2xl transition-all duration-500"
              style={{ background: "rgba(159,185,146,0.04)", border: "1px solid rgba(159,185,146,0.12)" }}
            >
              <div className="w-11 h-11 rounded-xl bg-sage-400/10 flex items-center justify-center text-sage-400 shrink-0">
                <Wine className="w-5 h-5" />
              </div>
              <div>
                <p className="font-cinzel text-[10px] uppercase tracking-[0.2em] text-gold-400/60 font-semibold">
                  {engagementConfig.reception.title || "Reception"}
                </p>
                <p className="font-serif text-base text-cream mt-0.5">
                  {engagementConfig.reception.venue || engagementConfig.venue.name}
                </p>
              </div>
            </motion.div>
          )}
        </div>

        {/* Welcome message */}
        <div className="pt-6 border-t border-gold-400/10 relative z-10">
          <p className="font-serif italic text-base sm:text-lg text-gold-300/70 leading-relaxed">
            &ldquo;We warmly welcome you to share in our happiness and bless us as we begin this beautiful new chapter together.&rdquo;
          </p>
        </div>
      </motion.div>
    </section>
  );
};
