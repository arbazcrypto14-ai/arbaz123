import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface Props {
  key?: string;
  onNext: () => void;
}

const MESSAGES = [
  { text: "Ab shayad hamari dosti pehle jaisi nahi rahi...", emoji: "🥀", btn: "Next" },
  { text: "Waqt aur halaat badal jaate hain.", emoji: "🍃", btn: "Let's see" },
  { text: "Lekin jo lamhe the, unki qadar hamesha rahegi.", emoji: "💫", btn: "Next" },
  { text: "I won't say anything about your actions anymore.", emoji: "🤐", btn: "Let's see" },
  { text: "I just hope you realize you are losing me (bit by bit)...", emoji: "💔", btn: "Continue motiiii" },
  { text: "Before I step away completely...", emoji: "🤍", btn: "Next" }
];

export function Screen2Ticker({ onNext }: Props) {
  const [index, setIndex] = useState(0);

  const handleManualNext = () => {
    if (index < MESSAGES.length - 1) {
      setIndex(prev => prev + 1);
    } else {
      onNext();
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)', scale: 0.95 }}
      transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
      className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12"
    >
      <div className="glass-panel w-full max-w-md rounded-[40px] p-10 flex flex-col items-center justify-center relative overflow-hidden min-h-[400px]">
        {/* Subtle inner highlight */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
        
        <div className="flex items-center justify-center w-full mb-12 flex-1">
          <AnimatePresence mode="wait">
            <motion.h2
              key={index}
              initial={{ opacity: 0, y: 15, filter: 'blur(10px)', scale: 0.95 }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
              exit={{ opacity: 0, y: -20, filter: 'blur(10px)', scale: 1.05 }}
              transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
              className="text-3xl md:text-3xl font-bold leading-tight tracking-tight drop-shadow-sm text-center flex flex-col items-center gap-4"
            >
              <span className="text-gradient-dark">{MESSAGES[index].text}</span>
              <span className="text-5xl md:text-6xl drop-shadow-md" style={{ WebkitTextFillColor: 'initial', color: 'initial' }}>
                {MESSAGES[index].emoji}
              </span>
            </motion.h2>
          </AnimatePresence>
        </div>

        <div className="h-20 w-full flex items-center justify-center mt-auto">
          <motion.button
            key={`btn-${index}`}
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            onClick={handleManualNext}
            className="glass-button flex items-center justify-center gap-2 px-10 py-5 text-[17px] tracking-wide rounded-full w-full max-w-[280px]"
          >
            <span>{MESSAGES[index].btn}</span>
            {index === MESSAGES.length - 1 && <ArrowRight className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
