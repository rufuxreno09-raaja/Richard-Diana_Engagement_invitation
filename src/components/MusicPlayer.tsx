"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";
import { engagementConfig } from "@/config/engagement";

interface MusicPlayerProps {
  autoStartOnInteraction?: boolean;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ autoStartOnInteraction = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [useSynthFallback, setUseSynthFallback] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const synthTimerRef = useRef<NodeJS.Timeout | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Soft romantic chime chords using Web Audio API as graceful fallback
  const playGentleChime = useCallback(() => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      // Romantic chord notes (F# maj, C# maj, D# min, B maj frequencies)
      const chords = [
        [370.0, 466.16, 554.37], // F#
        [329.63, 415.3, 493.88], // E
        [277.18, 349.23, 415.3], // C#
        [293.66, 369.99, 440.0], // D
      ];
      const chord = chords[Math.floor(Math.random() * chords.length)];

      chord.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        const startTime = ctx.currentTime + i * 0.18;
        gain.gain.setValueAtTime(0, startTime);
        gain.gain.linearRampToValueAtTime(0.04, startTime + 0.3);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 2.5);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(startTime);
        osc.stop(startTime + 2.6);
      });
    } catch {
      // AudioContext not available or blocked
    }
  }, []);

  const startPlayback = useCallback(() => {
    if (!engagementConfig.audio.enabled) return;
    setHasInteracted(true);

    if (audioRef.current && !useSynthFallback) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // If mp3 fails, switch to soft synth chimes
          setUseSynthFallback(true);
          setIsPlaying(true);
          playGentleChime();
        });
    } else {
      setIsPlaying(true);
      playGentleChime();
    }
  }, [playGentleChime, useSynthFallback]);

  const stopPlayback = useCallback(() => {
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
    }
    if (synthTimerRef.current) {
      clearInterval(synthTimerRef.current);
      synthTimerRef.current = null;
    }
  }, []);

  const toggleMusic = () => {
    if (isPlaying) {
      stopPlayback();
    } else {
      startPlayback();
    }
  };

  // Loop gentle chimes if in synth mode
  useEffect(() => {
    if (isPlaying && useSynthFallback) {
      synthTimerRef.current = setInterval(() => {
        playGentleChime();
      }, 3500);
    } else if (!isPlaying && synthTimerRef.current) {
      clearInterval(synthTimerRef.current);
    }
    return () => {
      if (synthTimerRef.current) clearInterval(synthTimerRef.current);
    };
  }, [isPlaying, useSynthFallback, playGentleChime]);

  // Handle first user gesture if autoStartOnInteraction requested
  useEffect(() => {
    if (!autoStartOnInteraction || hasInteracted) return;

    const onFirstClick = () => {
      startPlayback();
      window.removeEventListener("click", onFirstClick);
      window.removeEventListener("touchstart", onFirstClick);
    };

    window.addEventListener("click", onFirstClick, { once: true });
    window.addEventListener("touchstart", onFirstClick, { once: true });

    return () => {
      window.removeEventListener("click", onFirstClick);
      window.removeEventListener("touchstart", onFirstClick);
    };
  }, [autoStartOnInteraction, hasInteracted, startPlayback]);

  return (
    <>
      <audio
        ref={audioRef}
        src={engagementConfig.audio.src}
        preload="none"
        loop
        onError={() => setUseSynthFallback(true)}
      />

      <button
        onClick={toggleMusic}
        id="music-toggle-btn"
        aria-label={isPlaying ? "Mute background music" : "Play romantic background music"}
        className="fixed top-4 right-4 z-50 flex items-center gap-2 px-3 py-2 rounded-full glass-card border border-gold-400/40 text-[#2A2521] shadow-lg hover:shadow-gold transition-all duration-300 transform active:scale-95 group"
      >
        <div className="relative w-5 h-5 flex items-center justify-center text-gold-500">
          {isPlaying ? (
            <div className="flex items-end gap-[2px] h-3.5">
              <span className="w-1 bg-gold-500 rounded-full animate-[pulse_0.8s_ease-in-out_infinite] h-3.5" />
              <span className="w-1 bg-gold-400 rounded-full animate-[pulse_0.6s_ease-in-out_infinite_0.2s] h-2.5" />
              <span className="w-1 bg-gold-500 rounded-full animate-[pulse_0.9s_ease-in-out_infinite_0.4s] h-3" />
            </div>
          ) : (
            <VolumeX className="w-4 h-4 text-[#8C6514]" />
          )}
        </div>
        <span className="text-xs font-serif font-medium tracking-wider text-[#6A6059] group-hover:text-gold-600 hidden sm:inline">
          {isPlaying ? "Music Playing" : "Play Music"}
        </span>
      </button>
    </>
  );
};
