import React from 'react';
import { Banner } from'../Banner/Banner';
import { Hero } from '../Hero/Hero';
import { Intro } from '../Intro/Intro';
import { Highlights } from '../Highlights/Highlights';
import { Contact } from '../Contact/Contact';

/*
  TO-DO
  1. Add drop-down menu
  2. Style intro
  3. Add links to Contact
*/

const App: React.FC = () => {
  return (
    <div className="App">
      <Banner />
      <Hero />
      <Intro />
      <Highlights />
      <Contact />
    </div>
  );
}

export default App;
