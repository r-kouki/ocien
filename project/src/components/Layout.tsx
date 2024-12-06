import React from 'react';
import { Navigation } from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
  onNavigate: (page: string) => void;
}

export function Layout({ children, onNavigate }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <Navigation onNavigate={onNavigate} />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}