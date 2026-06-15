import { motion } from 'motion/react';

const DECORATIONS = [
  { id: 1, type: '💜', size: 'text-4xl', x: '15%', y: '20%', duration: 15, delay: 0 },
  { id: 2, type: '✨', size: 'text-3xl', x: '80%', y: '15%', duration: 18, delay: 2 },
  { id: 3, type: '🤍', size: 'text-5xl', x: '85%', y: '70%', duration: 20, delay: 5 },
  { id: 4, type: '🌟', size: 'text-2xl', x: '10%', y: '75%', duration: 16, delay: 3 },
  { id: 5, type: '✨', size: 'text-4xl', x: '25%', y: '50%', duration: 22, delay: 1 },
];

export function FloatingDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {DECORATIONS.map((deco) => (
        <motion.div
          key={deco.id}
          animate={{
            y: [0, -30, 0],
            rotate: [-10, 10, -10],
            opacity: [0.6, 0.9, 0.6],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: deco.duration,
            repeat: Infinity,
            delay: deco.delay,
            ease: "easeInOut"
          }}
          className={`absolute ${deco.size} drop-shadow-[0_10px_15px_rgba(123,44,191,0.3)] filter blur-[0.5px]`}
          style={{ left: deco.x, top: deco.y }}
        >
          {deco.type}
        </motion.div>
      ))}
    </div>
  );
}
