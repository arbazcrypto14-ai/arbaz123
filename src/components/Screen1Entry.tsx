import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface Props {
  key?: string;
  onNext: () => void;
  avatarUrl: string;
  username: string;
}

export function Screen1Entry({ onNext, avatarUrl, username }: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0, filter: 'blur(10px)', scale: 0.95 }}
      animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
      exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
      transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
      className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12"
    >
      <div className="glass-panel w-full max-w-md rounded-[40px] p-10 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Subtle inner highlight */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
        
        <motion.div 
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative group mb-8"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#FFAFCC] via-white to-[#C77DFF] blur-2xl opacity-80" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FFAFCC] to-[#C77DFF] p-[4px] shadow-2xl">
            <div className="absolute inset-0 bg-white rounded-full" />
          </div>
          <img 
            src={avatarUrl} 
            alt="Profile" 
            referrerPolicy="no-referrer"
            className="relative w-36 h-36 rounded-full object-cover border-[5px] border-white scale-[0.98] shadow-inner"
          />
          {/* Instagram style active green dot */}
          <div className="absolute bottom-1 right-2 w-[30px] h-[30px] bg-[#23D366] border-[4px] border-white rounded-full z-10 shadow-md flex items-center justify-center">
            <div className="w-[10px] h-[10px] bg-white/70 rounded-full animate-pulse" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
          className="bg-white/80 backdrop-blur-md px-6 py-2 rounded-full shadow-sm border border-[#7B2CBF]/10 mb-10"
        >
          <p className="font-bold text-charcoal/80 tracking-widest text-xs">
            {username}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-center w-full mb-12"
        >
          <h1 className="text-5xl font-extrabold mb-5 tracking-tight text-gradient-dark drop-shadow-sm">Hey <span className="text-gradient-accent">💜</span></h1>
          <p className="text-charcoal/80 text-[17px] leading-relaxed font-medium px-2">
            I made something for you.<br/>Before paths separate entirely, take a final look inside.
          </p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4, duration: 0.8, type: "spring" }}
          onClick={onNext}
          className="glass-button flex items-center justify-center gap-2 px-10 py-5 text-[17px] tracking-wide rounded-full w-full max-w-[280px]"
        >
          <span>Continue ✨</span>
        </motion.button>
      </div>
    </motion.div>
  );
}
