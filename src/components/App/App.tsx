import React from 'react';
import { Banner } from'../Banner/Banner';
import { Hero } from '../Hero/Hero';
import { Highlights } from '../Highlights/Highlights';
import { HighlightsRight } from '../HighlightsRight/HighlightsRight';

const App: React.FC = () => {
  return (
    <div className="App container-fluid">
      <Banner />
      <Hero />
      <Highlights />
      <HighlightsRight />
    </div>
  );
}

export default App;
