"use client";

import React, { useState } from "react";
import { CoverSection } from "@/components/CoverSection";
import { PetalBackground } from "@/components/PetalBackground";
import { FlowerAnimations } from "@/components/FlowerAnimations";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { MusicPlayer } from "@/components/MusicPlayer";
import { AnnouncementSection } from "@/components/AnnouncementSection";
import { ScratchCardSection } from "@/components/ScratchCardSection";
import { CountdownSection } from "@/components/CountdownSection";
import { CoupleSection } from "@/components/CoupleSection";
import { EventDetailsSection } from "@/components/EventDetailsSection";
import { ScheduleSection } from "@/components/ScheduleSection";
import { VenueMapSection } from "@/components/VenueMapSection";
import { PhotoGallerySection } from "@/components/PhotoGallerySection";
import { ClosingSection } from "@/components/ClosingSection";
import { BlessingsSection } from "@/components/BlessingsSection";
import { FloatingActions } from "@/components/FloatingActions";

export default function EngagementInvitationPage() {
  const [isCoverOpen, setIsCoverOpen] = useState(false);

  const handleOpenInvitation = () => {
    setIsCoverOpen(true);
    // Smooth scroll to top of content
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleReturnToCover = () => {
    setIsCoverOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-start overflow-x-hidden selection:bg-blush-200 selection:text-gold-700">
      {/* Scroll Progress Bar */}
      {isCoverOpen && <ScrollProgressBar />}

      {/* Ambient Falling Petals */}
      <PetalBackground />

      {/* Scroll-triggered Flower Animations */}
      {isCoverOpen && <FlowerAnimations />}

      {/* Floating Music Player */}
      <MusicPlayer autoStartOnInteraction={isCoverOpen} />

      {/* Opening Full-Screen Cover Card */}
      <CoverSection onOpenInvitation={handleOpenInvitation} isOpen={isCoverOpen} />

      {/* Main Digital Invitation Experience Container */}
      <div
        className={`w-full max-w-[480px] mx-auto min-h-screen px-3 sm:px-4 py-8 pb-28 flex flex-col items-center transition-opacity duration-1000 ${
          isCoverOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Section Divider - Floral */}
        <FloralDivider />

        {/* 1. Announcement Section */}
        <AnnouncementSection />

        <FloralDivider />

        {/* 2. Interactive Scratch-to-Reveal Card */}
        <ScratchCardSection />

        <FloralDivider />

        {/* 3. Live Engagement Countdown */}
        <CountdownSection />

        <FloralDivider />

        {/* 4. Couple Section */}
        <CoupleSection />

        <FloralDivider />

        {/* 5. Engagement Event Details */}
        <EventDetailsSection />

        <FloralDivider />

        {/* 6. Optional Event Timeline */}
        <ScheduleSection />

        {/* 7. Venue and Google Maps */}
        <VenueMapSection />

        <FloralDivider />

        {/* 8. Photo Gallery */}
        <PhotoGallerySection />

        <FloralDivider />

        {/* 9. Romantic Closing Section */}
        <ClosingSection />

        <FloralDivider />

        {/* 10. Final Blessings and Thank-You */}
        <BlessingsSection onReturnToCover={handleReturnToCover} />
      </div>

      {/* Floating Quick Action Bar (Visible after opening cover) */}
      {isCoverOpen && <FloatingActions />}
    </main>
  );
}

// Elegant floral section divider
function FloralDivider() {
  return (
    <div className="w-full flex items-center justify-center py-2 my-2 select-none pointer-events-none">
      <span
        className="w-16 sm:w-20 h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, rgba(232,160,181,0.25))" }}
      />
      <svg className="w-6 h-6 mx-2 opacity-20" viewBox="0 0 24 24" fill="none">
        {/* Small flower ornament */}
        {[0, 72, 144, 216, 288].map((angle, i) => (
          <ellipse
            key={i}
            cx="12"
            cy="12"
            rx="5"
            ry="2.5"
            fill="rgba(232, 160, 181, 0.8)"
            transform={`rotate(${angle} 12 12) translate(0 -4)`}
          />
        ))}
        <circle cx="12" cy="12" r="2" fill="rgba(212, 175, 55, 0.6)" />
      </svg>
      <span
        className="w-16 sm:w-20 h-[1px]"
        style={{ background: "linear-gradient(90deg, rgba(232,160,181,0.25), transparent)" }}
      />
    </div>
  );
}
