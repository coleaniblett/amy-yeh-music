import React from 'react';
import AmyGuitar from '../AmyGuitar.gif';

export const Hero = () => {
  return (
    <div className="row min-vh-100" 
      style={{
        backgroundImage: `url(${AmyGuitar})`, 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat"
      }}
    >
      <p className="text-white text-center">
        Hero
      </p>
    </div>
  );
}