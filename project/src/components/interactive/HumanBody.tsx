import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BodySystem } from './types';

interface HumanBodyProps {
  activeSystem: BodySystem;
  onSystemClick: (system: BodySystem) => void;
}

export function HumanBody({ activeSystem, onSystemClick }: HumanBodyProps) {
  return (
    <div className="relative aspect-[3/4] bg-gradient-to-b from-blue-50 to-white rounded-2xl overflow-hidden shadow-lg">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0"
      >
        <img
          src="https://images.unsplash.com/photo-1564711976636-b5f844c5871d"
          alt="Human body outline"
          className="w-full h-full object-contain opacity-20"
        />
      </motion.div>

      <AnimatePresence>
        {activeSystem.points.map((point) => (
          <motion.button
            key={point.id}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => onSystemClick(activeSystem)}
            className={`absolute ${point.position} transform -translate-x-1/2 -translate-y-1/2
              w-6 h-6 rounded-full bg-blue-500 shadow-lg cursor-pointer
              flex items-center justify-center`}
          >
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
          </motion.button>
        ))}
      </AnimatePresence>
    </div>
  );
}