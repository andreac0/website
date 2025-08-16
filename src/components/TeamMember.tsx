// src/components/TeamMember.tsx
import React from 'react';
import Card from './Card'; // Import Card component

interface TeamMemberProps {
  imagePath: string;
  name: string;
  position: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ imagePath, name, position }) => {
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <Card className="flex flex-col items-center text-center p-6 m-4">
      <div className="w-36 h-36 rounded-full overflow-hidden mb-5 shadow-inner ring-4 ring-purple-400 ring-opacity-50">
        <img
          src={imagePath}
          alt={name}
          className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
          onError={(e) => { e.currentTarget.src = `https://placehold.co/144x144/e0e0e0/555555?text=${getInitials(name)}`; }}
        />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
      <p className="text-purple-600 text-base font-medium">{position}</p>
    </Card>
  );
};

export default TeamMember;