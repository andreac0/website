// src/components/Publication.tsx
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Card from './Card'; // Import Card component

interface PublicationProps {
  year: string;
  title: string;
  journal: string;
  link: string;
}

const Publication: React.FC<PublicationProps> = ({ year, title, journal, link }) => {
  return (
    <Card className="flex flex-col overflow-hidden m-4">
      <div className="p-6 flex-grow">
        <span className="block text-xl font-bold text-purple-700 mb-3">{year}</span>
        <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">{title}</h3>
        <p className="text-gray-600 text-sm leading-normal">{journal}</p>
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="block text-center py-3 px-6 bg-gradient-to-r from-purple-700 to-indigo-600 text-white hover:from-purple-800 hover:to-indigo-700 transition duration-300 ease-in-out rounded-b-xl font-semibold flex items-center justify-center space-x-2">
        <span>View Article</span> <ArrowRight size={18} />
      </a>
    </Card>
  );
};

export default Publication;