import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  className?: string;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  href, 
  variant = 'primary', 
  className = '',
  fullWidth = false
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full transition-all duration-300 font-brand tracking-wide shadow-lg";
  
  const variants = {
    primary: "bg-aurea-orange text-white hover:bg-white hover:text-aurea-orange",
    secondary: "bg-aurea-dark text-white hover:bg-aurea-blue",
    outline: "border-2 border-aurea-blue text-aurea-blue hover:bg-aurea-blue hover:text-white",
    white: "bg-white text-aurea-blue hover:bg-aurea-orange hover:text-white"
  };

  return (
    <motion.a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
};