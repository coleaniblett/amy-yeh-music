import React from 'react';
import AmyCommercial from '../AmyCommercial.mp4';

export const Highlights: React.FC = () => {
  return (
    <div className="highlights row bg-black">
        <div className="video col-md-7">
        <video controls
            style={{
              objectFit: "initial",
              width: "90%",
              marginLeft: "5%",
              marginTop: "10%"
            }}
          >
            <source src={AmyCommercial} type="video/mp4"></source>
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="text col-md-5 text-white"
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