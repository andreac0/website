// src/context/TranslationContext.tsx
import React, { useState, useEffect, useCallback, createContext, useContext } from 'react';
import enTranslations from '../languages/en';
import itTranslations from '../languages/it';

interface TranslationContextType {
  t: (key: string) => string;
  changeLanguage: (lng: string) => void;
  currentLanguage: string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en'); // Default to English

  const allTranslations: { [key: string]: { [key: string]: string } } = {
    en: enTranslations,
    it: itTranslations,
  };

  const t = useCallback((key: string): string => {
    return allTranslations[currentLanguage]?.[key] || key;
  }, [currentLanguage, allTranslations]);

  const changeLanguage = (lng: string) => {
    setCurrentLanguage(lng);
  };

  return (
    <TranslationContext.Provider value={{ t, changeLanguage, currentLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslations = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslations must be used within a TranslationProvider');
  }
  return context;
};