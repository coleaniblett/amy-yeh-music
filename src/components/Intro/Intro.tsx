import React from 'react';
import "./Intro.css";

export const Intro: React.FC = () => {
  return (
    <div className="intro">
      <div className="intro-text">
        <h4>Welcome</h4>
        <p>
          My name is Amy Yeh. Music has been my passion since I was a child, and I
          have been composing since I was a teenager.
        </p>
        <p>
          If you're a music lover, I invite you to listen to my compositions and 
          discover the unique and capivating world of my music.
        </p>
        <p>
          Thank you for visiting my page, and I hope you enjoy your stay.
        </p>
      </div>
    </div>
  );
}