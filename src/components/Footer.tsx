import React, { useEffect, useState } from 'react';
import '../styles/FooterSection.css';
import '../styles/Nav.css';

import { Sections, sectionTitles, getNextSection } from '../sections';

const Footer: React.FC = () => {
  const [thisYear, setThisYear] = useState<number>(new Date().getFullYear());

  return (
    <footer>
      <nav>
        <div className='nav-links-container'>
          <ul className="nav-links">
            {Object.values(Sections).map((section) => (
              <li key={section}><a href={`#${section}`}>{sectionTitles[section]}</a></li>
            ))}
          </ul>
        </div>
      </nav>
      <p>Copyright &#169; <span className='thisYear'>{thisYear}</span> Mingzhe Yang. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;

