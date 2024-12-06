import React from 'react';
import { Clock, Calendar } from 'lucide-react';
import { Episode } from './types';

interface EpisodeListProps {
  episodes: Episode[];
  activeEpisode: Episode;
  onEpisodeSelect: (episode: Episode) => void;
}

export function EpisodeList({ episodes, activeEpisode, onEpisodeSelect }: EpisodeListProps) {
  return (
    <div className="space-y-4">
      {episodes.map((episode) => (
        <button
          key={episode.id}
          onClick={() => onEpisodeSelect(episode)}
          className={`w-full text-left p-4 rounded-lg transition-all
            ${activeEpisode.id === episode.id
              ? 'bg-blue-50 border-2 border-blue-200'
              : 'bg-white hover:bg-blue-50/50 border-2 border-transparent'
            }`}
        >
          <div className="flex items-start gap-4">
            <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src={episode.thumbnail}
                alt={episode.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 space-y-2">
              <h3 className="font-semibold text-lg text-gray-900">
                {episode.title}
              </h3>
              <p className="text-gray-600 line-clamp-2">
                {episode.description}
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {episode.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {episode.date}
                </span>
              </div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}