// src/App.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, Calendar, CheckSquare, Target, Mail, ArrowRight } from 'lucide-react';

import { TranslationProvider, useTranslations } from './context/TranslationContext';

import Button from './components/Button';
import Card from './components/Card';
import SectionHeading from './components/SectionHeading';
import NavbarLink from './components/NavbarLink';
import FeatureBlock from './components/FeatureBlock';
import ValueProposition from './components/ValueProposition';
import Publication from './components/Publication';
import TeamMember from './components/TeamMember';

const App: React.FC = () => {
  const { t, changeLanguage, currentLanguage } = useTranslations();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10); // A small threshold for elegance
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount to set initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="font-inter antialiased overflow-x-hidden text-gray-900" lang={currentLanguage}>
      {/* Tailwind CSS Script - Recommended to include in index.html or build process */}
      {/* <script src="https://cdn.tailwindcss.com"></script> */}

      {/* Header */}
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
              <NavbarLink to="#technology" closeMenu={closeMenu}>{t("technology")}</NavbarLink>
              <NavbarLink to="#company" closeMenu={closeMenu}>{t("company")}</NavbarLink>
              <NavbarLink to="#contact" closeMenu={closeMenu}>{t("contact_us")}</NavbarLink>
              <li className="flex items-center space-x-2 pt-4 md:pt-0">
                <Button
                  variant={currentLanguage === 'en' ? 'primary' : 'ghost'}
                  size="sm"
                  onClick={() => changeLanguage('en')}
                >
                  EN
                </Button>
                <Button
                  variant={currentLanguage === 'it' ? 'primary' : 'ghost'}
                  size="sm"
                  onClick={() => changeLanguage('it')}
                >
                  IT
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="primaSezione"
        className="relative flex items-center min-h-[800px] text-white overflow-hidden"
      >
        <div className="absolute inset-0" style= {{ backgroundImage: `url('/images/PolygonLuminary.svg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>

        <div className="container mx-auto px-4 z-10 text-center relative">
          <div className="flex flex-wrap items-center justify-center">
            <div className="w-full lg:w-9/12">
              <div className="animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
                  {t("title_empower_your_legal_searches")}
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-80 max-w-3xl mx-auto font-light">
                  {t("subtitle_we_simplify_regulatory")}
                </p>
                <Button
                  size="md"
                  icon={<ArrowRight size={20} />}
                  onClick={() => document.getElementById('technology')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {t("discover_more")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white -z-10"></div>
        <div className="container mx-auto px-4">
          <SectionHeading
            title={t("technology_and_solutions")}
            subtitle={t("subtitle_technology_and_solutions")}
          />
        </div>
      </section>

      <FeatureBlock
        title={t("advanced_search_engine")}
        subtitle1={t("subtitle_advanced_search_engine")}
        subtitle2={t("subtitle_advanced_search_engine_2")}
        imagePath="https://placehold.co/1920x1080/E0F2F7/000000?text=Abstract+AI+Search+Visual" // Updated placeholder for lighter background
        reverseLayout={false}
      />
      <FeatureBlock
        title={t("monitoring_system")}
        subtitle1={t("subtitle_monitoring_system")}
        subtitle2={t("subtitle_monitoring_system_2")}
        imagePath="https://placehold.co/1920x1080/E8F5E9/000000?text=Abstract+Monitoring+Visual" // Updated placeholder
        reverseLayout={true}
      />
      <FeatureBlock
        title={t("content_provision_service")}
        subtitle1={t("subtitle_content_provision_service")}
        subtitle2={t("subtitle_content_provision_service_2")}
        imagePath="https://placehold.co/1920x1080/F3E5F5/000000?text=Abstract+Content+Visual" // Updated placeholder
        reverseLayout={false}
      />
      <FeatureBlock
        title={t("data_integration_service")}
        subtitle1={t("subtitle_data_integration_service")}
        subtitle2={t("subtitle_data_integration_service_2")}
        imagePath="https://placehold.co/1920x1080/E1F5FE/000000?text=Abstract+Integration+Visual" // Updated placeholder
        reverseLayout={true}
      />

      {/* Solutions / Why Choose Us Section */}
      <section id="solutions" className="py-20 md:py-32 bg-gradient-to-br from-purple-800 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url('/images/GeometricPattern.svg')`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'blur(3px)' }}></div>
        <div className="container mx-auto px-6 z-10">
          <SectionHeading
            title={t("why_choose_us")}
            underlineColor="bg-blue-400"
            textColor="text-white"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
            <ValueProposition
              icon={<Calendar className="text-purple-600" size={40} />}
              title={t("up_to_date")}
              description={t("subtitle_up_to_date")}
            />
            <ValueProposition
              icon={<CheckSquare className="text-purple-600" size={40} />}
              title={t("zero_hallucination")}
              description={t("subtitle_zero_hallucination")}
            />
            <ValueProposition
              icon={<Target className="text-purple-600" size={40} />}
              title={t("hundred_percent_relevance")}
              description={t("subtitle_hundred_percent_relevance")}
            />
          </div>
          <div className="text-center mt-20">
            <Button
              variant="secondary"
              size="lg"
              icon={<ArrowRight size={24} />}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t("contact_us")}
            </Button>
          </div>
        </div>
      </section>

      {/* Our Data Sources Section */}
      <section id="faq" className="py-20 md:py-32 bg-gray-100 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <SectionHeading
            title={t("our_data_sources")}
            subtitle={t("subtitle_our_data_sources")}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-stretch">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{t("national_legislation")}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{t("subtitle_national_legislation")}</p>
            </Card>
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{t("regional_legislation")}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{t("subtitle_regional_legislation")}</p>
            </Card>
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{t("european_legislation")}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{t("subtitle_european_legislation")}</p>
            </Card>
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{t("court_decisions")}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{t("subtitle_court_decisions")}</p>
            </Card>
          </div>
          <div className="mt-20">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t("need_a_different_data_source")}</h3>
            <p className="text-xl text-gray-700 mb-12 leading-relaxed">
              {t("subtitle_need_a_different_data_source")}
            </p>
            <Button
              size="lg"
              icon={<ArrowRight size={24} />}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t("contact_us")}
            </Button>
          </div>
        </div>
      </section>

      {/* Company Section */}
      <section id="company" className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <SectionHeading
            title={t("company")}
            subtitle={t("subtitle_company_section")}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center mb-24">
            <Card className="flex flex-col items-center text-center p-8 overflow-hidden">
              <img
                src="/images/PolimiSpinOff.png"
                alt="Polimi Spin-Off Logo"
                className="w-40 h-auto mb-6 opacity-90"
                onError={(e) => { e.currentTarget.src = '/images/PolimiSpinOff.png'; }}
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-snug">
                <a href="https://www.polimi.it/ricerca/trasferimento-tecnologico/spin-off" target="_blank" rel="noopener noreferrer" className="hover:underline text-purple-700">
                  Polimi Spin-Off
                </a>
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">{t("subtitle_spinoff_polimi")}</p>
            </Card>

            <Card className="flex flex-col items-center text-center p-8 overflow-hidden">
              <img
                src="/images/AwardedResearch.png"
                alt="Awarded Research"
                className="w-40 h-auto mb-6 opacity-90"
                onError={(e) => { e.currentTarget.src = '/images/AwardedResearch.png'; }}
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-snug">
                <a href="https://comunicazione.camera.it/archivio-prima-pagina/19-42168" target="_blank" rel="noopener noreferrer" className="hover:underline text-purple-700">
                  {t("awarded_research")}
                </a>
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">{t("subtitle_awarded_research")}</p>
            </Card>
          </div>

          <SectionHeading
            title={t("our_scientific_publications")}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-stretch">
            <Publication
              year="2025"
              title="An LLM-assisted ETL pipeline to build a high-quality knowledge graph of the Italian legislation."
              journal="In: Information Processing and Management"
              link="https://www.sciencedirect.com/science/article/pii/S030645732500024X"
            />
            <Publication
              year="2025"
              title="Legislative Knowledge Management with Property Graphs"
              journal="In: Proceedings of the EDBT25 Workshops"
              link="https://ceur-ws.org/Vol-3946/TGD-1.pdf"
            />
            <Publication
              year="2024"
              title="Leveraging Knowledge Graphs and LLMs to Support and Monitor Legislative Systems"
              journal="In: Proceedings of the 33rd CIKM Conference"
              link="https://dl.acm.org/doi/10.1145/3627673.3680268"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 md:py-32 bg-purple-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <SectionHeading
            title={t("our_team")}
            underlineColor="bg-blue-500"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center">
            <TeamMember imagePath="./images/people/andrea.jpeg" name="Andrea Colombo" position="Chief Executive Officer" />
            <TeamMember imagePath="./images/people/francesco.jpeg" name="Francesco Invernici" position="Chief Technology Officer" />
            <TeamMember imagePath="./images/people/chiara.jpeg" name="Chiara Leonardi" position="Chief Design Officer" />
            <TeamMember imagePath="./images/people/claudio.jpeg" name="Claudio Michelacci" position="Chief Revenue Officer" />
            <TeamMember imagePath="./images/people/anna.jpeg" name="Anna Bernasconi" position="Scientific Advisor" />
            <TeamMember imagePath="./images/people/stefano.jpeg" name="Stefano Ceri" position="Scientific Advisor" />
            <TeamMember imagePath="./images/people/luigi.jpeg" name="Luigi Guiso" position="Scientific Advisor" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: `url('/images/AbstractContactPattern.svg')`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'blur(3px)' }}></div>
        <div className="container mx-auto px-6 text-center z-10">
          <SectionHeading
            title={t("contact_us")}
            subtitle={t("subtitle_contact_us")}
            underlineColor="bg-blue-400"
            textColor="text-white"
          />
          <p className="text-2xl md:text-3xl flex items-center justify-center font-semibold">
            <Mail className="w-9 h-9 mr-4 text-blue-400" />
            <a href="mailto:info@legisratio.it" className="text-white hover:underline transition-colors duration-300 text-purple-300">
              info@legisratio.it
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 md:py-24 bg-[#1a1820] text-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-end">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <img
              className="w-48 h-auto mb-4 mx-auto md:mx-0 opacity-90"
              src="/images/LegisRatioWhite.png"
              alt="LegisRatio Logo"
              onError={(e) => { e.currentTarget.src = '/images/LegisRatioWhite.png'; }}
            />
            <div className="text-sm leading-relaxed opacity-80">
              <p>Piazzale Lavater, 3</p>
              <p>Milano, 20133</p>
              <p>C.F./P.IVA 14027540963</p>
              <p className="mt-2">
                <a href="https://startup.registroimprese.it/isin/dettaglioStartup?id=KXU3bCJQBfS92AJOXqJVKg%2BWNu3uDSQnxKwuUw3how%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-300">
                  Registro Imprese
                </a>
              </p>
              <p className="mt-4 text-gray-500">&copy; 2025 LegisRatio S.R.L.</p>
              <p className="text-gray-500">Tutti i diritti riservati.</p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end space-y-6">
            <ul className="flex space-x-6">
              <li>
                <a target="_blank" href="mailto:info@legisratio.it" rel="noopener noreferrer" className="text-white text-2xl hover:text-blue-400 transition-colors duration-300">
                  <Mail className="w-8 h-8" />
                </a>
              </li>
              {/* Add more social icons here if needed */}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Wrap the App with the TranslationProvider
const WrappedApp: React.FC = () => (
  <TranslationProvider>
    <App />
  </TranslationProvider>
);

export default WrappedApp;