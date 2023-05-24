import './Hero.css';
import React from 'react';
import { Navbar } from '../Navbar/Navbar';

export const Hero: React.FC = () => {
  return (
    <div className="hero position-relative min-vh-100 p-4">
      <Navbar />
      <div className="position-absolute top-50 text-white">
        <h1 className="display-1">
          Tzu-chi "Amy" Yeh
        </h1>
        <h3 className="display-6 m-3">
          Keyboardist, guitarist, composer
        </h3>
      </div>
    </div>
  );
}