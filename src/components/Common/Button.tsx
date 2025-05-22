'use client';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'outline';
  isLoading?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  isLoading = false,
  children,
  className,
  ...props
}) => {
  const baseStyles = 
    'inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantStyles = {
    primary:
      'border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary:
      'border-transparent bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-400',
    danger:
      'border-transparent bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    outline:
      'border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-blue-500',
  };

  return (
    <button
      type="button" // Default to type="button" to prevent accidental form submissions
      className={`${baseStyles} ${variantStyles[variant]} ${className || ''}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && (
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {children}
    </button>
  );
};
