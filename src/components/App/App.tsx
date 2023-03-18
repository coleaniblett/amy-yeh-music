import React from 'react';
import { Banner } from'../Banner/Banner';
import { Hero } from '../Hero/Hero';
import { Highlights } from '../Highlights/Highlights';
import { HighlightsRight } from '../HighlightsRight/HighlightsRight';
import { HighlightsLeft } from '../HighlightsLeft/HighlightsLeft';

import AmyCommercial from '../../assets/AmyCommercial.mp4';

const App: React.FC = () => {
  return (
    <div className="App container-fluid">
      <Banner />
      <Hero />
      <Highlights />
    </div>
  );
}

export default App;
