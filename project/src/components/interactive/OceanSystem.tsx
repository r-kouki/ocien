import React from 'react';
import { motion } from 'framer-motion';
import { BodySystem } from './types';

interface OceanSystemProps {
  system: BodySystem;
}

export function OceanSystem({ system }: OceanSystemProps) {
  return (
    <motion.div
      key={system.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg"
    >
      <div className="aspect-video relative overflow-hidden">
        <img
          src={system.oceanImage}
          alt={system.oceanTitle}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-bold mb-2">{system.oceanTitle}</h3>
          <p className="text-white/90">{system.oceanDescription}</p>
        </div>
      </div>
    </motion.div>
  );
}