"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeartHandshake, Sparkles, Camera, Utensils, Calendar } from "lucide-react";
import { engagementConfig } from "@/config/engagement";

export const ScheduleSection: React.FC = () => {
  if (!engagementConfig.schedule.enabled) {
    return null;
  }

  const getIcon = (name?: string) => {
    switch (name) {
      case "HeartHandshake":
        return <HeartHandshake className="w-5 h-5 text-gold-400" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-gold-400" />;
      case "Camera":
        return <Camera className="w-5 h-5 text-gold-400" />;
      case "Utensils":
        return <Utensils className="w-5 h-5 text-gold-400" />;
      default:
        return <Calendar className="w-5 h-5 text-gold-400" />;
    }
  };

  return (
    <section className="relative py-12 px-4 sm:px-6 w-full max-w-xl mx-auto text-center">
      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-300 text-xs font-cinzel font-semibold tracking-wider mb-2">
          <Calendar className="w-3.5 h-3.5 text-gold-400" />
          Event Itinerary
        </div>
        <h3 className="font-playfair text-2xl sm:text-3xl text-cream-100 font-semibold">
          Order of Service &amp; Schedule
        </h3>
        {engagementConfig.schedule.note && (
          <p className="font-serif italic text-sm text-gold-200/70 mt-1 max-w-sm mx-auto">
            {engagementConfig.schedule.note}
          </p>
        )}
      </div>

      {/* Timeline items */}
      <div className="relative border-l-2 border-gold-400/30 ml-6 sm:ml-8 space-y-6 text-left">
        {engagementConfig.schedule.items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="relative pl-6 sm:pl-8 group"
          >
            {/* Timeline icon node */}
            <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-midnight-900 border-2 border-gold-400 shadow-gold flex items-center justify-center">
              {getIcon(item.iconName)}
            </div>

            {/* Content card */}
            <div className="p-4 rounded-2xl bg-midnight-800/80 backdrop-blur-xl border border-gold-400/30 shadow-md hover:border-gold-400/60 transition-colors">
              <span className="font-cinzel text-xs font-bold text-gold-400 tracking-wider uppercase block">
                {item.time}
              </span>
              <h4 className="font-playfair text-lg font-semibold text-cream-100 mt-0.5">
                {item.title}
              </h4>
              <p className="font-sans text-xs sm:text-sm text-cream-200/70 mt-1 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
