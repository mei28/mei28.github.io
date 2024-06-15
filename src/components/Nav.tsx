import React, { useState, useEffect } from 'react';
import { Sections, sectionTitles } from '../sections';

const Nav: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // クリックイベントのバブリングを防止
  const toggleMenu = (event: React.MouseEvent) => {
    event.stopPropagation();
    setMenuOpen(!menuOpen);
  };

  // メニュー外をクリックするとメニューを閉じる
  useEffect(() => {
    const closeMenu = () => {
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', closeMenu);

    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, [menuOpen]);

  return (
    <header className="fixed w-full top-0 left-0 bg-white z-50 shadow-md">
      <nav className="flex justify-between items-center py-4 px-8">
        <div className="text-2xl font-bold">
          <a href="/" className="text-black no-underline hover:text-gray-600">Mingzhe Yang</a>
        </div>
        <div className="hidden md:flex md:items-center">
          <ul className="flex gap-8 list-none text-lg">
            {Object.values(Sections).map((section) => (
              <li key={section}>
                <a href={`#${section}`} className="text-black no-underline transition-colors duration-300 hover:text-gray-600">
                  {sectionTitles[section]}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:hidden">
          <div className="cursor-pointer flex flex-col justify-between h-6 w-8" onClick={toggleMenu}>
            <span className={`block h-0.5 bg-black transition-transform ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block h-0.5 bg-black transition-opacity ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 bg-black transition-transform ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
          {menuOpen && (
            <div className="absolute top-full right-0 w-full bg-white shadow-md">
              <ul className="list-none p-0 m-0">
                {Object.values(Sections).map((section) => (
                  <li key={section} onClick={toggleMenu}>
                    <a href={`#${section}`} className="block p-4 text-center text-lg text-black no-underline transition-colors duration-300 hover:text-gray-600">
                      {sectionTitles[section]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;

