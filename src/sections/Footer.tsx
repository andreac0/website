import React from 'react';
import { Mail } from 'lucide-react';
import { useTranslations } from '../context/TranslationContext';

const Footer: React.FC = () => {
  const { t } = useTranslations();

  return (
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
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
