import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export interface CardProps {
  title: string;
  content: string;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ title, content, className = '' }) => {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-md border border-gray-200 ${className}`}>
      <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};