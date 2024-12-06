import React from 'react';
import { Brain, Podcast, Heart } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Interactive Learning',
    description: 'Explore the fascinating parallels between human anatomy and ocean systems through our interactive model.',
  },
  {
    icon: Podcast,
    title: 'Engaging Content',
    description: 'Listen to our podcast series featuring experts discussing the intricate relationships between humans and oceans.',
  },
  {
    icon: Heart,
    title: 'Make an Impact',
    description: 'Discover how you can contribute to ocean conservation and measure your personal impact on marine ecosystems.',
  },
];

export function Features() {
  return (
    <div className="py-16">
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 text-blue-600 mb-4">
              <feature.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}