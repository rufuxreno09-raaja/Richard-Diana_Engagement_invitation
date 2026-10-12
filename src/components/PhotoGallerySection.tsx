"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
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
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blush-100 border border-blush-200 text-blush-500 text-xs font-cinzel font-semibold tracking-wider mb-2">
          <Camera className="w-3.5 h-3.5" />
          Photo Gallery
        </div>
        <h3 className="font-playfair text-2xl sm:text-3xl text-[#2A2521] font-semibold">
          {engagementConfig.gallery.title}
        </h3>
        <p className="font-serif italic text-base text-[#6A6059] mt-1">
          {engagementConfig.gallery.subtitle}
        </p>
      </div>

      {/* Responsive Gallery Grid */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {images.map((img, idx) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            onClick={() => setSelectedIdx(idx)}
            className="group relative cursor-pointer aspect-[4/5] rounded-2xl p-1.5 glass-card border border-gold-300/50 shadow-soft hover:shadow-gold transition-all duration-300 overflow-hidden flex flex-col items-center justify-center bg-white/90"
          >
            {/* Inner framed container */}
            <div className="relative w-full h-full rounded-xl overflow-hidden border border-gold-200/50">
              <Image
                src={img.url}
                alt={img.caption}
                fill
                className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover overlay hint */}
              <div className="absolute inset-0 bg-gold-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2.5">
                <span className="w-full text-center font-cinzel text-[10px] text-white font-semibold tracking-wider uppercase bg-black/50 py-1 rounded backdrop-blur-sm">
                  View Fullscreen
                </span>
              </div>
            </div>

            {/* Caption */}
            <p className="font-serif italic text-xs text-[#6A6059] mt-1.5 line-clamp-1">
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
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedIdx(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedIdx(null)}
              aria-label="Close Lightbox"
              className="absolute top-5 right-5 z-50 w-11 h-11 rounded-full bg-white/20 text-white hover:bg-white/30 flex items-center justify-center transition-colors"
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
              className="absolute left-3 sm:left-6 z-50 w-11 h-11 rounded-full bg-white/20 text-white hover:bg-white/30 flex items-center justify-center transition-colors"
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
              className="absolute right-3 sm:right-6 z-50 w-11 h-11 rounded-full bg-white/20 text-white hover:bg-white/30 flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Content Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-sm sm:max-w-md w-full aspect-[4/5] rounded-3xl p-3 bg-white/95 border-2 border-gold-400 shadow-2xl flex flex-col items-center justify-between overflow-hidden"
            >
              <div className="relative w-full h-[85%] rounded-2xl overflow-hidden bg-ivory-100 flex items-center justify-center border border-gold-200">
                <Image
                  src={images[selectedIdx].url}
                  alt={images[selectedIdx].caption}
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>

              {/* Caption Bar */}
              <div className="w-full text-center py-2">
                <p className="font-playfair text-base font-semibold text-[#2A2521]">
                  {images[selectedIdx].caption}
                </p>
                <p className="font-cinzel text-[11px] text-gold-600 tracking-widest uppercase">
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
