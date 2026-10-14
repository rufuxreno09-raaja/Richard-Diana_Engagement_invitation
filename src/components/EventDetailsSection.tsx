"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Sparkles, Shirt, Wine } from "lucide-react";
import { engagementConfig } from "@/config/engagement";

export const EventDetailsSection: React.FC = () => {
  return (
    <section className="relative py-14 px-4 sm:px-6 w-full max-w-xl mx-auto text-center">
      {/* Header */}
      <div className="mb-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/20 text-gold-400 text-xs font-cinzel font-semibold tracking-wider mb-3"
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
        className="relative p-6 sm:p-8 rounded-3xl glass-card gradient-border shadow-card overflow-hidden"
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

        {/* Event Details Grid */}
        <div className="py-6 space-y-4 text-left max-w-md mx-auto relative z-10">
          {/* Date */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-start gap-4 p-4 rounded-2xl bg-gold-400/5 border border-gold-400/10 hover:border-gold-400/25 transition-all duration-500 group"
          >
            <div className="w-11 h-11 rounded-xl bg-gold-400/10 flex items-center justify-center text-gold-400 shrink-0 group-hover:shadow-gold-soft transition-shadow duration-500">
              <Calendar className="w-5 h-5" />
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

          {/* Time */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-start gap-4 p-4 rounded-2xl bg-gold-400/5 border border-gold-400/10 hover:border-gold-400/25 transition-all duration-500 group"
          >
            <div className="w-11 h-11 rounded-xl bg-gold-400/10 flex items-center justify-center text-gold-400 shrink-0 group-hover:shadow-gold-soft transition-shadow duration-500">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="font-cinzel text-[10px] uppercase tracking-[0.2em] text-gold-400/60 font-semibold">
                Ceremony Timing
              </p>
              {engagementConfig.event.time ? (
                <p className="font-playfair text-lg text-cream font-semibold mt-0.5">
                  {engagementConfig.event.time}
                </p>
              ) : engagementConfig.event.timeDisplayNote ? (
                <p className="font-playfair text-lg text-cream font-semibold mt-0.5">
                  {engagementConfig.event.timeDisplayNote}
                </p>
              ) : (
                <div className="space-y-0.5">
                  <p className="font-serif italic text-base text-cream/80">
                    To be announced soon
                  </p>
                  <p className="font-sans text-[11px] text-gold-400/40">
                    (Will be updated once confirmed by families)
                  </p>
                </div>
              )}
            </div>
          </motion.div>

          {/* Venue */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-start gap-4 p-4 rounded-2xl bg-gold-400/5 border border-gold-400/10 hover:border-gold-400/25 transition-all duration-500 group"
          >
            <div className="w-11 h-11 rounded-xl bg-gold-400/10 flex items-center justify-center text-gold-400 shrink-0 group-hover:shadow-gold-soft transition-shadow duration-500">
              <MapPin className="w-5 h-5" />
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
              className="flex items-start gap-4 p-4 rounded-2xl bg-rose-300/5 border border-rose-300/10 transition-all duration-500"
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
              className="flex items-start gap-4 p-4 rounded-2xl bg-sage-400/5 border border-sage-400/10 transition-all duration-500"
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
