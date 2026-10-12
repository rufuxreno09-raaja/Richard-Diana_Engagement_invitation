"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, Copy, Check, ExternalLink } from "lucide-react";
import Image from "next/image";
import { engagementConfig } from "@/config/engagement";

export const VenueMapSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(engagementConfig.venue.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative py-12 px-4 sm:px-6 w-full max-w-xl mx-auto text-center">
      {/* Header */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage-100 border border-sage-200 text-sage-600 text-xs font-cinzel font-semibold tracking-wider mb-2">
          <MapPin className="w-3.5 h-3.5" />
          Location &amp; Directions
        </div>
        <h3 className="font-playfair text-2xl sm:text-3xl text-[#2A2521] font-semibold">
          Venue &amp; Destination
        </h3>
        <p className="font-serif italic text-base text-[#6A6059] mt-1">
          {engagementConfig.venue.city}, {engagementConfig.venue.state}
        </p>
      </div>

      {/* Venue Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative p-6 sm:p-8 rounded-3xl glass-card border-2 border-gold-400/50 shadow-soft text-center"
      >
        {/* Subtle decorative gold line */}
        <div className="w-16 h-1 bg-gold-400 mx-auto rounded-full mb-4 opacity-75" />

        <h4 className="font-playfair text-xl sm:text-2xl font-bold text-[#8C6514] mb-2">
          {engagementConfig.venue.name}
        </h4>

        <p className="font-sans text-sm sm:text-base text-[#2A2521] leading-relaxed max-w-sm mx-auto">
          {engagementConfig.venue.fullAddress}
        </p>

        {/* Action Buttons: Get Directions & Copy Address */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          {/* Real Google Maps Search Link */}
          <a
            href={engagementConfig.venue.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="get-directions-btn"
            className="w-full sm:w-auto px-6 py-3 rounded-full gold-gradient-bg text-[#2A2521] font-cinzel text-xs font-bold tracking-widest uppercase shadow-md hover:shadow-gold hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 border border-gold-300"
          >
            <Navigation className="w-4 h-4 text-[#8C6514]" />
            <span>Get Directions</span>
            <ExternalLink className="w-3 h-3 text-[#8C6514]" />
          </a>

          {/* Copy Address */}
          <button
            onClick={handleCopyAddress}
            id="copy-address-btn"
            className="w-full sm:w-auto px-5 py-3 rounded-full bg-white/80 border border-gold-300 hover:bg-gold-50 text-gold-700 font-cinzel text-xs font-semibold tracking-wider transition-all flex items-center justify-center gap-2 active:scale-95 shadow-sm"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700">Address Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-gold-500" />
                <span>Copy Address</span>
              </>
            )}
          </button>
        </div>

        {/* Helpful Travel Note */}
        <p className="font-sans text-[11px] text-[#7D736A] mt-5 pt-4 border-t border-gold-200/50">
          The venue is conveniently situated in Thiruvannamalai with parking and accessible access.
        </p>
      </motion.div>
    </section>
  );
};
