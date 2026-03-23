import React from 'react';

const Footer: React.FC = () => {
  const thisYear = new Date().getFullYear();

  return (
    <footer className="h-48 md:h-40 mx-4 xl:mx-2.5 text-center flex items-center justify-center">
      <p className="text-sm md:text-base">
        &copy; {thisYear} Mingzhe Yang. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
