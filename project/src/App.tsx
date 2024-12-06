import React from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/home/Hero';
import { Features } from './components/home/Features';
import { InteractiveModel } from './components/interactive/InteractiveModel';
import { PodcastSection } from './components/podcast/PodcastSection';
import { ImpactSection } from './components/impact/ImpactSection';

function App() {
  const [activePage, setActivePage] = React.useState('home');

  return (
    <Layout onNavigate={setActivePage}>
      {activePage === 'home' && (
        <>
          <Hero />
          <Features />
        </>
      )}
      {activePage === 'interactive' && <InteractiveModel />}
      {activePage === 'podcast' && <PodcastSection />}
      {activePage === 'impact' && <ImpactSection />}
    </Layout>
  );
}

export default App;