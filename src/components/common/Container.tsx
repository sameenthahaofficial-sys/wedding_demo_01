import React from 'react';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: 'default' | 'narrow' | 'wide';
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  width = 'default',
  className = '',
  children,
  ...rest
}) => {
  const widthClass =
    width === 'narrow' ? 'container-narrow' : width === 'wide' ? 'container-wide' : 'container';

  return (
    <div className={`${widthClass} ${className}`.trim()} {...rest}>
      {children}
    </div>
  );
};

