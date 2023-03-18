import React from 'react';
import KatocheDemo from '../../assets/KatocheDemo.mp4';

export const HighlightsRight: React.FC = () => {
  return (
    <div className="highlights-right row bg-black">
      <div className="text-container col-md-5 text-white">
        <h3 className="highlight-text text-right m-auto">
          Bringing <span>life</span> to virtual worlds
        </h3>
      </div>
      <div className="media-container col-md-7">
        <video className="media" controls>
          <source src={KatocheDemo} type="video/mp4"></source>
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}