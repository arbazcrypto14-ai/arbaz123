import { motion } from 'motion/react';

export function AmbientOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Vibrant Pink Orb */}
      <motion.div
        animate={{
          opacity: [0.7, 0.9, 0.7],
          scale: [1, 1.15, 1],
          x: [0, 40, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 -left-1/4 w-[80vw] h-[80vw] rounded-full bg-rose-300/40 blur-[120px] mix-blend-multiply"
      />
      {/* Deep Lavender Orb */}
      <motion.div
        animate={{
          opacity: [0.6, 0.8, 0.6],
          scale: [1, 1.1, 1],
          x: [0, -50, 0],
          y: [0, 60, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 -right-1/4 w-[70vw] h-[70vw] rounded-full bg-indigo-300/40 blur-[130px] mix-blend-multiply"
      />
      {/* Warm Peach Accent Orb */}
      <motion.div
        animate={{
          opacity: [0.4, 0.6, 0.4],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[50vw] rounded-[100%] bg-orange-200/40 blur-[100px] mix-blend-multiply"
      />
      
      {/* Noise Texture Overlay for Premium Feel */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />
    </div>
  );
}
