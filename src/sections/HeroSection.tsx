import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import { useTranslations } from '../context/TranslationContext';

const HeroSection: React.FC = () => {
  const { t } = useTranslations();

  return (
    <section
      id="primaSezione"
      className="relative flex items-center min-h-[800px] text-white overflow-hidden"
    >
      <div className="absolute inset-0" style={{ backgroundImage: `url('/images/PolygonLuminary.svg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>

      <div className="container mx-auto px-4 z-10 text-left relative">
        <div className="flex flex-wrap items-center justify-start">
          <div className="w-full lg:w-9/12">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
                {t("title_empower_your_legal_searches")}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-80 max-w-3xl ml-0 font-light">
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
  );
};

export default HeroSection;

