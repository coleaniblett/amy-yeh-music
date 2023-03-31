import React from 'react';
import { Video } from '../Video/Video';

interface Props {
  media: any;
  text: string;
}

export const HighlightsLeft: React.FC<Props> = ({media, text}: Props) => {
  return (
    <div className="highlights d-flex flex-wrap">
      <div className="media-container col-md-7">
        <Video media={media} />
      </div>
      <div className="text-container text-left col-md-5 text-white">
        <h3 className="highlight-text text-left m-auto">
          {text}
      </h3>
      </div>
    </div>
  );
}