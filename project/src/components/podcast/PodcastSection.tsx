import React from 'react';
import { EpisodeList } from './EpisodeList';
import { MediaPlayer } from './MediaPlayer';
import { useEpisodes } from './useEpisodes';

export function PodcastSection() {
  const { episodes, activeEpisode, setActiveEpisode } = useEpisodes();

  return (
    <div className="space-y-8">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">
          Podcast & Médias
        </h2>
        <p className="text-gray-600">
          Explore our collection of podcasts featuring marine biologists, oceanographers,
          and environmental experts discussing the intricate relationship between humans
          and the ocean.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <EpisodeList 
            episodes={episodes}
            activeEpisode={activeEpisode}
            onEpisodeSelect={setActiveEpisode}
          />
        </div>
        <div className="lg:col-span-1">
          <MediaPlayer episode={activeEpisode} />
        </div>
      </div>
    </div>
  );
}