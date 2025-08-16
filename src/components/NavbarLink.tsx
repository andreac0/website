// src/components/NavbarLink.tsx
import React from 'react';

interface NavbarLinkProps {
  to: string;
  children: React.ReactNode;
  closeMenu: () => void;
  isScrolled: boolean; // Add this prop
}


const NavbarLink: React.FC<NavbarLinkProps> = ({ to, children, closeMenu, isScrolled }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = to.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = 80; // Adjust if your header height changes
      const offsetPosition = targetElement.offsetTop - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      closeMenu(); // Close menu after navigation
    }
  };

  return (
    <li>




      <a
        className={`block px-4 py-2 rounded-lg text-base font-medium transition duration-300 ease-in-out md:px-3 md:py-2 md:hover:from-transparent md:hover:to-transparent md:hover:text-purple-700
          ${isScrolled ? 'text-gray-700 hover:bg-gradient-to-r hover:from-purple-100 hover:to-blue-100' : 'text-white hover:bg-white hover:bg-opacity-20'}
        `}
        href={to}
        onClick={handleClick}
      >
        {children}
      </a>
    </li>
  );
};

export default NavbarLink;