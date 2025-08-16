import React from 'react';
import { Mail } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { useTranslations } from '../context/TranslationContext';

const ContactSection: React.FC = () => {
  const { t } = useTranslations();

  return (
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
  );
};

export default ContactSection;
