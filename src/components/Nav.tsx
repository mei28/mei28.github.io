import React, { useState } from 'react';
import { Sections, sectionTitles } from '../sections';
import '../styles/Nav.css';
import '../styles/App.css';
import '../styles/Hamburger.css';

const Nav: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav id="desktop-nav">
        <div className="logo">Mingzhe Yang</div>
        <div>
          <ul className="nav-links">
            {Object.values(Sections).map((section) => (
              <li key={section}><a href={`#${section}`}>{sectionTitles[section]}</a></li>
            ))}
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav ">
        <div className="logo">Mingzhe Yang</div>
        <div className="hamburger-menu">
          <div className={`hamburger-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`menu-links ${menuOpen ? 'open' : ''}`}>
            {Object.values(Sections).map((section) => (
              <li key={section}><a href={`#${section}`} onClick={toggleMenu}>{sectionTitles[section]}</a></li>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;

