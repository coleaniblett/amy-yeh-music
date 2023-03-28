import React from 'react';
import { Video } from '../Video/Video';

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
        <Video media={media} />
      </div>
    </div>
  );
}