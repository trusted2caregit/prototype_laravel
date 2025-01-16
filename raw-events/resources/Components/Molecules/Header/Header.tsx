// Header.tsx
import React, { useState } from 'react';
import './header.scss';
import MainNav from '../MainNav/MainNav';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };


  return (
    <>
    <header className="header">
      <nav className={`nav ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
      <MainNav />
      </nav>
      <div className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
    {isMobileMenuOpen && <MainNav />}
    </>
  );
};

export default Header;
