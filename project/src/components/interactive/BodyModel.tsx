import React from 'react';
import { Info } from 'lucide-react';
import { SystemConnection } from './SystemConnection';

const bodySystems = [
  {
    id: 'respiratory',
    name: 'Respiratory System',
    position: 'top-1/3 left-1/2',
    oceanConnection: {
      title: 'Ocean as Earth\'s Lungs',
      description: 'Like our lungs exchange gases for breathing, oceans produce over 50% of Earth\'s oxygen through phytoplankton photosynthesis.',
      image: 'https://images.unsplash.com/photo-1524704796725-9fc3044a58b2',
    },
  },
  {
    id: 'circulatory',
    name: 'Circulatory System',
    position: 'top-1/2 left-1/2',
    oceanConnection: {
      title: 'Ocean Currents as Earth\'s Blood Flow',
      description: 'Ocean currents distribute heat and nutrients globally, similar to how our circulatory system moves blood throughout our body.',
      image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7',
    },
  },
  {
    id: 'digestive',
    name: 'Digestive System',
    position: 'top-2/3 left-1/2',
    oceanConnection: {
      title: 'Ocean\'s Nutrient Cycling',
      description: 'The ocean\'s food web and nutrient cycling mirror our digestive system\'s processing of nutrients.',
      image: 'https://images.unsplash.com/photo-1544552866-d3ed42536d1f',
    },
  },
];

export function BodyModel() {
  const [activeSystem, setActiveSystem] = React.useState(bodySystems[0]);
  
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="relative aspect-[3/4] bg-blue-50 rounded-xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1564711976636-b5f844c5871d"
          alt="Human body outline"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="relative h-full">
          {bodySystems.map((system) => (
            <button
              key={system.id}
              onClick={() => setActiveSystem(system)}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${system.position}
                ${activeSystem.id === system.id ? 'scale-125' : 'scale-100'}
                w-12 h-12 rounded-full bg-white shadow-lg
                flex items-center justify-center
                transition-all duration-300 hover:scale-110
                border-2 ${activeSystem.id === system.id ? 'border-blue-500' : 'border-blue-200'}`}
            >
              <Info className={`w-6 h-6 ${activeSystem.id === system.id ? 'text-blue-500' : 'text-blue-300'}`} />
            </button>
          ))}
        </div>
      </div>
      
      <SystemConnection system={activeSystem} />
    </div>
  );
}