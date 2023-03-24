import React from 'react';
import './App.css';
import { Banner } from'../Banner/Banner';
import { Hero } from '../Hero/Hero';
import { Intro } from '../Intro/Intro';
import { Highlights } from '../Highlights/Highlights';
import { Contact } from '../Contact/Contact';

/*
  TO-DO
  1. Add drop-down menu
  2. Add links to Contact
  4. Customize video controls
  5. Font consistency
*/

const App: React.FC = () => {
  return (
    <div className="App">
      <Banner />
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
