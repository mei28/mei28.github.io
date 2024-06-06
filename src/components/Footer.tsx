import React, { useEffect, useState } from 'react';

const Footer: React.FC = () => {
  const [thisYear, _setThisYear] = useState<number>(new Date().getFullYear());

  return (
    <footer className="h-64 mx-4 md:h-56 lg:h-52 xl:h-48 xl:mx-2.5 text-center">
      <p className="text-center text-base sm:text-sm md:text-xs lg:text-base xl:text-sm">
        Copyright &#169; <span className='thisYear'>{thisYear}</span> Mingzhe Yang. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;

