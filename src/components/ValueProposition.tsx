// src/components/ValueProposition.tsx
import React from 'react';
import Card from './Card'; // Import Card component

interface ValuePropositionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueProposition: React.FC<ValuePropositionProps> = ({ icon, title, description }) => {
  return (
    <Card className="flex flex-col items-center text-center p-8 m-4">
      <div className="text-6xl text-purple-600 mb-6 flex items-center justify-center w-20 h-20 bg-purple-100 rounded-full">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
    </Card>
  );
};

export default ValueProposition;