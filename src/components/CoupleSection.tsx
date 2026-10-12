"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Sparkles } from "lucide-react";
import { engagementConfig } from "@/config/engagement";

export const CoupleSection: React.FC = () => {
  return (
    <section className="relative py-12 px-4 sm:px-6 w-full max-w-xl mx-auto text-center">
      {/* Header Badge */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blush-100 border border-blush-200 text-blush-500 text-xs font-cinzel font-semibold tracking-wider mb-2">
          <Heart className="w-3.5 h-3.5 fill-blush-400" />
          The Happy Couple
        </div>
        <h3 className="font-playfair text-2xl sm:text-3xl text-[#2A2521] font-semibold">
          Richard Rex &amp; Diana Joe
        </h3>
        <p className="font-serif italic text-base text-[#6A6059] mt-1">
          Two souls, one sacred journey blessed by God
        </p>
      </div>

      {/* Frame Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mx-auto max-w-[340px] p-6 rounded-3xl glass-card border-2 border-gold-400/50 shadow-soft flex flex-col items-center"
      >
        {/* Corner floral elements */}
        <div className="absolute top-2 left-2 w-8 h-8 pointer-events-none opacity-80">
          <Image src="/images/floral-corner.svg" alt="" width={32} height={32} />
        </div>
        <div className="absolute top-2 right-2 w-8 h-8 pointer-events-none opacity-80 rotate-90">
          <Image src="/images/floral-corner.svg" alt="" width={32} height={32} />
        </div>
        <div className="absolute bottom-2 left-2 w-8 h-8 pointer-events-none opacity-80 -rotate-90">
          <Image src="/images/floral-corner.svg" alt="" width={32} height={32} />
        </div>
        <div className="absolute bottom-2 right-2 w-8 h-8 pointer-events-none opacity-80 rotate-180">
          <Image src="/images/floral-corner.svg" alt="" width={32} height={32} />
        </div>

        {/* Elegant Arch / Oval Frame for Photograph or Emblem */}
        <div className="relative w-56 h-72 sm:w-64 sm:h-80 rounded-t-full rounded-b-3xl border-2 border-gold-400 p-2 bg-[#FFFDF8] shadow-inner overflow-hidden flex items-center justify-center">
          <div className="relative w-full h-full rounded-t-full rounded-b-2xl overflow-hidden bg-gradient-to-b from-blush-50 to-ivory-200 flex items-center justify-center">
            {engagementConfig.couple.photo ? (
              <Image
                src={engagementConfig.couple.photo}
                alt={engagementConfig.couple.photoPlaceholderAlt}
                fill
                className="object-contain p-4 transition-transform duration-700 hover:scale-105"
              />
            ) : (
              <div className="text-center p-4">
                <Sparkles className="w-8 h-8 text-gold-500 mx-auto mb-2" />
                <p className="font-cinzel text-xs text-gold-700 tracking-wider">
                  Richard &amp; Diana
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Couple Profile Bios & Names */}
        <div className="mt-5 space-y-3 w-full">
          <div className="grid grid-cols-2 gap-3 text-center divide-x divide-gold-300/40">
            <div className="px-2">
              <span className="font-cinzel text-[11px] uppercase tracking-widest text-gold-600 font-semibold block">
                The Groom
              </span>
              <h4 className="font-script text-2xl sm:text-3xl text-[#2A2521] mt-0.5">
                {engagementConfig.couple.groom.name}
              </h4>
            </div>

            <div className="px-2">
              <span className="font-cinzel text-[11px] uppercase tracking-widest text-gold-600 font-semibold block">
                The Bride
              </span>
              <h4 className="font-script text-2xl sm:text-3xl text-[#2A2521] mt-0.5">
                {engagementConfig.couple.bride.name}
              </h4>
            </div>
          </div>

          {/* Configuration Note for Organizer */}
          <p className="font-sans text-[11px] text-[#7D736A] italic pt-2 border-t border-gold-200/50">
            Photo can be updated anytime in <span className="font-mono text-gold-700">src/config/engagement.ts</span>
          </p>
        </div>
      </motion.div>
    </section>
  );
};
