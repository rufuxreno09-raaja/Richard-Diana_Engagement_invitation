"use client";

import React, { useState, useEffect } from "react";
import { Share2, Link2, Navigation, MessageCircle, Check } from "lucide-react";
import { engagementConfig } from "@/config/engagement";

export const FloatingActions: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState(engagementConfig.sharing.invitationUrl);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  // Format WhatsApp Share text
  const handleWhatsAppShare = () => {
    const text = `${engagementConfig.sharing.messageTemplate}${currentUrl}\n\n#${engagementConfig.sharing.hashtags}`;
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  // Copy link
  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Native share if supported
  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: engagementConfig.meta.title,
          text: `You're invited to celebrate the engagement of ${engagementConfig.couple.groom.name} & ${engagementConfig.couple.bride.name} on ${engagementConfig.event.date}!`,
          url: currentUrl,
        });
      } catch {
        // User cancelled share
      }
    } else {
      handleWhatsAppShare();
    }
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-auto max-w-[94vw]">
      <div className="flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full glass-card border border-gold-400/50 shadow-2xl backdrop-blur-xl">
        {/* WhatsApp Share Button */}
        <button
          onClick={handleWhatsAppShare}
          id="whatsapp-share-btn"
          aria-label="Share on WhatsApp"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-sans text-xs font-medium shadow-sm transition-transform active:scale-95"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="hidden xs:inline">WhatsApp</span>
        </button>

        {/* Copy Link Button */}
        <button
          onClick={handleCopyLink}
          id="copy-invitation-link-btn"
          aria-label="Copy invitation link"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 hover:bg-white text-gold-700 border border-gold-300 font-sans text-xs font-medium shadow-sm transition-transform active:scale-95"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-emerald-700">Copied!</span>
            </>
          ) : (
            <>
              <Link2 className="w-3.5 h-3.5 text-gold-600" />
              <span>Copy Link</span>
            </>
          )}
        </button>

        {/* Directions quick link */}
        <a
          href={engagementConfig.venue.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="floating-directions-btn"
          aria-label="Get Google Maps Directions"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gold-500 hover:bg-gold-600 text-white font-sans text-xs font-medium shadow-sm transition-transform active:scale-95"
        >
          <Navigation className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Directions</span>
        </a>

        {/* Native Mobile Share Button */}
        <button
          onClick={handleNativeShare}
          id="native-share-btn"
          aria-label="Share invitation"
          className="p-1.5 rounded-full bg-white/80 hover:bg-white text-[#2A2521] border border-gold-200 transition-transform active:scale-95"
        >
          <Share2 className="w-4 h-4 text-gold-600" />
        </button>
      </div>
    </div>
  );
};
