import { useState, useRef, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { AmbientOrbs } from './components/Orbs';
import { FloatingDecorations } from './components/FloatingDecorations';
import { Screen1Entry } from './components/Screen1Entry';
import { Screen2Ticker } from './components/Screen2Ticker';
import { Screen2bLyrics } from './components/Screen2bLyrics';
import { Screen3Capsule } from './components/Screen3Capsule';
import { Screen4Manuscript } from './components/Screen4Manuscript';
import { Screen5Final } from './components/Screen5Final';

export default function App() {
  const [step, setStep] = useState(1);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Default placeholders, users can easily replace these URIs.
  const HER_AVATAR = "https://img.sanishtech.com/u/03f0aeba2e0dc3bfcc0a42ad299e46bc.webp";
  const her_username = "@beltsamarrungi_";
  
  const MY_AVATAR = "https://img.sanishtech.com/u/f3ac80ed40bff33ce6eb58a3a017c4d5.jpg";
  const myUsername = "@arbaz_nawazz";

  // Relaxing ambient audio placeholder (Main app background audio)
  const AUDIO_URL = "https://actions.google.com/sounds/v1/water/rain_on_roof.ogg";
  
  // Specific audio for the Lyrics ("I hope you leave") Screen
  const LYRICS_AUDIO_URL = "https://files.catbox.moe/ma0zpf.mp3";
  
  // Placeholder video (Replace with your own MP4 link)
  const VIDEO_URL = "https://files.catbox.moe/qogj7u.mp4";

  const handleNext = () => setStep(s => s + 1);

  const handleBegin = () => {
    if (audioRef.current) {
      const audio = audioRef.current;
      audio.volume = 0;
      audio.play().catch(e => console.log("Audio play failed, waiting for interaction or valid source", e));
      
      let vol = 0;
      const fadeInterval = setInterval(() => {
        if (vol < 0.35) {
          vol += 0.02;
          audio.volume = Math.min(vol, 1);
        } else {
          clearInterval(fadeInterval);
        }
      }, 150);
    }
    handleNext();
  };

  useEffect(() => {
    if (step === 6 && audioRef.current) {
      const audio = audioRef.current;
      const startVol = audio.volume;
      let steps = 20;
      let currentStep = 0;
      
      const fadeOutInterval = setInterval(() => {
        currentStep++;
        const newVol = startVol * (1 - currentStep / steps);
        if (newVol > 0.01) {
          audio.volume = newVol;
        } else {
          audio.volume = 0;
          audio.pause();
          clearInterval(fadeOutInterval);
        }
      }, 200);
    }
  }, [step]);

  return (
    <main className="relative min-h-screen">
      <AmbientOrbs />
      <FloatingDecorations />
      
      <audio ref={audioRef} src={AUDIO_URL} loop playsInline preload="auto" />

      <AnimatePresence mode="wait">
        {step === 1 && (
          <Screen1Entry key="s1" onNext={handleBegin} avatarUrl={HER_AVATAR} username={her_username} />
        )}
        {step === 2 && (
          <Screen2Ticker key="s2" onNext={handleNext} />
        )}
        {step === 3 && (
          <Screen2bLyrics key="s2b" onNext={handleNext} mainAudioRef={audioRef} myAvatarUrl={MY_AVATAR} lyricsAudioUrl={LYRICS_AUDIO_URL} />
        )}
        {step === 4 && (
          <Screen3Capsule key="s3" onNext={handleNext} videoUrl={VIDEO_URL} />
        )}
        {step === 5 && (
          <Screen4Manuscript key="s4" onNext={handleNext} avatarUrl={HER_AVATAR} username={her_username} />
        )}
        {step === 6 && (
          <Screen5Final key="s5" myAvatarUrl={MY_AVATAR} myUsername={myUsername} />
        )}
      </AnimatePresence>
    </main>
  );
}
