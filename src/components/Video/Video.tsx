import React, { useState, useRef } from 'react';
import './Video.css';
import Play from '../../assets/Play.png';
import Pause from '../../assets/Pause.png';

interface Props {
  media: any
}

export const Video: React.FC<Props> = ({media}: Props) => {
  const [hover, setHover] = useState(false);
  const [play, setPlay] = useState(true);
  const [volume, setVolume] = useState(50);

  const videoRef = useRef(document.createElement("video"));

  const handleClick = () => {
    setPlay(!play);
    if (play) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputElement = event.target as HTMLInputElement;
    const volumeValue = parseInt(inputElement.value);
    setVolume(volumeValue);
    videoRef.current.volume = (volume / 100);
    console.log(videoRef.current.volume);
  }

  const showControls = () => {
    return (
      <div className="controls" onMouseLeave={handleLeave}>
        <button className="play" onClick={handleClick}>
          <img src={play ? Play: Pause} />
        </button>
        <div className="slidecontainer">
          <input type="range" min="-1" max="100" defaultValue={volume} className="slider" onChange={handleChange}/>
        </div>
      </div>
    )
  }

  const handleHover =() => {
    setHover(true);
    console.log("hover set");
  }

  const handleLeave = () => {
    setHover(false);
  }

  return (
    <div className="video">
      <video className="media" onMouseOver={handleHover} ref={videoRef}>
        <source src={media} type="video/mp4"></source>
        Your browser does not support the video tag.
      </video>
      {hover && showControls()}
    </div>
  );
}