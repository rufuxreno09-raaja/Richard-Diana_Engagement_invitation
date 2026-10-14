"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, X, ChevronLeft, ChevronRight, Sparkles, Heart } from "lucide-react";
import Image from "next/image";
import { engagementConfig } from "@/config/engagement";

export const PhotoGallerySection: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  if (!engagementConfig.gallery.enabled || engagementConfig.gallery.images.length === 0) {
    return null;
  }

  const images = engagementConfig.gallery.images;

  const handlePrev = useCallback(() => {
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => ((prev as number) > 0 ? (prev as number) - 1 : images.length - 1));
  }, [selectedIdx, images.length]);

  const handleNext = useCallback(() => {
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => ((prev as number) < images.length - 1 ? (prev as number) + 1 : 0));
  }, [selectedIdx, images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === "Escape") setSelectedIdx(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIdx, handlePrev, handleNext]);

  return (
    <section className="relative py-12 px-4 sm:px-6 w-full max-w-xl mx-auto text-center">
      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-300 text-xs font-cinzel font-semibold tracking-wider mb-2">
          <Camera className="w-3.5 h-3.5 text-gold-400" />
          Captured Moments
        </div>
        <h3 className="font-playfair text-2xl sm:text-3xl text-cream-100 font-semibold tracking-wide">
          {engagementConfig.gallery.title}
        </h3>
        <p className="font-serif italic text-base text-gold-200/70 mt-1">
          {engagementConfig.gallery.subtitle}
        </p>
      </div>

      {/* Featured Main Couple Portrait Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        onClick={() => setSelectedIdx(0)}
        className="group relative cursor-pointer mb-6 rounded-3xl p-2 bg-midnight-800/80 backdrop-blur-xl border-2 border-gold-400/50 shadow-gold overflow-hidden"
      >
        <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full rounded-2xl overflow-hidden">
          <Image
            src="/images/couple-photo.jpg"
            alt="Richard Rex & Diana Jose"
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight-950/90 via-midnight-950/20 to-transparent" />
          
          {/* Badge & caption */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-left">
            <div>
              <span className="font-cinzel text-[10px] tracking-widest uppercase text-gold-300 font-bold bg-midnight-900/80 px-2.5 py-1 rounded-full border border-gold-400/40">
                Official Portrait
              </span>
              <h4 className="font-script text-2xl sm:text-3xl text-gold-100 mt-1 drop-shadow-md">
                Richard Rex &amp; Diana Jose
              </h4>
            </div>
            <div className="w-9 h-9 rounded-full bg-gold-500/20 border border-gold-400/60 backdrop-blur-md flex items-center justify-center text-gold-300 group-hover:scale-110 transition-transform">
              <Sparkles className="w-4 h-4" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {images.slice(1).map((img, idx) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: (idx + 1) * 0.1, duration: 0.6 }}
            onClick={() => setSelectedIdx(idx + 1)}
            className="group relative cursor-pointer aspect-[4/5] rounded-2xl p-1.5 bg-midnight-800/80 backdrop-blur-xl border border-gold-400/30 shadow-md hover:border-gold-400 hover:shadow-gold transition-all duration-300 overflow-hidden flex flex-col items-center justify-center"
          >
            {/* Inner framed container */}
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-midnight-900/90 border border-gold-400/20">
              <Image
                src={img.url}
                alt={img.caption}
                fill
                className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover overlay hint */}
              <div className="absolute inset-0 bg-midnight-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2.5">
                <span className="w-full text-center font-cinzel text-[10px] text-gold-200 font-semibold tracking-wider uppercase bg-midnight-900/80 py-1 rounded border border-gold-400/30 backdrop-blur-sm">
                  View Fullscreen
                </span>
              </div>
            </div>

            {/* Caption */}
            <p className="font-serif italic text-xs text-gold-200/80 mt-1.5 line-clamp-1">
              {img.caption}
            </p>
          </motion.div>
        ))}
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-midnight-950/90 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedIdx(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedIdx(null)}
              aria-label="Close Lightbox"
              className="absolute top-5 right-5 z-50 w-11 h-11 rounded-full bg-midnight-800/80 border border-gold-400/40 text-gold-300 hover:bg-gold-500/20 flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              aria-label="Previous Image"
              className="absolute left-3 sm:left-6 z-50 w-11 h-11 rounded-full bg-midnight-800/80 border border-gold-400/40 text-gold-300 hover:bg-gold-500/20 flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              aria-label="Next Image"
              className="absolute right-3 sm:right-6 z-50 w-11 h-11 rounded-full bg-midnight-800/80 border border-gold-400/40 text-gold-300 hover:bg-gold-500/20 flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Content Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-sm sm:max-w-md w-full aspect-[4/5] rounded-3xl p-3 bg-midnight-900 border-2 border-gold-400 shadow-2xl flex flex-col items-center justify-between overflow-hidden"
            >
              <div className="relative w-full h-[85%] rounded-2xl overflow-hidden bg-midnight-950 flex items-center justify-center border border-gold-400/30">
                <Image
                  src={images[selectedIdx].url}
                  alt={images[selectedIdx].caption}
                  fill
                  className="object-contain p-2"
                  priority
                />
              </div>

              {/* Caption Bar */}
              <div className="w-full text-center py-2">
                <p className="font-playfair text-base font-semibold text-cream-100">
                  {images[selectedIdx].caption}
                </p>
                <p className="font-cinzel text-[11px] text-gold-300 tracking-widest uppercase">
                  {selectedIdx + 1} of {images.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
