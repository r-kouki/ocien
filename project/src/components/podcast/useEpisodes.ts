import { useState } from 'react';
import { Episode } from './types';

const episodes: Episode[] = [
  {
    id: '1',
    title: 'The Ocean\'s Breath: How Marine Life Oxygenates Our Planet',
    description: 'Discover how phytoplankton and marine plants produce the oxygen we breathe and their crucial role in Earth\'s respiratory system.',
    duration: '45:30',
    date: 'Mar 15, 2024',
    thumbnail: 'https://images.unsplash.com/photo-1551244072-5d12893278ab',
  },
  {
    id: '2',
    title: 'Ocean Currents: Earth\'s Circulatory System',
    description: 'Explore how ocean currents regulate global climate and distribute nutrients, much like our own bloodstream.',
    duration: '38:45',
    date: 'Mar 8, 2024',
    thumbnail: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
  },
  {
    id: '3',
    title: 'The Deep Blue: Pressure Systems and Human Diving',
    description: 'Understanding how our bodies adapt to extreme pressures and what we can learn from marine mammals.',
    duration: '42:15',
    date: 'Mar 1, 2024',
    thumbnail: 'https://images.unsplash.com/photo-1682686580950-960d1d513532',
  },
];

export function useEpisodes() {
  const [activeEpisode, setActiveEpisode] = useState(episodes[0]);

  return {
    episodes,
    activeEpisode,
    setActiveEpisode,
  };
}