import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src="/logo.png" alt="ebookkeepings Logo" height="40" />
          </Link>
          {/* <Link to="/">ebookkeepings</Link> */}
        </div>
        <nav className="nav">
          <Link 
            to="/" 
            className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </Link>
          <Link 
            to="/listing" 
            className={location.pathname === '/listing' ? 'nav-link active' : 'nav-link'}
          >
            Bookkeepers
          </Link>
          <Link 
            to="/register" 
            className={location.pathname === '/register' ? 'nav-link active' : 'nav-link'}
          >
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;