import React, { useState } from 'react';
import { Sections, sectionTitles } from '../sections';
import '../styles/Nav.css';
import '../styles/App.css';

const Nav: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav>
        <div className="logo"><a href="/">Mingzhe Yang</a></div>
        <div className="nav-links-container">
          <ul className="nav-links">
            {Object.values(Sections).map((section) => (
              <li key={section}><a href={`#${section}`}>{sectionTitles[section]}</a></li>
            ))}
          </ul>
        </div>
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

