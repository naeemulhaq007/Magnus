import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="animate-fadein">
      <p>Company</p>
      <nav>
        <Link to="/landlords">Landlord Solutions</Link>
        <Link to="/multi-family">Property Management</Link>
        <Link to="/pilot">Pilot Program</Link>
        <Link to="/contact">Contact Form</Link>
      </nav>
      {/* Uncomment and update social icons if needed */}
      {/* <div className="social-icons">
        <a href="#" aria-label="Facebook">F</a>
        <a href="#" aria-label="Twitter">T</a>
        <a href="#" aria-label="LinkedIn">L</a>
      </div> */}
    </footer>
  );
};

export default Footer;
