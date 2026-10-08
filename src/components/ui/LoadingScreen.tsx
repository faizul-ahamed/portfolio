'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 1000); // Wait for exit animation
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          {/* Glowing Spacecraft or Core Simulation */}
          <div className="relative flex items-center justify-center w-32 h-32 mb-8">
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-cyan-500/30"
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-2 rounded-full border-2 border-transparent border-t-purple-500"
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
            <div className="w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_20px_10px_rgba(34,211,238,0.5)]" />
          </div>

          <div className="text-cyan-400 font-display tracking-widest text-xl mb-4">
            INITIATING SEQUENCE
          </div>

          <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <div className="mt-2 text-white/50 text-sm font-sans">
            {progress}% SYSTEM LOAD
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
