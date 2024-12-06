import { useState } from 'react';
import { BodySystem } from './types';

const systems: BodySystem[] = [
  {
    id: 'respiratory',
    category: 'Gas Exchange',
    humanTitle: 'Respiratory System',
    oceanTitle: "Earth's Lungs",
    description: 'Just as our lungs exchange gases for breathing, the ocean produces over 50% of Earth\'s oxygen through microscopic marine plants called phytoplankton.',
    humanFunction: 'Exchanges oxygen and carbon dioxide for cellular respiration',
    oceanFunction: 'Produces oxygen through photosynthesis and absorbs CO2',
    oceanDescription: 'Marine phytoplankton are microscopic organisms that produce oxygen through photosynthesis, just like plants on land.',
    oceanImage: 'https://images.unsplash.com/photo-1524704796725-9fc3044a58b2',
    points: [
      { id: 'lungs-1', position: 'top-1/3 left-1/2' },
      { id: 'lungs-2', position: 'top-1/3 left-[45%]' },
    ],
  },
  {
    id: 'circulatory',
    category: 'Circulation',
    humanTitle: 'Circulatory System',
    oceanTitle: 'Global Ocean Currents',
    description: 'Ocean currents distribute heat and nutrients globally, similar to how our circulatory system moves blood throughout our body.',
    humanFunction: 'Transports nutrients, oxygen, and waste through blood vessels',
    oceanFunction: 'Moves heat, nutrients, and marine life across ocean basins',
    oceanDescription: 'Ocean currents form a global conveyor belt, regulating Earth\'s climate and supporting marine ecosystems.',
    oceanImage: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7',
    points: [
      { id: 'heart', position: 'top-1/2 left-[48%]' },
    ],
  },
  {
    id: 'filtration',
    category: 'Filtration',
    humanTitle: 'Kidney System',
    oceanTitle: 'Coastal Ecosystems',
    description: 'Like kidneys filtering blood, coastal ecosystems such as mangroves and coral reefs filter water and maintain ocean health.',
    humanFunction: 'Filters waste from blood and maintains fluid balance',
    oceanFunction: 'Filters pollutants and maintains water quality',
    oceanDescription: 'Mangroves, wetlands, and coral reefs act as natural filters, protecting coastal waters from pollution and excess nutrients.',
    oceanImage: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0',
    points: [
      { id: 'kidney-1', position: 'top-[60%] left-[45%]' },
      { id: 'kidney-2', position: 'top-[60%] left-[55%]' },
    ],
  },
];

export function useBodySystem() {
  const [activeSystem, setActiveSystem] = useState(systems[0]);

  return {
    systems,
    activeSystem,
    setActiveSystem,
  };
}