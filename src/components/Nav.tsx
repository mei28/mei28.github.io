import React, { useState, useEffect } from 'react';
import { Sections, sectionTitles } from '../sections';
import { Link, useLocation } from 'react-router-dom';
import { Box, Text, Flex, IconButton, VStack, HStack, useColorModeValue } from '@yamada-ui/react';
import { Menu, X } from '@yamada-ui/lucide';

const Nav: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const bg = useColorModeValue('white', 'gray.800');
  const color = useColorModeValue('black', 'white');

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
    <Box as="header" w="full" pos="fixed" top="0" left="0" bg={bg} zIndex="50" boxShadow="md">
      <Flex as="nav" justify="space-between" align="center" py="4" px="8">
        {/* Logo */}
        <Text fontSize="2xl" fontWeight="bold" color={color}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Mingzhe Yang
          </Link>
        </Text>

        {/* Desktop Menu (Visible on larger screens) */}
        <HStack display={{ base: "flex", md: "none" }} gap="8">
          {Object.values(Sections).map((section) => (
            <Link
              key={section}
              to={`/#${section}`}
              onClick={() => handleLinkClick(section)}
              style={{ textDecoration: 'none' }}
            >
              <Text color={color} _hover={{ color: "gray.600" }}>
                {sectionTitles[section]}
              </Text>
            </Link>
          ))}
        </HStack>

        {/* Mobile Menu Toggle (Visible on smaller screens) */}
        <Box display={{ base: "none", md: "block" }}>
          <IconButton
            aria-label="Toggle Menu"
            icon={menuOpen ? <X /> : <Menu />}
            onClick={toggleMenu}
            variant="outline"
            color={color}
          />
        </Box>
      </Flex>

      {/* Mobile Menu (Dropdown) */}
      {menuOpen && (
        <VStack
          pos="absolute"
          top="100%"
          right="0"
          w="full"
          bg={bg}
          boxShadow="md"
          gap="0"
          display={{ base: "none", md: "flex" }} // Only show on mobile
        >
          {Object.values(Sections).map((section) => (
            <Link
              key={section}
              to={`/#${section}`}
              onClick={(e) => {
                e.stopPropagation();
                handleLinkClick(section);
              }}
              style={{ textDecoration: 'none' }}
            >
              <Box py="4" textAlign="center">
                <Text color={color} _hover={{ color: "gray.600" }}>
                  {sectionTitles[section]}
                </Text>
              </Box>
            </Link>
          ))}
        </VStack>
      )}
    </Box>
  );
};

export default Nav;

