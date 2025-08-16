// src/components/NavbarLink.tsx
import React from 'react';

interface NavbarLinkProps {
  to: string;
  children: React.ReactNode;
  closeMenu: () => void;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ to, children, closeMenu }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = to.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = 80;
      const offsetPosition = targetElement.offsetTop - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      closeMenu();
    }
  };

  return (
    <li>
      <a
        className={`relative block px-4 py-2 text-base font-medium transition-all duration-300 ease-in-out
          md:px-3 md:py-2 md:rounded-lg
          text-white md:hover:text-purple-300 md:hover:bg-white md:hover:bg-opacity-10
          hover:bg-purple-50
          before:absolute before:bottom-0 before:left-1/2 before:h-0.5 before:bg-purple-500 before:transition-all before:duration-300 before:ease-in-out before:-translate-x-1/2
          before:w-0
          md:hover:before:w-full
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