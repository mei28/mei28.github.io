import React, { useState, useEffect } from 'react';
import { Sections, sectionTitles } from '../sections';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@heroui/react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const Nav: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const toggleMenu = (event: React.MouseEvent) => {
    event.stopPropagation();
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const closeMenu = () => {
      if (menuOpen) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener('click', closeMenu);
  }, [menuOpen]);

  const handleLinkClick = (section: Sections) => {
    if (location.pathname === '/') {
      const element = document.getElementById(section);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/#${section}`;
    }
    setMenuOpen(false);
  };

  return (
    <header className="w-full fixed top-0 left-0 bg-background z-50 shadow-md">
      <nav className="flex justify-between items-center py-4 px-8">
        <span className="text-2xl font-bold text-foreground">
          <Link to="/" className="no-underline text-inherit">
            Mingzhe Yang
          </Link>
        </span>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {Object.values(Sections).map((section) => (
            <Link
              key={section}
              to={`/#${section}`}
              onClick={() => handleLinkClick(section)}
              className="no-underline"
            >
              <span className="text-foreground hover:text-foreground/60 transition-colors">
                {sectionTitles[section]}
              </span>
            </Link>
          ))}
          <Button
            isIconOnly
            variant="ghost"
            aria-label="Toggle Color Mode"
            onPress={toggleTheme}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <Button
            isIconOnly
            variant="ghost"
            aria-label="Toggle Color Mode"
            onPress={toggleTheme}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </Button>
          <Button
            isIconOnly
            variant="outline"
            aria-label="Toggle Menu"
            onPress={() => setMenuOpen(prev => !prev)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu (Dropdown) */}
      {menuOpen && (
        <div className="absolute top-full right-0 w-full bg-background shadow-md flex md:hidden flex-col">
          {Object.values(Sections).map((section) => (
            <Link
              key={section}
              to={`/#${section}`}
              onClick={(e) => {
                e.stopPropagation();
                handleLinkClick(section);
              }}
              className="no-underline"
            >
              <div className="py-4 text-center">
                <span className="text-foreground hover:text-foreground/60 transition-colors">
                  {sectionTitles[section]}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Nav;
