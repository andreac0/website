// src/components/FeatureBlock.tsx
import React from 'react';
import Card from './Card'; // Import Card component

interface FeatureBlockProps {
  title: string;
  subtitle1: string;
  subtitle2?: string;
  imagePath: string;
  reverseLayout?: boolean;
}

const FeatureBlock: React.FC<FeatureBlockProps> = ({ title, subtitle1, subtitle2, imagePath, reverseLayout }) => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden"> {/* Reduced vertical padding */}
      {/* Subtle Background Image with a lighter, ethereal overlay */}
      <div
        className="absolute inset-0 z-0 opacity-50 lg:opacity-70" // Adjusted opacity
        style={{ backgroundImage: `url(${imagePath})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      ></div>
      {/* More subtle and modern gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-blue-50 opacity-90 z-10"></div> {/* Lighter gradient */}

      <div className="container mx-auto px-4 z-20 relative"> {/* Reduced horizontal padding, added relative */}
        <div className={`flex flex-wrap items-center -mx-2 ${reverseLayout ? 'md:flex-row-reverse' : 'md:flex-row'}`}> {/* Reduced negative margin */}
          <div className={`w-full md:w-1/2 p-2 ${reverseLayout ? 'md:pl-4' : 'md:pr-4'}`}> {/* Reduced padding */}
            <Card className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-xl border border-gray-200 p-6 rounded-2xl shadow-md relative overflow-hidden" hoverEffect={false}> {/* Reduced padding, slightly smaller border radius */}
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-800 mb-3 leading-tight"> {/* Smaller font size, reduced margin */}
                {title}
              </h2>
              <p className="text-base lg:text-lg mb-2 text-gray-600"> {/* Smaller font size, reduced margin */}
                {subtitle1}
              </p>
              {subtitle2 && (
                <p className="text-base lg:text-lg text-gray-600"> {/* Smaller font size */}
                  {subtitle2}
                </p>
              )}
            </Card>
          </div>
          <div className={`w-full md:w-1/2 p-2 flex justify-center items-center ${reverseLayout ? 'md:pr-4' : 'md:pl-4'}`}> {/* Reduced padding */}
            {/* Modernized image container with a subtle shadow and cleaner gradient */}
            <div className="w-full h-56 md:h-80 bg-gradient-to-br from-indigo-200 to-blue-200 rounded-2xl shadow-md flex items-center justify-center p-4 border border-blue-300"> {/* Reduced height, slightly smaller border radius, reduced padding, softer shadow */}
              {/* This SVG is a placeholder, you might want to replace it with an actual image or more dynamic content */}
              <svg className="w-2/3 h-2/3 text-blue-500 text-opacity-40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureBlock;