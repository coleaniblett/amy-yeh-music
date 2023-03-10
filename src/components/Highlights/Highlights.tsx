import React from 'react';
import AmyCommercial from '../AmyCommercial.mp4';

export const Highlights = () => {
  return (
    <div className="highlights row bg-black"
      style={{height:500}}
    >
        <div className="video col-md">
          <video height="350" controls
            style={{
              marginLeft: 80,
              marginTop: 80
            }}
          >
            <source src={AmyCommercial} type="video/mp4"></source>
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="text col-md-5 text-white">
          <h3 className="text-center m-auto"
            style={{fontFamily: "sans-serif", fontSize: 40, paddingTop: "30%", maxWidth: "50%" }}
          >
            Composing <span>original</span> commercial music
          </h3>
        </div>
    </div>
  );
}