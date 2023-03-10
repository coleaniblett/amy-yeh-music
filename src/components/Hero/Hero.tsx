import React from 'react';
import AmyGuitar from '../AmyGuitar.gif';

export const Hero: React.FC = () => {
  return (
    <div className="row position-relative min-vh-100" 
      style={{
        backgroundImage: `url(${AmyGuitar})`, 
        backgroundSize: "cover", 
        backgroundPosition: "right", 
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="position-absolute top-50 text-white">
        <h1 className="display-1">
          Tzu-chi "Amy" Yeh
        </h1>
        <h3 className="display-6">
          Keyboardist, guitarist, composer
        </h3>
      </div>
    </div>
  );
}