import React from 'react';

interface Props {
  media: any;
  text: string;
}

export const HighlightsRight: React.FC<Props> = ({media, text}: Props) => {
  return (
    <div className="highlights d-flex">
      <div className="text-container text-right col-md-5 text-white">
        <h3 className="highlight-text text-right m-auto">
          {text}
        </h3>
      </div>
      <div className="media-container col-md-7">
        <video className="media" controls>
          <source src={media} type="video/mp4"></source>
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}