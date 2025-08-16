// src/components/SectionHeading.tsx
import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  underlineColor?: string;
  textColor?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  underlineColor = 'bg-blue-500', // Changed default to a modern blue
  textColor = 'text-gray-800' // Changed default to a softer dark gray
}) => {
  return (
    <div className="text-center mb-12 md:mb-16 px-4"> {/* Reduced bottom margin, added horizontal padding */}
      <h2 className={`text-4xl md:text-5xl font-extrabold ${textColor} mb-4 relative inline-block`} style={{ lineHeight: '1.2' }}> {/* Reduced bottom margin, added line-height */}
        {title}
        {/* Subtle, full-width underline that's slightly thicker and softer */}
        <span className={`absolute bottom-0 left-0 w-full h-1.5 ${underlineColor} opacity-70 transform translate-y-1 rounded-full`}></span>
      </h2>
      {subtitle && (
        <p className={`text-lg md:text-xl ${textColor === 'text-white' ? 'text-white opacity-90' : 'text-gray-600'} max-w-2xl mx-auto leading-relaxed mt-4`}> {/* Adjusted text color for non-white, reduced max-width, added top margin */}
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;