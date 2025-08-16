// src/components/Button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 ease-in-out group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500';

  const variantStyles = {
    primary: 'bg-gradient-to-r from-blue-900 to-black text-white shadow-2xl hover:from-blue-600 hover:to-purple-700 hover:scale-105 active:scale-95',
    secondary: 'bg-white text-purple-800 shadow-2xl hover:bg-gray-100 hover:scale-105 active:scale-95',
    ghost: 'text-gray-700 hover:bg-gray-100',
  };

  const sizeStyles = {
    sm: 'px-6 py-2 text-base',
    md: 'px-8 py-3 text-lg',
    lg: 'px-12 py-5 text-xl',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {icon && <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
    </button>
  );
};

export default Button;