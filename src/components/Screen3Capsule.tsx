import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface Props {
  key?: string;
  onNext: () => void;
  videoUrl: string;
}

export function Screen3Capsule({ onNext, videoUrl }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log("Video auto-play blocked until user interaction", e));
    }
  }, []);

  const handleTimeUpdate = () => {
    if (videoRef.current && progressBarRef.current) {
      const { currentTime, duration } = videoRef.current;
      if (!duration) return;
      const calcProgress = (currentTime / duration) * 100;
      
      // Update DOM directly to prevent heavy React re-renders test
      progressBarRef.current.style.width = `${calcProgress}%`;
    }
  };

  const handleNext = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    onNext();
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
      transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
      className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8"
    >
      <div className="glass-panel w-full max-w-md rounded-[40px] p-6 md:p-8 flex flex-col items-center relative overflow-hidden shadow-[0_30px_60px_rgba(123,44,191,0.15)]">
        {/* Subtle inner highlight */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
        
        <h2 className="text-[22px] md:text-2xl font-bold text-gradient-dark text-center max-w-sm w-full mb-8 px-2 leading-snug tracking-tight drop-shadow-sm mt-4">
          Leaving you for your peace is my last gift for you 🤍
        </h2>

        {/* Video Card */}
        <div className="w-full rounded-[32px] p-2 overflow-hidden relative bg-white/40 border border-white shadow-lg mb-8">
          <div className="relative aspect-[4/5] bg-charcoal/5 rounded-[24px] overflow-hidden shadow-inner">
            <video
              ref={videoRef}
              src={videoUrl}
              onTimeUpdate={handleTimeUpdate}
              onClick={() => {
                if (videoRef.current?.paused) videoRef.current.play();
                else videoRef.current?.pause();
              }}
              playsInline
              className="w-full h-full object-cover cursor-pointer"
            />
            
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-black/5 pointer-events-none">
              <div 
                ref={progressBarRef}
                className="h-full bg-gradient-to-r from-[#7B2CBF] to-[#C77DFF] transition-all duration-300 ease-linear rounded-r-full shadow-[0_0_10px_rgba(123,44,191,0.5)]"
                style={{ width: '0%' }}
              />
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-center mb-2">
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={handleNext}
            className="glass-button flex items-center justify-center gap-2 px-10 py-5 text-[17px] tracking-wide rounded-full w-full max-w-[280px]"
          >
            <span>Continue motiii</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
