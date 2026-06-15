import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface Props {
  key?: string;
  onNext: () => void;
  avatarUrl: string;
  username: string;
}

export function Screen4Manuscript({ onNext, avatarUrl, username }: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)', scale: 0.95 }}
      transition={{ duration: 1.2 }}
      className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8"
    >
      <div className="glass-panel w-full max-w-md rounded-[40px] p-6 md:p-8 flex flex-col items-center relative overflow-hidden shadow-[0_30px_60px_rgba(123,44,191,0.15)] max-h-[85vh]">
        {/* Subtle inner highlight */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />

        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex items-center gap-4 bg-white/80 backdrop-blur-xl border border-white shadow-md rounded-full px-5 py-2.5 mb-8 z-20"
        >
          <div className="relative">
            <img 
              src={avatarUrl} 
              alt="Profile" 
              referrerPolicy="no-referrer"
              className="w-10 h-10 rounded-full object-cover border-[2px] border-white shadow-sm bg-gray-100 relative z-0"
            />
            {/* Instagram style active green dot */}
            <div className="absolute -bottom-0.5 -right-0.5 w-[14px] h-[14px] bg-[#23D366] border-[2px] border-white rounded-full z-10 shadow-sm flex items-center justify-center">
              <div className="w-[4px] h-[4px] bg-white/70 rounded-full animate-pulse" />
            </div>
          </div>
          <span className="text-charcoal/90 text-sm font-bold tracking-wide">
            {username}
          </span>
        </motion.div>

        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          className="w-full bg-white/30 backdrop-blur-md rounded-[32px] p-6 md:p-8 mb-8 overflow-y-auto shrink shadow-inner border border-white/50"
        >
          <div className="flex flex-col gap-8 text-[17px] md:text-[18px] text-charcoal/90 leading-[1.8] font-bold text-center italic drop-shadow-sm">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.2, duration: 1.5, type: "spring", bounce: 0.2 }}
            >
              <p>
                Chala jaunga ek din, toh afsos mat karna,<br />
                Jitna diya saath maine, uska hisaab mat karna.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8, duration: 1.5, type: "spring", bounce: 0.2 }}
              className="w-16 h-[3px] bg-gradient-to-r from-transparent via-[#7B2CBF]/30 to-transparent mx-auto rounded-full" 
            />
            
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 2.2, duration: 1.5, type: "spring", bounce: 0.2 }}
            >
              <p>
                Yaad aaye kabhi meri, to labon pe muskurahat saja lena,<br />
                Meri kami ko kabhi apni aadat mat bana lena.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.8, duration: 1.5, type: "spring", bounce: 0.2 }}
              className="w-16 h-[3px] bg-gradient-to-r from-transparent via-[#7B2CBF]/30 to-transparent mx-auto rounded-full" 
            />
            
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 3.2, duration: 1.5, type: "spring", bounce: 0.2 }}
            >
              <p>
                Jo lamhe saath guzare the, unhe dil mein mehfooz rakhna,<br />
                Hum na rahen kareeb toh bas apna khayal rakhna.!
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.8, duration: 1.2 }}
          className="w-full flex justify-center mt-auto"
        >
          <button
            onClick={onNext}
            className="glass-button flex items-center justify-center gap-2 px-10 py-5 text-[17px] tracking-wide rounded-full w-full max-w-[280px]"
          >
            <span>Let's see</span>
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
