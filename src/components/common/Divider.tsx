import React from 'react';

export interface DividerProps {
  variant?: 'gold' | 'inverse';
  className?: string;
  motif?: React.ReactNode;
}

export const Divider: React.FC<DividerProps> = ({
  variant = 'gold',
  className = '',
  motif = '♦',
}) => {
  const isInverse = variant === 'inverse';
  const combinedClassName = `divider-royal ${isInverse ? 'divider-royal-inverse' : ''} ${className}`.trim();

  return (
    <div className={combinedClassName} role="separator" aria-hidden="true">
      <span className="divider-royal-icon">{motif}</span>
    </div>
  );
};

