import React from 'react';
import './App.css';
import { Hero } from '../Hero/Hero';
import { Intro } from '../Intro/Intro';
import { Highlights } from '../Highlights/Highlights';
import { Contact } from '../Contact/Contact';

/*
  TO-DO
  1. Fix clipping at low end of slider
  2. Increase size of play/pause buttons to full body
  3. Fix issue with onLeave removal of video controls not always working
*/

const App: React.FC = () => {
  return (
    <div className="App">
      <Hero />
      <div className="main">
        <Intro />
        <Highlights />
        <Contact />
      </div>
    </div>
  );
}

export default App;
