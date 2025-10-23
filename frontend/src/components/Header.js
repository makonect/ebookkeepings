import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/main.css';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src="/logo.png" alt="ebookkeepings Logo" height="40" loading="lazy" />
          </Link>
        </div>
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
          <Link to="/listing" className={location.pathname === '/listing' ? 'active' : ''}>Bookkeepers</Link>
          <Link to="/register" className="">Register</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!isMenuOpen)}>
          <svg width="30" height="30" fill="none" stroke="#ffffff" strokeWidth="2">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;