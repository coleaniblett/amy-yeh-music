import './Highlights.css';
import React from 'react';
import AmyCommercial from '../../assets/AmyCommercial.mp4';

export const Highlights: React.FC = () => {
  return (
    <div className="highlights row bg-black">
        <div className="video-container col-md-7">
          <video className="video" controls>
            <source src={AmyCommercial} type="video/mp4"></source>
            Your browser does not support the video tag.
          </video>
          <p>Test</p>
        </div>
        <div className="text col-md-5 text-white">
          <h3 className="highlight-text text-center m-auto">
            Composing <span>original</span> commercial music
          </h3>
        </div>
    </div>
  );
}