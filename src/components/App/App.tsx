import React from 'react';
import { Banner } from'../Banner/Banner';
import { Hero } from '../Hero/Hero';
import { Bio } from '../Bio/Bio';
import { Music } from '../Music/Music';
import { Links } from '../Links/Links';


function App() {
  return (
    <div className="App">
      <Banner />
      <div className="container min-vh-100">
        <Hero />
        <Bio />
        <Music />
        <Links />
      </div>
    </div>
  );
}

export default App;
