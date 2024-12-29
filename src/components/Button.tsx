import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className, ...props }: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 rounded-full transition-colors ${
        variant === 'primary'
          ? 'bg-indigo-600 text-white hover:bg-indigo-700'
          : 'border border-gray-700 text-gray-200 hover:bg-gray-800'
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}