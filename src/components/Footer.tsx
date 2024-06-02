import React, { useEffect, useState } from 'react';
import '../styles/FooterSection.css';
import '../styles/Nav.css';

const Footer: React.FC = () => {
  const [thisYear, setThisYear] = useState<number>(new Date().getFullYear());

  return (
    <footer>
      <nav>
        <div className="nav-links-container">
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <p>Copyright &#169; <span className='thisYear'>{thisYear}</span> Mingzhe Yang. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;

