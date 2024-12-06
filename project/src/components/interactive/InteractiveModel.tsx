import React from 'react';
import { motion } from 'framer-motion';
import { HumanBody } from './HumanBody';
import { OceanSystem } from './OceanSystem';
import { SystemInfo } from './SystemInfo';
import { useBodySystem } from './useBodySystem';

export function InteractiveModel() {
  const { activeSystem, setActiveSystem, systems } = useBodySystem();

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Human Body & Ocean Connections
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore the fascinating parallels between human anatomy and ocean systems.
            Click on different body parts to discover how they mirror oceanic processes.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <HumanBody activeSystem={activeSystem} onSystemClick={setActiveSystem} />
          <div className="space-y-8">
            <OceanSystem system={activeSystem} />
            <SystemInfo system={activeSystem} />
          </div>
        </div>
      </div>
    </div>
  );
}