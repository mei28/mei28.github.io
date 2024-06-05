import React, { useEffect, useState } from 'react';
import '../styles/FooterSection.css';
import '../styles/Nav.css';

import { Sections, sectionTitles } from '../sections';

const Footer: React.FC = () => {
  const [thisYear, _setThisYear] = useState<number>(new Date().getFullYear());

  return (
    <footer>
      <p>Copyright &#169; <span className='thisYear'>{thisYear}</span> Mingzhe Yang. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;

