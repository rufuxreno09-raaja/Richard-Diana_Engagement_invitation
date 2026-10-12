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

      // 24 hours in ms
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
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          status: "today",
        };
      } else {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          status: "passed",
        };
      }
    };

    // Calculate immediately on mount
    setTimeLeft(calculateTime());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-12 px-4 sm:px-6 w-full max-w-xl mx-auto text-center">
      {/* Header */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-100 border border-gold-300 text-gold-700 text-xs font-cinzel font-semibold tracking-wider mb-2">
          <Clock className="w-3.5 h-3.5" />
          The Blessed Countdown
        </div>
        <h3 className="font-playfair text-2xl sm:text-3xl text-[#2A2521] font-semibold">
          Counting Down to Our Special Day
        </h3>
        <p className="font-serif italic text-sm text-[#6A6059] mt-1">
          {engagementConfig.event.date}
        </p>
        {/* Clear Midnight / Timezone Note */}
        {!engagementConfig.event.time && (
          <p className="font-sans text-[11px] text-[#8C6514] mt-1 bg-gold-50/60 py-0.5 px-3 rounded-full inline-block border border-gold-200">
            Target: 00:00 Midnight IST ({engagementConfig.event.timezone})
          </p>
        )}
      </div>

      {/* Countdown Card */}
      <div className="relative p-6 sm:p-8 rounded-2xl glass-card border border-gold-300/50 shadow-soft">
        {!mounted ? (
          // Server / Pre-mount placeholder
          <div className="grid grid-cols-4 gap-2 sm:gap-4">
            {["Days", "Hours", "Minutes", "Seconds"].map((label, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center p-3 rounded-xl bg-white/70 border border-gold-200"
              >
                <span className="font-cinzel text-2xl sm:text-3xl font-bold text-gold-600">--</span>
                <span className="font-sans text-[10px] sm:text-xs uppercase tracking-wider text-[#6A6059] mt-1">
                  {label}
                </span>
              </div>
            ))}
          </div>
        ) : timeLeft.status === "upcoming" ? (
          <div className="grid grid-cols-4 gap-2.5 sm:gap-4">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="flex flex-col items-center justify-center p-2.5 sm:p-3.5 rounded-xl bg-white/80 border border-gold-300/60 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="font-cinzel text-2xl sm:text-4xl font-bold text-[#8C6514] tabular-nums">
                  {String(item.value).padStart(2, "0")}
                </span>
                <span className="font-sans text-[10px] sm:text-xs uppercase tracking-widest text-[#6A6059] font-medium mt-1">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        ) : timeLeft.status === "today" ? (
          // Day of Event Message
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="py-4 px-2 space-y-2 text-center"
          >
            <div className="w-12 h-12 rounded-full bg-gold-100 border border-gold-300 mx-auto flex items-center justify-center text-gold-600 mb-2">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h4 className="font-playfair text-xl sm:text-2xl text-[#2A2521] font-semibold">
              Today is our special day! We look forward to celebrating with you.
            </h4>
            <p className="font-serif italic text-sm text-[#6A6059]">
              Thank you for blessing Richard Rex &amp; Diana Joe on their engagement day.
            </p>
          </motion.div>
        ) : (
          // Post-event Message
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="py-4 px-2 space-y-2 text-center"
          >
            <div className="w-12 h-12 rounded-full bg-sage-100 border border-sage-300 mx-auto flex items-center justify-center text-sage-600 mb-2">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h4 className="font-playfair text-xl text-[#2A2521] font-semibold">
              A Blessed Engagement Celebration
            </h4>
            <p className="font-serif italic text-sm text-[#6A6059]">
              Our engagement ceremony was filled with love, laughter, and prayerful blessings.
              Thank you for keeping us in your prayers!
            </p>
          </motion.div>
        )}

        {/* Bottom subtle note */}
        <div className="mt-4 pt-3 border-t border-gold-200/50 flex items-center justify-center gap-2 text-[11px] text-[#7D736A] font-sans">
          <Calendar className="w-3.5 h-3.5 text-gold-500" />
          <span>Save the Date: Sunday, Nov 29, 2026</span>
        </div>
      </div>
    </section>
  );
};
