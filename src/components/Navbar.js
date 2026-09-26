import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
          Ravi Box Industries
        </NavLink>

        <button
          className={`navbar-burger ${isOpen ? 'is-active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </button>

        <ul className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
          <li className="navbar-item">
            <NavLink to="/" className="navbar-link" onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/about" className="navbar-link" onClick={closeMenu}>
              About
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/products" className="navbar-link" onClick={closeMenu}>
              Products
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/contact" className="navbar-link" onClick={closeMenu}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
