import React from 'react';
import { OceanFootprint } from './OceanFootprint';
import { ActionItems } from './ActionItems';
import { ImpactStats } from './ImpactStats';

export function ImpactSection() {
  return (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">
          Your Ocean Impact
        </h2>
        <p className="text-gray-600">
          Discover how your daily choices affect ocean health and learn practical
          steps to reduce your impact. Together, we can make a difference in
          protecting our oceans for future generations.
        </p>
      </div>

      <ImpactStats />
      <OceanFootprint />
      <ActionItems />
    </div>
  );
}