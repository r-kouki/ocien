import React from 'react';
import { Droplets, Trash2, Fish, ThermometerSun } from 'lucide-react';

const stats = [
  {
    icon: Trash2,
    value: '8M',
    label: 'Tons of Plastic',
    description: 'Enter oceans yearly',
  },
  {
    icon: Fish,
    value: '90%',
    label: 'Large Fish',
    description: 'Population declined',
  },
  {
    icon: ThermometerSun,
    value: '30%',
    label: 'CO₂ Absorbed',
    description: 'By oceans annually',
  },
  {
    icon: Droplets,
    value: '1°C',
    label: 'Temperature Rise',
    description: 'In ocean surface',
  },
];

export function ImpactStats() {
  return (
    <div className="grid md:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-xl p-6 text-center space-y-4
            transform hover:-translate-y-1 transition-all duration-300"
        >
          <div className="inline-flex items-center justify-center w-12 h-12
            rounded-full bg-blue-100 text-blue-600 mx-auto">
            <stat.icon className="w-6 h-6" />
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-sm font-medium text-blue-600">{stat.label}</div>
            <div className="text-sm text-gray-500">{stat.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}