import React from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { Episode } from './types';

interface MediaPlayerProps {
  episode: Episode;
}

export function MediaPlayer({ episode }: MediaPlayerProps) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  const togglePlayback = () => setIsPlaying(!isPlaying);

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm space-y-4 sticky top-24">
      <div className="aspect-square rounded-lg overflow-hidden mb-4">
        <img
          src={episode.thumbnail}
          alt={episode.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold text-lg">{episode.title}</h3>
        <p className="text-sm text-gray-500">{episode.date}</p>
      </div>

      <div className="space-y-2">
        <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between text-sm text-gray-500">
          <span>0:00</span>
          <span>{episode.duration}</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <button className="p-2 text-gray-400 hover:text-blue-500 transition-colors">
          <SkipBack className="w-5 h-5" />
        </button>
        <button
          onClick={togglePlayback}
          className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center
            hover:bg-blue-600 transition-colors"
        >
          {isPlaying ? (
            <Pause className="w-6 h-6" />
          ) : (
            <Play className="w-6 h-6" />
          )}
        </button>
        <button className="p-2 text-gray-400 hover:text-blue-500 transition-colors">
          <SkipForward className="w-5 h-5" />
        </button>
      </div>

      <div className="flex items-center gap-2">
        <Volume2 className="w-5 h-5 text-gray-400" />
        <div className="flex-1 h-1 bg-gray-100 rounded-full">
          <div className="w-3/4 h-full bg-blue-500 rounded-full" />
        </div>
      </div>
    </div>
  );
}