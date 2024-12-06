import React from 'react';
import { Waves } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-400 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1682686580391-615b1e32be1f')] bg-cover bg-center opacity-20" />
      <div className="relative px-8 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block p-3 mb-6 bg-blue-500/30 rounded-full">
            <Waves className="w-8 h-8" />
          </div>
          <h1 className="text-5xl font-bold mb-6">
            The Human-Ocean Connection
          </h1>
          <p className="text-xl text-blue-50 mb-8">
            Discover the profound connection between human anatomy and oceanic systems.
            Explore how our bodies mirror the rhythms and patterns of the world's oceans.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold 
            shadow-lg hover:bg-blue-50 transition-colors">
            Start Exploring
          </button>
        </div>
      </div>
    </div>
  );
}