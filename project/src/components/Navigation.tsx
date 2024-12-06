import React from 'react';
import { Waves, Brain, Podcast, Heart } from 'lucide-react';

interface NavigationProps {
  onNavigate: (page: string) => void;
}

export function Navigation({ onNavigate }: NavigationProps) {
  const [active, setActive] = React.useState('home');

  const links = [
    { id: 'home', label: 'Accueil', icon: Waves },
    { id: 'interactive', label: 'Modèle Interactif', icon: Brain },
    { id: 'podcast', label: 'Podcast & Médias', icon: Podcast },
    { id: 'impact', label: 'Impact', icon: Heart },
  ];

  const handleClick = (id: string) => {
    setActive(id);
    onNavigate(id);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-blue-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            {links.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => handleClick(id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors
                  ${active === id 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}