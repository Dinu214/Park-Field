import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isCounting, setIsCounting] = useState(true);

  useEffect(() => {
    let current = 0;
    
    // Smooth, easing-like progress
    const interval = setInterval(() => {
      // Slows down as it gets closer to 100 to simulate real loading
      const increment = Math.floor(Math.random() * 10) + 1;
      current += increment;

      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => setIsCounting(false), 500); // Pause at 100% before sliding out
      }
      setProgress(current);
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isCounting && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%", borderBottomLeftRadius: "50%", borderBottomRightRadius: "50%", transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[999] bg-foreground text-white flex flex-col items-center justify-between p-8 md:p-16 overflow-hidden"
        >
          {/* Top Header */}
          <div className="w-full flex justify-between items-start">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-body text-[10px] uppercase tracking-[0.4em] text-white/50"
            >
              Park Field
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-body text-[10px] uppercase tracking-[0.4em] text-white/50"
            >
              Dubai UAE
            </motion.p>
          </div>

          {/* Center Logo/Title block */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-6 flex flex-col items-center">
            <div className="overflow-hidden mb-2">
              <motion.h1 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                className="font-display text-4xl md:text-6xl text-white font-bold tracking-widest"
              >
                Discover Elegance
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.p 
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
                className="font-body text-[11px] uppercase tracking-[0.5em] text-primary"
              >
                Pinnacle Real Estate
              </motion.p>
            </div>
          </div>

          {/* Bottom Footer (Counter & Line) */}
          <div className="w-full relative mt-auto">


            {/* Progress Bar */}
            <div className="absolute -bottom-8 md:-bottom-16 left-[-2rem] md:left-[-4rem] right-[-2rem] md:right-[-4rem] h-1 bg-white/10">
              <motion.div 
                className="h-full bg-primary"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: "linear" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
