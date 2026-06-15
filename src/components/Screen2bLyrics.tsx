import { motion } from 'motion/react';
import { ArrowRight, Pause, SkipBack, SkipForward } from 'lucide-react';
import { useEffect, useRef } from 'react';

import { RefObject } from 'react';

// Custom Minimalist Spotify Icon Placeholder
const SpotifyIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[22px] h-[22px] text-[#1DB954]">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zM19.32 14.1c-.3.42-.84.54-1.26.24-3.36-2.04-8.52-2.64-12.54-1.44-.48.12-1.02-.12-1.14-.6-.12-.48.12-1.02.6-1.14 4.56-1.32 10.26-.6 14.1 1.68.42.24.54.84.24 1.26zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.781-.18-.6.18-1.2.78-1.38 4.2-1.26 11.28-1.02 15.96 1.74.54.3.72 1.02.42 1.56-.24.539-.96.719-1.5.42z"/>
  </svg>
);

interface Props {
  key?: string;
  onNext: () => void;
  mainAudioRef: RefObject<HTMLAudioElement | null>;
  myAvatarUrl: string;
  lyricsAudioUrl: string;
}

export function Screen2bLyrics({ onNext, mainAudioRef, myAvatarUrl, lyricsAudioUrl }: Props) {
  const localAudioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Smoothly fade out the previous background music
    if (mainAudioRef.current && mainAudioRef.current.volume > 0) {
      const mainAudio = mainAudioRef.current;
      const startVol = mainAudio.volume;
      let steps = 20;
      let currentStep = 0;
      
      const fadeOutInterval = setInterval(() => {
        currentStep++;
        const newVol = startVol * (1 - currentStep / steps);
        if (newVol > 0.01) {
          mainAudio.volume = newVol;
        } else {
          mainAudio.volume = 0;
          mainAudio.pause();
          clearInterval(fadeOutInterval);
        }
      }, 100);
    }

    // Fade in the new dedicated track automatically up to 40%
    if (localAudioRef.current) {
      const localAudio = localAudioRef.current;
      localAudio.volume = 0;
      localAudio.play().catch(e => console.log("Local audio play failed, waiting for user interaction.", e));
      
      let vol = 0;
      const fadeInInterval = setInterval(() => {
        if (vol < 0.4) {
          vol += 0.02;
          localAudio.volume = Math.min(vol, 0.4);
        } else {
          clearInterval(fadeInInterval);
        }
      }, 150);
    }
  }, [mainAudioRef]);

  const handleNext = () => {
    // Fade out the local lyrical track before continuing
    if (localAudioRef.current) {
       const localAudio = localAudioRef.current;
       const startVol = localAudio.volume;
       let steps = 15;
       let currentStep = 0;
       
       const fadeOutLocal = setInterval(() => {
         currentStep++;
         const newVol = startVol * (1 - currentStep / steps);
         if (newVol > 0.01) {
           localAudio.volume = newVol;
         } else {
           localAudio.volume = 0;
           localAudio.pause();
           clearInterval(fadeOutLocal);
         }
       }, 50);
    }
    // Proceed to the next screen
    onNext();
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, filter: 'blur(15px)', scale: 0.95 }}
      transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
      className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8"
    >
      {/* 
        🎵 YAHAN APNA LYRICS WALA MP3 LINK PASTE KAREIN 👇
        Replace the \`src\` link below with your own MP3 link for this specific screen!
      */}
      <audio 
        ref={localAudioRef} 
        src={lyricsAudioUrl} 
        loop 
        playsInline 
        preload="auto"
      />

      <div className="glass-panel w-full max-w-sm rounded-[40px] p-6 md:p-10 flex flex-col items-center relative mb-0 min-h-[480px]">
        {/* Subtle inner top glow to emulate expensive glass edge */}
        <div className="absolute inset-x-0 top-0 h-[100px] bg-gradient-to-b from-white/90 to-transparent rounded-t-[40px] pointer-events-none" />
        
        {/* Inner outline */}
        <div className="absolute inset-1 rounded-[36px] border border-white/40 pointer-events-none mix-blend-overlay" />

        {/* Top Header - Minimalist Album Info */}
        <div className="w-full flex items-center gap-4 mb-8 md:mb-10 z-10">
          <div className="w-[52px] h-[52px] rounded-xl shadow-lg border border-white shrink-0 overflow-hidden relative flex items-center justify-center">
            {/* User DP */}
            <img src={myAvatarUrl} alt="Album Art" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col justify-center pt-1">
            <h3 className="text-charcoal font-bold text-[15px] tracking-tight leading-tight mb-0.5 drop-shadow-sm">
              this is what winter feels like
            </h3>
            <p className="text-[#7B2CBF] font-bold text-[12px] uppercase tracking-wider opacity-80 shadow-sm">
              JVKE
            </p>
          </div>
        </div>

        {/* Main Lyrics Text */}
        <div className="flex-1 flex flex-col justify-start md:justify-center w-full z-10 mb-8 mt-2">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1.5, type: 'spring', bounce: 0.15 }}
            className="text-left w-full"
          >
            <h1 className="font-extrabold text-[#1C1C24] text-[28px] md:text-[34px] leading-[1.15] tracking-tight drop-shadow-sm mb-3">
              I hope you leave and don't come back
            </h1>
            <h2 className="font-bold text-[#1C1C24]/30 text-[22px] md:text-[26px] leading-[1.1] tracking-tight drop-shadow-[0_2px_4px_rgba(255,255,255,0.5)]">
              'Cause I'm cold, oh, oh
            </h2>

            {/* Simulated Player Controls for Aesthetic */}
            <div className="w-full mt-8 md:mt-10">
              {/* Fake Progress Bar */}
              <div className="w-full h-1.5 bg-[#1C1C24]/10 rounded-full mb-2 overflow-hidden shadow-inner">
                <div className="w-[45%] h-full bg-gradient-to-r from-[#1DB954] to-[#1ed760] rounded-full" />
              </div>
              <div className="flex justify-between text-[11px] text-[#1C1C24]/60 font-bold mb-6 px-0.5 tracking-wider">
                <span>1:38</span>
                <span>3:35</span>
              </div>
              
              {/* Player Buttons (Non-functional) */}
              <div className="flex items-center justify-center gap-6 md:gap-7">
                <div className="w-10 h-10 flex items-center justify-center text-[#1C1C24]/40 transition-colors">
                  <SkipBack className="w-6 h-6 fill-current text-current" />
                </div>
                <div className="w-[54px] h-[54px] flex items-center justify-center bg-[#1C1C24] text-white rounded-full shadow-lg shadow-[#1C1C24]/20 transition-transform">
                  <Pause className="w-6 h-6 fill-current text-current" />
                </div>
                <div className="w-10 h-10 flex items-center justify-center text-[#1C1C24]/40 transition-colors">
                  <SkipForward className="w-6 h-6 fill-current text-current" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Area - Spotify Branding */}
        <div className="w-full flex items-center justify-between z-10 pt-4 border-t border-white/50 mb-6">
          <div className="flex items-center gap-2.5">
            <SpotifyIcon />
            <span className="text-[#1DB954] text-[13px] font-bold tracking-widest uppercase">Spotify</span>
          </div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#1DB954]/20" />
        </div>

        {/* Tactile Button */}
        <div className="w-full flex items-center justify-center z-10">
          <motion.button
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, type: "spring" }}
            onClick={handleNext}
            className="glass-button flex items-center justify-center gap-2 px-8 py-4 md:px-10 md:py-5 text-[16px] md:text-[17px] tracking-wide rounded-full w-full max-w-[280px]"
          >
            <span>Continue motiii</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
