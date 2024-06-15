import React, { useState, useEffect } from 'react';
import { Sections, sectionTitles } from '../sections';
import { Link, useLocation } from 'react-router-dom';

const Nav: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

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

  // メニューのリンクをクリックした後にセクションにスクロールする
  const handleLinkClick = (section: Sections) => {
    if (location.pathname === '/') {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = `/#${section}`;
    }
    setMenuOpen(false);
  };

  return (
    <header className="fixed w-full top-0 left-0 bg-white z-50 shadow-md">
      <nav className="flex justify-between items-center py-4 px-8">
        <div className="text-2xl font-bold">
          <Link to="/" className="text-black no-underline hover:text-gray-600">Mingzhe Yang</Link>
        </div>
        <div className="hidden md:flex md:items-center">
          <ul className="flex gap-8 list-none text-lg">
            {Object.values(Sections).map((section) => (
              <li key={section}>
                <Link
                  to={`/#${section}`}
                  onClick={() => handleLinkClick(section)}
                  className="text-black no-underline transition-colors duration-300 hover:text-gray-600"
                >
                  {sectionTitles[section]}
                </Link>
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
                  <li key={section} onClick={(event) => handleLinkClick(section)}>
                    <Link
                      to={`/#${section}`}
                      className="block p-4 text-center text-lg text-black no-underline transition-colors duration-300 hover:text-gray-600"
                    >
                      {sectionTitles[section]}
                    </Link>
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

