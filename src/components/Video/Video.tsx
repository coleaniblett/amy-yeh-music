import React, { useState } from 'react';
import './Video.css';


interface Props {
  media: any
}

export const Video: React.FC<Props> = ({media}: Props) => {
  const [hover, setHover] = useState(false);

  const handleHover =() => {
    setHover(true);
    console.log("hover set");
  }

  const handleLeave = () => {
    setHover(false);
  }

return (
    <div className="video">
      <video className="media" controls>
        <source src={media} type="video/mp4"></source>
        Your browser does not support the video tag.
      </video>
    </div>
  );
}