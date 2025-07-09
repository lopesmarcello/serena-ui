import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card = ({ children, ...props }: CardProps) => {
  return (
    <div className="sui:bg-white sui:shadow-md sui:rounded-lg sui:p-4" {...props}>
      {children}
    </div>
  );
};
