import './Highlights.css';
import React from 'react';
import { HighlightsLeft } from '../HighlightsLeft/HighlightsLeft';
import { HighlightsRight } from '../HighlightsRight/HighlightsRight';

import AmyCommercial from '../../assets/AmyCommercial.mp4';
import KatocheDemo from '../../assets/KatocheDemo.mp4';

export const Highlights: React.FC = () => {
  return (
    <div className="highlights">
      <HighlightsLeft media={AmyCommercial} text="Composing original commercial music"/>
      <HighlightsRight media={KatocheDemo} text="Bringing life to virtual worlds"/>
      <HighlightsLeft media={AmyCommercial} text="Lorem Ipsum"/>
    </div>
  );
}