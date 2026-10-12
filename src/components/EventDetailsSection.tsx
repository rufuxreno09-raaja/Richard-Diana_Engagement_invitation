"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Sparkles, Shirt, Wine } from "lucide-react";
import Image from "next/image";
import { engagementConfig } from "@/config/engagement";

export const EventDetailsSection: React.FC = () => {
  return (
    <section className="relative py-12 px-4 sm:px-6 w-full max-w-xl mx-auto text-center">
      {/* Header */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-100 border border-gold-300 text-gold-700 text-xs font-cinzel font-semibold tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          Ceremony Information
        </div>
        <h3 className="font-playfair text-2xl sm:text-3xl text-[#2A2521] font-semibold">
          Engagement Ceremony Details
        </h3>
        <p className="font-serif italic text-base text-[#6A6059] mt-1">
          {engagementConfig.couple.groom.name} &amp; {engagementConfig.couple.bride.name}
        </p>
      </div>

      {/* Main Ornate Event Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
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

        {/* Event Header */}
        <div className="space-y-1 pb-5 border-b border-gold-300/40">
          <span className="font-cinzel text-xs tracking-[0.25em] uppercase text-gold-600 font-semibold">
            {engagementConfig.event.subtitle}
          </span>
          <h4 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#8C6514] tracking-wide">
            {engagementConfig.event.title}
          </h4>
        </div>

        {/* Key Event Details Grid */}
        <div className="py-6 space-y-5 text-left max-w-md mx-auto">
          {/* Date */}
          <div className="flex items-start gap-4 p-3.5 rounded-xl bg-white/70 border border-gold-200/70 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center text-gold-600 shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <p className="font-cinzel text-xs uppercase tracking-wider text-gold-700 font-semibold">
                Event Date
              </p>
              <p className="font-playfair text-lg text-[#2A2521] font-semibold">
                {engagementConfig.event.date}
              </p>
            </div>
          </div>

          {/* Time (Editable - indicates if not yet announced) */}
          <div className="flex items-start gap-4 p-3.5 rounded-xl bg-white/70 border border-gold-200/70 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center text-gold-600 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="font-cinzel text-xs uppercase tracking-wider text-gold-700 font-semibold">
                Ceremony Timing
              </p>
              {engagementConfig.event.time ? (
                <p className="font-playfair text-lg text-[#2A2521] font-semibold">
                  {engagementConfig.event.time}
                </p>
              ) : (
                <div className="space-y-0.5">
                  <p className="font-serif italic text-base text-[#2A2521]">
                    To be announced soon
                  </p>
                  <p className="font-sans text-[11px] text-[#7D736A]">
                    (Will be updated once confirmed by families)
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Venue */}
          <div className="flex items-start gap-4 p-3.5 rounded-xl bg-white/70 border border-gold-200/70 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center text-gold-600 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="font-cinzel text-xs uppercase tracking-wider text-gold-700 font-semibold">
                Ceremony Venue
              </p>
              <p className="font-playfair text-lg text-[#2A2521] font-semibold">
                {engagementConfig.venue.name}
              </p>
              <p className="font-sans text-xs text-[#6A6059] mt-0.5">
                {engagementConfig.venue.city}, {engagementConfig.venue.state}, {engagementConfig.venue.country}
              </p>
            </div>
          </div>

          {/* Dress Code (Conditional, disabled by default) */}
          {engagementConfig.dressCode?.enabled && (
            <div className="flex items-start gap-4 p-3.5 rounded-xl bg-white/70 border border-gold-200/70 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-blush-100 flex items-center justify-center text-blush-500 shrink-0">
                <Shirt className="w-5 h-5" />
              </div>
              <div>
                <p className="font-cinzel text-xs uppercase tracking-wider text-gold-700 font-semibold">
                  {engagementConfig.dressCode.title || "Dress Code"}
                </p>
                <p className="font-serif text-base text-[#2A2521]">
                  {engagementConfig.dressCode.theme}
                </p>
                {engagementConfig.dressCode.description && (
                  <p className="font-sans text-xs text-[#6A6059] mt-0.5">
                    {engagementConfig.dressCode.description}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Reception Details (Conditional, disabled by default) */}
          {engagementConfig.reception?.enabled && (
            <div className="flex items-start gap-4 p-3.5 rounded-xl bg-white/70 border border-gold-200/70 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center text-sage-600 shrink-0">
                <Wine className="w-5 h-5" />
              </div>
              <div>
                <p className="font-cinzel text-xs uppercase tracking-wider text-gold-700 font-semibold">
                  {engagementConfig.reception.title || "Reception"}
                </p>
                <p className="font-serif text-base text-[#2A2521]">
                  {engagementConfig.reception.venue || engagementConfig.venue.name}
                </p>
                {engagementConfig.reception.time && (
                  <p className="font-sans text-xs text-[#6A6059] mt-0.5">
                    {engagementConfig.reception.time}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Required Invitation Welcome Message */}
        <div className="pt-5 border-t border-gold-300/40">
          <p className="font-serif italic text-base sm:text-lg text-[#2A2521] leading-relaxed">
            &ldquo;We warmly welcome you to share in our happiness and bless us as we begin this beautiful new chapter together.&rdquo;
          </p>
        </div>
      </motion.div>
    </section>
  );
};
