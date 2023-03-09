import React from 'react';
import AmyCommercial from '../AmyCommercial.mp4';

export const Highlights = () => {
  return (
    <div className="highlights row bg-black"
      style={{height:500}}
    >
        <div className="video col-md">
          <iframe 
            width="560" 
            height="315" 
            src={AmyCommercial}
            frameBorder="0" 
            allow="autoplay; encrypted-media" 
            allowFullScreen
            style = {{
              paddingTop: "20%"
            }}
          >
          </iframe>
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