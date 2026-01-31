import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', glow = false }) => {
  return (
    <div className={`
      relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-md
      ${glow ? 'shadow-[0_0_20px_rgba(139,92,246,0.15)] border-brand-purple/30' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
};

export default Card;