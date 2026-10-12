"use client";

import React, { useState } from "react";
import { CoverSection } from "@/components/CoverSection";
import { PetalBackground } from "@/components/PetalBackground";
import { MusicPlayer } from "@/components/MusicPlayer";
import { AnnouncementSection } from "@/components/AnnouncementSection";
import { ScratchCardSection } from "@/components/ScratchCardSection";
import { CountdownSection } from "@/components/CountdownSection";
import { CoupleSection } from "@/components/CoupleSection";
import { EventDetailsSection } from "@/components/EventDetailsSection";
import { ScheduleSection } from "@/components/ScheduleSection";
import { VenueMapSection } from "@/components/VenueMapSection";
import { PhotoGallerySection } from "@/components/PhotoGallerySection";
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
      {/* Ambient Falling Petals */}
      <PetalBackground />

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
        {/* 1. Announcement Section */}
        <AnnouncementSection />

        {/* 2. Interactive Scratch-to-Reveal Card */}
        <ScratchCardSection />

        {/* 3. Live Engagement Countdown */}
        <CountdownSection />

        {/* 4. Couple Section */}
        <CoupleSection />

        {/* 5. Engagement Event Details */}
        <EventDetailsSection />

        {/* 6. Optional Event Timeline */}
        <ScheduleSection />

        {/* 7. Venue and Google Maps */}
        <VenueMapSection />

        {/* 8. Photo Gallery */}
        <PhotoGallerySection />

        {/* 9. Final Blessings and Thank-You */}
        <BlessingsSection onReturnToCover={handleReturnToCover} />
      </div>

      {/* Floating Quick Action Bar (Visible after opening cover) */}
      {isCoverOpen && <FloatingActions />}
    </main>
  );
}
