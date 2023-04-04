import React, { useState } from 'react';
import './DropdownMenu.css';

export const DropdownMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="dropdown">
      <button className="menu-button text-white bg-transparent shadow-none" onClick={toggleMenu}>
        Menu
      </button>
      {isOpen && (
        <ul className="dropdown-menu bg-black">
          <li><a href="#about">About</a></li>
          <li><a href="#music">Music</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      )}
    </div>
  );
}