import React from 'react';
import './App.css';
import { Countdown, Events, FAQ, Footer, Gallery, Hero, OurStory, RSVP, Venue, Welcome } from './components/sections';

export const App: React.FC = () => {
  return (
    <div className="app-root">
      <main id="main-content">
        <Hero />
        <Welcome />
        <OurStory />
        <Countdown />
        <Events />
        <Gallery />
        <Venue />
        <RSVP />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
