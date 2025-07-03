import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav className="container">
        <div className="logo animate-fadein">
          <span>Magnus &amp; Co.®</span>
        </div>
        <ul className="animate-slidein-down">
          <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/landlords" activeClassName="active">Landlords</NavLink></li>
          <li><NavLink to="/multi-family" activeClassName="active">Multi-Family</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
