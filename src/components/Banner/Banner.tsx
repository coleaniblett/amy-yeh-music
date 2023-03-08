import React from 'react';

export const Banner = () => {
  return (
    <header 
      className="header p-2 row position-absolute start-0 top-0 end-0"
      style={{zIndex: 1}}
    >
      <div className="d-flex justify-content-between align-items-center">
        <p className="text-white fs-5 fw-bold m-3">
          Amy Yeh Music
        </p>
        <div>
          <button className="text-white bg-black">
            menu
          </button>
        </div>
      </div>
    </header>
  );
}