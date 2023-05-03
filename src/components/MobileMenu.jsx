import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/menu.css';

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="mobile-menu">
      <button type="button" className="menu-button" onClick={toggleMenu}>
        <div className={`hamburger ${menuOpen ? 'open' : ''}`}>
          <span />
          <span />
          <span />
        </div>
      </button>
      <div className={`menu-items ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="/home">
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link to="/reservations">
              <p>My Reservations</p>
            </Link>
          </li>
          <li>
            <Link to="/room/new">
              <p>Add Room</p>
            </Link>
          </li>
          <li>
            <Link to="/rooms/delete">
              <p>Remove Room</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
