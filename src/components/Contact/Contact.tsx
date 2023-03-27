import React from 'react';
import './Contact.css';

export const Contact: React.FC = () => {
  return (
    <div className="contact d-flex p-3 text-white bg-black text-center">
      <ul>
        <li className="p-2 col"><a href="mailto:amyyeh3391@gmail.com">Email</a></li>
        <li className="p-2 col"><a href="https://soundcloud.com/search?q=amy%20yeh">Soundcloud</a></li>
        <li className="p-2 col"><a href="tel:14083071203">Phone</a></li>
      </ul>
    </div>
  );
}