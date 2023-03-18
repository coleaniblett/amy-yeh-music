import './Highlights.css';
import React from 'react';
import AmyCommercial from '../../assets/AmyCommercial.mp4';

export const Highlights: React.FC = () => {
  return (
    <div className="highlights row bg-black">
        <div className="media-container col-md-7">
          <video className="media" controls>
            <source src={AmyCommercial} type="video/mp4"></source>
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="text-container text-left col-md-5 text-white">
          <h3 className="highlight-text text-left m-auto">
            Composing <span>original</span> commercial music
          </h3>
        </div>
    </div>
  );
}