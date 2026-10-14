"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, Calendar, HeartHandshake, CheckCircle } from "lucide-react";
import { engagementConfig } from "@/config/engagement";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  status: "upcoming" | "today" | "passed";
}

export const CountdownSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    status: "upcoming",
  });

  useEffect(() => {
    setMounted(true);

    const calculateTime = (): TimeLeft => {
      const targetTime = new Date(engagementConfig.event.isoDateTarget).getTime();
      const now = Date.now();
      const difference = targetTime - now;
      const oneDayMs = 24 * 60 * 60 * 1000;

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
          status: "upcoming",
        };
      } else if (difference <= 0 && Math.abs(difference) <= oneDayMs) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0, status: "today" };
      } else {
        return { days: 0, hours: 0, minutes: 0, seconds: 0, status: "passed" };
      }
    };

    setTimeLeft(calculateTime());
    const timer = setInterval(() => setTimeLeft(calculateTime()), 1000);
    return () => clearInterval(timer);
  }, []);

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
          <Clock className="w-3.5 h-3.5" />
          The Blessed Countdown
        </motion.div>
        <h3 className="font-playfair text-2xl sm:text-3xl text-cream font-semibold">
          Counting Down to Our Special Day
        </h3>
        <p className="font-serif italic text-sm text-gold-300/60 mt-1.5">
          {engagementConfig.event.date}
        </p>
      </div>

      {/* Countdown Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative p-6 sm:p-8 rounded-3xl glass-card gradient-border shadow-card overflow-hidden"
      >
        {/* Ambient glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-gold-400/[0.03] to-transparent pointer-events-none" />

        {!mounted ? (
          <div className="grid grid-cols-4 gap-2 sm:gap-4 relative z-10">
            {["Days", "Hours", "Minutes", "Seconds"].map((label, idx) => (
              <div key={idx} className="flex flex-col items-center p-3 rounded-2xl bg-gold-400/5 border border-gold-400/10">
                <span className="font-cinzel text-2xl sm:text-3xl font-bold text-gold-400">--</span>
                <span className="font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-gold-300/50 mt-1.5">
                  {label}
                </span>
              </div>
            ))}
          </div>
        ) : timeLeft.status === "upcoming" ? (
          <div className="grid grid-cols-4 gap-2.5 sm:gap-4 relative z-10">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.12, duration: 0.5 }}
                className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl bg-gold-400/5 border border-gold-400/15 hover:border-gold-400/30 hover:shadow-gold-soft transition-all duration-500 group"
              >
                <span className="font-cinzel text-2xl sm:text-4xl font-bold gold-gradient-text tabular-nums group-hover:scale-110 transition-transform duration-300">
                  {String(item.value).padStart(2, "0")}
                </span>
                <span className="font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-gold-300/50 font-medium mt-1.5">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        ) : timeLeft.status === "today" ? (
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="py-6 px-2 space-y-3 text-center relative z-10"
          >
            <div className="w-14 h-14 rounded-full bg-gold-400/10 border border-gold-400/30 mx-auto flex items-center justify-center glow-pulse mb-3">
              <CheckCircle className="w-7 h-7 text-gold-400" />
            </div>
            <h4 className="font-playfair text-xl sm:text-2xl text-cream font-semibold">
              Today is our special day!
            </h4>
            <p className="font-serif italic text-sm text-gold-300/60">
              We look forward to celebrating with you.
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="py-6 px-2 space-y-3 text-center relative z-10"
          >
            <div className="w-14 h-14 rounded-full bg-sage-400/10 border border-sage-400/30 mx-auto flex items-center justify-center mb-3">
              <HeartHandshake className="w-7 h-7 text-sage-400" />
            </div>
            <h4 className="font-playfair text-xl text-cream font-semibold">
              A Blessed Engagement Celebration
            </h4>
            <p className="font-serif italic text-sm text-gold-300/60">
              Thank you for keeping us in your prayers!
            </p>
          </motion.div>
        )}

        {/* Bottom date note */}
        <div className="mt-5 pt-4 border-t border-gold-400/10 flex items-center justify-center gap-2 text-[11px] text-gold-400/40 font-sans relative z-10">
          <Calendar className="w-3.5 h-3.5" />
          <span>Save the Date: Sunday, Nov 29, 2026</span>
        </div>
      </motion.div>
    </section>
  );
};
