// src/components/Card.tsx
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hoverEffect = true }) => {
  // Softer default styles, less aggressive shadow
  const defaultStyles = 'bg-white rounded-2xl shadow-sm border border-gray-100'; // Slightly smaller border radius, softer shadow
  // More subtle hover effect
  const hoverStyles = hoverEffect ? 'transition-transform duration-300 hover:scale-[1.01] hover:shadow-md' : ''; // Even smaller scale, softer shadow on hover
  return (
    <div className={`${defaultStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};

export default Card;