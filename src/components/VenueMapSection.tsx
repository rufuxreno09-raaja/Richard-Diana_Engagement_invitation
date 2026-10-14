"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, Copy, Check, ExternalLink } from "lucide-react";
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
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-300 text-xs font-cinzel font-semibold tracking-wider mb-2">
          <MapPin className="w-3.5 h-3.5 text-gold-400" />
          Location &amp; Directions
        </div>
        <h3 className="font-playfair text-2xl sm:text-3xl text-cream-100 font-semibold tracking-wide">
          Venue &amp; Destination
        </h3>
        <p className="font-serif italic text-base text-gold-200/70 mt-1">
          {engagementConfig.venue.city}, {engagementConfig.venue.state}
        </p>
      </div>

      {/* Venue Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative p-6 sm:p-8 rounded-3xl bg-midnight-800/85 backdrop-blur-xl border border-gold-400/40 shadow-[0_10px_35px_rgba(0,0,0,0.6)] text-center overflow-hidden"
      >
        {/* Glow backdrop */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-40 h-40 bg-gold-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Decorative divider */}
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-4" />

        <h4 className="font-playfair text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-100 to-gold-400 mb-2">
          {engagementConfig.venue.name}
        </h4>

        <p className="font-sans text-sm sm:text-base text-cream-100/90 leading-relaxed max-w-sm mx-auto">
          {engagementConfig.venue.fullAddress}
        </p>

        {/* Action Buttons: Get Directions & Copy Address */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 relative z-10">
          {/* Real Google Maps Search Link */}
          <a
            href={engagementConfig.venue.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="get-directions-btn"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-midnight-950 font-cinzel text-xs font-bold tracking-widest uppercase shadow-gold hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 border border-gold-300"
          >
            <Navigation className="w-4 h-4 text-midnight-950" />
            <span>Get Directions</span>
            <ExternalLink className="w-3 h-3 text-midnight-950" />
          </a>

          {/* Copy Address */}
          <button
            onClick={handleCopyAddress}
            id="copy-address-btn"
            className="w-full sm:w-auto px-5 py-3 rounded-full bg-midnight-900/80 border border-gold-400/40 hover:bg-gold-500/10 text-gold-300 font-cinzel text-xs font-semibold tracking-wider transition-all flex items-center justify-center gap-2 active:scale-95 shadow-sm"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300">Address Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-gold-400" />
                <span>Copy Address</span>
              </>
            )}
          </button>
        </div>

        {/* Helpful Travel Note */}
        <p className="font-sans text-[11px] text-cream-200/50 mt-5 pt-4 border-t border-gold-400/20">
          The venue is conveniently situated in Thiruvannamalai with ample parking and accessibility.
        </p>
      </motion.div>
    </section>
  );
};
