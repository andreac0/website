import React from 'react';
import { Menu, X } from 'lucide-react';
import Button from '../components/Button';
import NavbarLink from '../components/NavbarLink';
import LanguageSwitcher from '../components/LanguageSwitcher'; // Import the new component
import { useTranslations } from '../context/TranslationContext';

interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, toggleMenu, closeMenu }) => {
  const { t, changeLanguage, currentLanguage } = useTranslations();

  // Removed availableLanguages and handleLanguageChange as they are now in LanguageSwitcher
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out bg-gray-900 py-3`}>
      <nav className="container mx-auto px-4 flex justify-between items-center max-w-screen-xl">
        <a href="/" className="flex-shrink-0 mr-auto">
          <img
            id="logo"
            src={'/images/logoLegisWhite.png'} // Use the white logo
            alt="LegisRatio Logo"
            className="h-10 w-auto transition-all duration-300 ease-in-out"
            onError={(e) => { e.currentTarget.src = '/images/logoLegisWhite.png'; }} // Fallback to dark logo if white is not found
          />
        </a>

        <div className="md:hidden">
          <button
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            aria-controls="mainNav"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className={`h-7 w-7 transition-all duration-300 ease-in-out text-white`} />
            ) : (
              <Menu className={`h-7 w-7 transition-all duration-300 ease-in-out text-white`} />
            )}
          </button>
        </div>

        <div className={`fixed top-0 right-0 h-full w-64 bg-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out md:relative md:w-auto md:h-auto md:bg-transparent md:shadow-none ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0 z-50`}>
          <ul className="flex flex-col pt-20 px-6 space-y-4 md:flex-row md:pt-0 md:px-0 md:space-y-0 md:space-x-6 md:items-center">
            <li className="absolute top-4 right-4 md:hidden">
              <button
                className="p-2 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                onClick={closeMenu}
              >
                <X className="h-7 w-7 text-white" />
              </button>
            </li>
            <NavbarLink to="#technology" closeMenu={closeMenu}>{t("technology")}</NavbarLink>
            <NavbarLink to="#company" closeMenu={closeMenu}>{t("company")}</NavbarLink>
            <NavbarLink to="#contact" closeMenu={closeMenu}>{t("contact_us")}</NavbarLink>
            {/* Replace the language buttons/select with the new LanguageSwitcher component */}
            <li className="pt-4 md:pt-0">
              <LanguageSwitcher />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

