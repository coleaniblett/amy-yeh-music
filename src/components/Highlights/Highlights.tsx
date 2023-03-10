import React from 'react';
import AmyCommercial from '../AmyCommercial.mp4';

export const Highlights: React.FC = () => {
  return (
    <div className="highlights row bg-black"
      style={{maxHeight:"1%"}}
    >
        <div className="video col-md-7">
          <video height="35%" controls
            style={{
              marginLeft: 80,
              marginTop: 80
            }}
          >
            <source src={AmyCommercial} type="video/mp4"></source>
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="text col-md-5 text-white bg-black"
          style={{aspectRatio:"1/1"}}
        >
          <h3 className="text-center m-auto"
            style={{fontFamily: "sans-serif", fontSize: 40, paddingTop: "30%", maxWidth: "50%" }}
          >
            Composing <span>original</span> commercial music
          </h3>
        </div>
    </div>
  );
}