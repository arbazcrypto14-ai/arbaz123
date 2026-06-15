import { motion } from 'motion/react';

interface Props {
  key?: string;
  myAvatarUrl: string;
  myUsername: string;
}

export function Screen5Final({ myAvatarUrl, myUsername }: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0, filter: 'blur(20px)', scale: 0.9 }}
      animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
      className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center"
    >
      <div className="glass-panel w-full max-w-md rounded-[40px] p-12 flex flex-col items-center justify-center relative overflow-hidden shadow-[0_30px_60px_rgba(123,44,191,0.15)] min-h-[450px]">
        {/* Subtle inner highlight */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />

        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
          className="relative group mb-12 mt-4"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FFAFCC] via-white to-[#C77DFF] blur-2xl opacity-90 animate-pulse" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white to-white/60 p-[3px] shadow-2xl">
            <div className="absolute inset-0 bg-white rounded-full" />
          </div>
          <img 
            src={myAvatarUrl} 
            alt="My Profile" 
            referrerPolicy="no-referrer"
            className="relative w-36 h-36 rounded-full object-cover border-[5px] border-white scale-[0.98] shadow-inner bg-gray-100"
          />
          {/* Instagram style active green dot */}
          <div className="absolute bottom-1 right-2 w-[30px] h-[30px] bg-[#23D366] border-[4px] border-white rounded-full z-10 shadow-md flex items-center justify-center">
            <div className="w-[10px] h-[10px] bg-white/70 rounded-full animate-pulse" />
          </div>
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-xl border border-[#7B2CBF]/20 rounded-full px-6 py-2 shadow-2xl">
            <span className="text-[#7B2CBF] tracking-widest text-[13px] font-extrabold">{myUsername}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 1.5 }}
          className="mb-6"
        >
          <h2 className="font-extrabold text-4xl text-gradient-dark mb-4 tracking-tight drop-shadow-sm">Made with care <span className="text-gradient-accent">💜</span></h2>
          <p className="text-charcoal/70 font-semibold text-[19px] max-w-sm mx-auto leading-relaxed">
            Thank you.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
