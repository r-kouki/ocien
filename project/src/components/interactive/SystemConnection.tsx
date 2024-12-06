import React from 'react';

interface SystemConnectionProps {
  system: {
    name: string;
    oceanConnection: {
      title: string;
      description: string;
      image: string;
    };
  };
}

export function SystemConnection({ system }: SystemConnectionProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-gray-900">{system.name}</h3>
        <p className="text-lg text-blue-600">{system.oceanConnection.title}</p>
      </div>
      
      <div className="aspect-video rounded-lg overflow-hidden">
        <img
          src={system.oceanConnection.image}
          alt={system.oceanConnection.title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <p className="text-gray-600 leading-relaxed">
        {system.oceanConnection.description}
      </p>
      
      <div className="pt-4">
        <button className="bg-blue-50 text-blue-600 px-6 py-2 rounded-lg font-medium
          hover:bg-blue-100 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
}