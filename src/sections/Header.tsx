import React from 'react';
import { Menu, X } from 'lucide-react';
import Button from '../components/Button';
import NavbarLink from '../components/NavbarLink';
import LanguageSwitcher from '../components/LanguageSwitcher'; // Import the new component
import { useTranslations } from '../context/TranslationContext';

interface HeaderProps {
  isScrolled: boolean;
  isMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ isScrolled, isMenuOpen, toggleMenu, closeMenu }) => {
  const { t, changeLanguage, currentLanguage } = useTranslations();

  // Removed availableLanguages and handleLanguageChange as they are now in LanguageSwitcher
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-white bg-opacity-90 backdrop-blur-lg shadow-lg py-3' : 'bg-transparent py-4'}`}>
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="flex-shrink-0">
          <img
            id="logo"
            src={isScrolled ? '/images/logoLegis.png' : '/images/logoLegisWhite.png'}
            alt="LegisRatio Logo"
            className="h-10 w-auto transition-all duration-300 ease-in-out"
            onError={(e) => { e.currentTarget.src = isScrolled ? '/images/logoLegis.png' : '/images/logoLegisWhite.png'; }}
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
              <X className={`h-7 w-7 transition-all duration-300 ease-in-out ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`h-7 w-7 transition-all duration-300 ease-in-out ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>

        <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out md:relative md:w-auto md:h-auto md:bg-transparent md:shadow-none ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0`}>
          <ul className="flex flex-col pt-20 px-6 space-y-4 md:flex-row md:pt-0 md:px-0 md:space-y-0 md:space-x-6 md:items-center">
            <li className="absolute top-4 right-4 md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                onClick={closeMenu}
              >
                <X className="h-7 w-7 text-gray-800" />
              </button>
            </li>
            <NavbarLink to="#technology" closeMenu={closeMenu} isScrolled={isScrolled}>{t("technology")}</NavbarLink>
            <NavbarLink to="#company" closeMenu={closeMenu} isScrolled={isScrolled}>{t("company")}</NavbarLink>
            <NavbarLink to="#contact" closeMenu={closeMenu} isScrolled={isScrolled}>{t("contact_us")}</NavbarLink>
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

