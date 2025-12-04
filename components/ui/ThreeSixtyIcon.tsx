import React from 'react';
import { motion } from 'framer-motion';

export const ThreeSixtyIcon: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Outer Rotating Ring Text */}
      <motion.div
        className="absolute w-[140%] h-[140%] rounded-full border border-dashed border-white/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Main Circle - The 'Coin' that spins */}
      <motion.div
        className="relative w-full h-full bg-aurea-blue rounded-full border-4 border-aurea-dark shadow-2xl flex items-center justify-center overflow-hidden"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        {/* Vertical Line */}
        <div className="absolute inset-y-0 w-2 bg-white left-1/2 -translate-x-1/2 z-10"></div>
        
        {/* 360 Text */}
        <div className="relative z-20 flex items-center justify-center">
            {/* Split text to handle the vertical line crossing visually if needed, but simplified here for clean look */}
            <span className="font-display text-white text-[clamp(3rem,8vw,5rem)] leading-none tracking-tighter mix-blend-difference">
              360
            </span>
        </div>

        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none"></div>
      </motion.div>
    </div>
  );
};
