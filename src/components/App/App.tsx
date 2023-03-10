import React from 'react';
import { Banner } from'../Banner/Banner';
import { Hero } from '../Hero/Hero';
import { Highlights } from '../Highlights/Highlights';


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
