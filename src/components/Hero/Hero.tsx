import './Hero.css';
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="hero row position-relative min-vh-100">
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