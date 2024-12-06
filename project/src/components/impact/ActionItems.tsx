import React from 'react';
import { Recycle, ShoppingBag, Bike, Leaf } from 'lucide-react';

const actions = [
  {
    icon: Recycle,
    title: 'Reduce Plastic Use',
    description: 'Switch to reusable containers and bags. Avoid single-use plastics.',
    impact: 'Prevents ocean pollution',
  },
  {
    icon: ShoppingBag,
    title: 'Sustainable Shopping',
    description: 'Choose products with minimal packaging and ocean-friendly certifications.',
    impact: 'Reduces waste and supports conservation',
  },
  {
    icon: Bike,
    title: 'Lower Carbon Footprint',
    description: 'Use public transport or bike when possible to reduce emissions.',
    impact: 'Prevents ocean acidification',
  },
  {
    icon: Leaf,
    title: 'Support Conservation',
    description: 'Join local beach cleanups and support marine conservation organizations.',
    impact: 'Directly helps marine ecosystems',
  },
];

export function ActionItems() {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold">Take Action</h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        {actions.map((action, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 space-y-4
              transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-blue-100
                  flex items-center justify-center text-blue-600">
                  <action.icon className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  {action.title}
                </h4>
                <p className="text-gray-600 mb-2">{action.description}</p>
                <p className="text-sm text-blue-600 font-medium">
                  Impact: {action.impact}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}