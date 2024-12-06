import React from 'react';
import { motion } from 'framer-motion';
import { BodySystem } from './types';

interface SystemInfoProps {
  system: BodySystem;
}

export function SystemInfo({ system }: SystemInfoProps) {
  return (
    <motion.div
      key={system.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl p-6 shadow-lg space-y-4"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-900">
          {system.humanTitle}
        </h3>
        <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
          {system.category}
        </span>
      </div>

      <p className="text-gray-600 leading-relaxed">
        {system.description}
      </p>

      <div className="grid grid-cols-2 gap-4 pt-4">
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-500">Human System</h4>
          <p className="text-gray-900">{system.humanFunction}</p>
        </div>
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-500">Ocean Parallel</h4>
          <p className="text-gray-900">{system.oceanFunction}</p>
        </div>
      </div>
    </motion.div>
  );
}