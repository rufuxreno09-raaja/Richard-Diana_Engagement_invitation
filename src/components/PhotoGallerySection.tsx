"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, X, ChevronLeft, ChevronRight, Sparkles, Heart } from "lucide-react";
import Image from "next/image";
import { engagementConfig } from "@/config/engagement";

// Unique frame styles for each photo
const frameStyles = [
  {
    // Style 1: Featured hero with gold ornate border
    containerClass:
      "group relative cursor-pointer mb-6 rounded-3xl p-[3px] overflow-hidden",
    containerStyle: {
      background:
        "linear-gradient(135deg, rgba(212,175,55,0.6), rgba(232,160,181,0.4), rgba(212,175,55,0.6))",
      boxShadow: "0 15px 45px -10px rgba(212, 175, 55, 0.3), 0 0 60px rgba(212, 175, 55, 0.08)",
    },
    innerClass: "rounded-[21px] overflow-hidden bg-deep",
    imageAspect: "aspect-[4/3]",
    imageClass: "object-cover object-center",
    captionPos: "bottom-4 left-4 right-4",
    animation: { initial: { opacity: 0, scale: 0.92, y: 20 }, whileInView: { opacity: 1, scale: 1, y: 0 } },
  },
  {
    // Style 2: Elegant arch/portrait with floral shadow
    containerClass:
      "group relative cursor-pointer rounded-t-full rounded-b-3xl overflow-hidden",
    containerStyle: {
      border: "2px solid rgba(232, 160, 181, 0.35)",
      boxShadow:
        "0 20px 50px -15px rgba(232, 160, 181, 0.2), 0 0 40px rgba(232, 160, 181, 0.06), inset 0 0 30px rgba(232,160,181,0.05)",
    },
    innerClass: "",
    imageAspect: "aspect-[3/4]",
    imageClass: "object-cover object-top",
    captionPos: "bottom-3 left-3 right-3",
    animation: { initial: { opacity: 0, x: -40, rotate: -2 }, whileInView: { opacity: 1, x: 0, rotate: 0 } },
  },
  {
    // Style 3: Rounded soft shadow with champagne tint
    containerClass:
      "group relative cursor-pointer rounded-[2rem] overflow-hidden",
    containerStyle: {
      border: "2px solid rgba(212, 175, 55, 0.25)",
      boxShadow:
        "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(212, 175, 55, 0.1), inset 0 1px 0 rgba(255,255,255,0.1)",
    },
    innerClass: "",
    imageAspect: "aspect-[3/4]",
    imageClass: "object-cover object-center",
    captionPos: "bottom-3 left-3 right-3",
    animation: { initial: { opacity: 0, x: 40, rotate: 2 }, whileInView: { opacity: 1, x: 0, rotate: 0 } },
  },
  {
    // Style 4: Circular bloom frame
    containerClass:
      "group relative cursor-pointer rounded-full overflow-hidden mx-auto",
    containerStyle: {
      border: "3px solid rgba(232, 160, 181, 0.3)",
      boxShadow: "0 0 50px rgba(232, 160, 181, 0.15), 0 0 80px rgba(212, 175, 55, 0.08)",
      width: "280px",
      height: "280px",
    },
    innerClass: "",
    imageAspect: "",
    imageClass: "object-cover object-center",
    captionPos: "bottom-3 left-3 right-3",
    animation: { initial: { opacity: 0, scale: 0.7, rotate: -10 }, whileInView: { opacity: 1, scale: 1, rotate: 0 } },
  },
  {
    // Style 5: Tilted polaroid with gold accent
    containerClass:
      "group relative cursor-pointer bg-gradient-to-b from-[#1a1830] to-[#0f1629] rounded-xl overflow-hidden p-3 pb-12",
    containerStyle: {
      border: "1px solid rgba(212, 175, 55, 0.2)",
      transform: "rotate(-2deg)",
      boxShadow: "0 20px 60px -15px rgba(0,0,0,0.5), 0 0 30px rgba(212,175,55,0.06)",
    },
    innerClass: "rounded-lg overflow-hidden",
    imageAspect: "aspect-[4/3]",
    imageClass: "object-cover object-center",
    captionPos: "-bottom-10 left-0 right-0",
    animation: { initial: { opacity: 0, y: 30, rotate: 5 }, whileInView: { opacity: 1, y: 0, rotate: -2 } },
  },
];

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
    <section className="relative py-14 px-4 sm:px-6 w-full max-w-xl mx-auto text-center">
      {/* Header */}
      <div className="mb-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-cinzel font-semibold tracking-wider mb-3"
          style={{
            background: "rgba(232, 160, 181, 0.08)",
            border: "1px solid rgba(232, 160, 181, 0.25)",
            color: "rgba(232, 160, 181, 0.9)",
          }}
        >
          <Camera className="w-3.5 h-3.5" />
          Our Beautiful Moments
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-playfair text-2xl sm:text-3xl text-cream font-semibold tracking-wide"
        >
          {engagementConfig.gallery.title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-serif italic text-base mt-1.5"
          style={{ color: "rgba(232, 160, 181, 0.6)" }}
        >
          {engagementConfig.gallery.subtitle}
        </motion.p>

        {/* Floral divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex items-center justify-center gap-3 mt-4"
        >
          <span className="w-16 h-[1px]" style={{ background: "linear-gradient(90deg, transparent, rgba(232,160,181,0.3))" }} />
          <svg className="w-6 h-6 text-rose-300/30" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8 7 4 10 4 14c0 4 4 8 8 8s8-4 8-8c0-4-4-7-8-12z" />
          </svg>
          <span className="w-16 h-[1px]" style={{ background: "linear-gradient(90deg, rgba(232,160,181,0.3), transparent)" }} />
        </motion.div>
      </div>

      {/* Photo Gallery - Each with unique frame */}
      <div className="space-y-8">
        {images.map((img, idx) => {
          const style = frameStyles[idx % frameStyles.length];
          const isCircular = idx % frameStyles.length === 3;

          return (
            <motion.div
              key={img.id}
              initial={style.animation.initial}
              whileInView={style.animation.whileInView}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setSelectedIdx(idx)}
              className={style.containerClass}
              style={style.containerStyle}
            >
              {style.innerClass ? (
                <div className={style.innerClass}>
                  <div className={`relative w-full ${style.imageAspect} overflow-hidden`}>
                    <Image
                      src={img.url}
                      alt={img.caption}
                      fill
                      className={`${style.imageClass} transition-transform duration-700 group-hover:scale-105`}
                      sizes="(max-width: 480px) 100vw, 480px"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                    {/* Caption overlay */}
                    <div className={`absolute ${style.captionPos} text-left z-10`}>
                      {idx === 0 && (
                        <span className="font-cinzel text-[9px] tracking-widest uppercase font-bold px-2.5 py-1 rounded-full mb-1 inline-block"
                          style={{
                            background: "rgba(15,22,41,0.8)",
                            border: "1px solid rgba(212,175,55,0.4)",
                            color: "rgba(212,175,55,0.9)",
                          }}
                        >
                          ✦ Featured
                        </span>
                      )}
                      <h4 className="font-script text-xl sm:text-2xl text-white/90 mt-1 drop-shadow-md">
                        {img.caption}
                      </h4>
                      {img.category && (
                        <span className="font-sans text-[10px] text-gold-300/60 uppercase tracking-wider">{img.category}</span>
                      )}
                    </div>

                    {/* Hover sparkle */}
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: "rgba(212,175,55,0.2)", backdropFilter: "blur(8px)", border: "1px solid rgba(212,175,55,0.4)" }}
                    >
                      <Sparkles className="w-4 h-4 text-gold-300" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className={`relative w-full ${isCircular ? "h-full" : style.imageAspect} overflow-hidden`}>
                  <Image
                    src={img.url}
                    alt={img.caption}
                    fill
                    className={`${style.imageClass} transition-transform duration-700 group-hover:scale-110`}
                    sizes="(max-width: 480px) 100vw, 480px"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Caption */}
                  {!isCircular && (
                    <div className={`absolute ${style.captionPos} text-center z-10`}>
                      <h4 className="font-script text-lg sm:text-xl text-white/90 drop-shadow-md">
                        {img.caption}
                      </h4>
                    </div>
                  )}
                </div>
              )}

              {/* Caption for circular frame */}
              {isCircular && (
                <div className="absolute bottom-6 left-0 right-0 text-center z-10 pointer-events-none">
                  <span className="font-script text-sm text-white/90 px-3 py-1 rounded-full"
                    style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}>
                    {img.caption}
                  </span>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Polaroid-style caption for style 5 */}
      {images.length > 4 && (
        <div className="mt-2 text-center">
          <p className="font-serif italic text-sm text-gold-300/40">{images[4]?.caption}</p>
        </div>
      )}

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(12, 10, 26, 0.95)", backdropFilter: "blur(20px)" }}
            onClick={() => setSelectedIdx(null)}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedIdx(null)}
              aria-label="Close Lightbox"
              className="absolute top-5 right-5 z-50 w-11 h-11 rounded-full flex items-center justify-center transition-colors"
              style={{ background: "rgba(15,22,41,0.8)", border: "1px solid rgba(212,175,55,0.4)", color: "rgba(212,175,55,0.8)" }}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              aria-label="Previous"
              className="absolute left-3 sm:left-6 z-50 w-11 h-11 rounded-full flex items-center justify-center transition-colors"
              style={{ background: "rgba(15,22,41,0.8)", border: "1px solid rgba(212,175,55,0.4)", color: "rgba(212,175,55,0.8)" }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              aria-label="Next"
              className="absolute right-3 sm:right-6 z-50 w-11 h-11 rounded-full flex items-center justify-center transition-colors"
              style={{ background: "rgba(15,22,41,0.8)", border: "1px solid rgba(212,175,55,0.4)", color: "rgba(212,175,55,0.8)" }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full rounded-3xl overflow-hidden"
              style={{
                background: "rgba(15, 22, 41, 0.9)",
                border: "2px solid rgba(212, 175, 55, 0.5)",
                boxShadow: "0 25px 80px rgba(0,0,0,0.6), 0 0 40px rgba(212,175,55,0.15)",
              }}
            >
              <div className="relative w-full aspect-[3/4] sm:aspect-[4/5]">
                <Image
                  src={images[selectedIdx].url}
                  alt={images[selectedIdx].caption}
                  fill
                  className="object-contain p-2"
                  priority
                  sizes="(max-width: 640px) 100vw, 512px"
                />
              </div>
              {/* Caption bar */}
              <div className="w-full text-center py-3 px-4"
                style={{ borderTop: "1px solid rgba(212,175,55,0.15)" }}
              >
                <p className="font-playfair text-base font-semibold text-cream">
                  {images[selectedIdx].caption}
                </p>
                <div className="flex items-center justify-center gap-2 mt-1">
                  <Heart className="w-3 h-3 text-rose-300/60 fill-rose-300/30" />
                  <p className="font-cinzel text-[11px] tracking-widest uppercase" style={{ color: "rgba(212,175,55,0.5)" }}>
                    {selectedIdx + 1} of {images.length}
                  </p>
                  <Heart className="w-3 h-3 text-rose-300/60 fill-rose-300/30" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
