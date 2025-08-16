import React, { useState, useEffect, useCallback } from 'react';
import { TranslationProvider, useTranslations } from './context/TranslationContext';

// Import section components
import Header from './sections/Header';
import HeroSection from './sections/HeroSection';
import TechnologySection from './sections/TechnologySection';
import SolutionsSection from './sections/SolutionsSection';
import OurDataSourcesSection from './sections/OurDataSourcesSection';
import CompanySection from './sections/CompanySection';
import TeamSection from './sections/TeamSection';
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';
const App: React.FC = () => {
  const { currentLanguage } = useTranslations();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="font-inter antialiased overflow-x-hidden text-gray-900" lang={currentLanguage}>
      <Header
        isScrolled={isScrolled}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        closeMenu={closeMenu}
      />

      <HeroSection />
      <TechnologySection />
      <SolutionsSection />
      <OurDataSourcesSection />
      <CompanySection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

const WrappedApp: React.FC = () => (
  <TranslationProvider>
    <App />
  </TranslationProvider>
);

export default WrappedApp;