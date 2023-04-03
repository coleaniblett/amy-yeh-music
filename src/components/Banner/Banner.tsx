import './Banner.css';
import React from 'react';
import { DropdownMenu } from '../DropdownMenu/DropdownMenu';

export const Banner: React.FC = () => {
  return (
    <header 
      className="header p-2 position-absolute start-0 top-0 end-0">
      <div className="d-flex justify-content-between align-items-center">
        <p className="text-white fs-5 fw-bold m-3">
          Amy Yeh Music
        </p>
        <div>
          <DropdownMenu />
        </div>
      </div>
    </header>
  );
}