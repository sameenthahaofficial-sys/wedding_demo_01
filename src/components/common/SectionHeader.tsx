import React from 'react';
import { Divider } from './Divider';

export interface SectionHeaderProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  showDivider?: boolean;
  inverse?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  kicker,
  title,
  subtitle,
  showDivider = true,
  inverse = false,
  className = '',
}) => {
  return (
    <header className={`section-header ${className}`.trim()}>
      {kicker && (
        <p className="section-kicker section-kicker-ornate">
          {kicker}
        </p>
      )}
      <h2 className="section-title">{title}</h2>
      {showDivider && <Divider variant={inverse ? 'inverse' : 'gold'} />}
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </header>
  );
};

