"use client";

import React from "react";

type ButtonVariant = "primary" | "secondary" | "danger" | "outline" | "text";
type ButtonSize = "small" | "medium" | "large";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  children: React.ReactNode;
  ariaLabel?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  isLoading = false,
  children,
  className,
  ariaLabel,
  icon,
  iconPosition = "left",
  ...props
}) => {
  const sizeStyles = {
    small: "px-3 py-1.5 text-xs",
    medium: "px-4 py-2 text-sm",
    large: "px-6 py-3 text-base",
  };

  const baseStyles =
    "inline-flex items-center justify-center rounded-md border font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyles = {
    primary:
      "border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary:
      "border-transparent bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-400",
    danger:
      "border-transparent bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    outline:
      "border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-blue-500",
    text: "border-transparent bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-400",
  };

  const variantClass =
    variantStyles[variant as keyof typeof variantStyles] ||
    variantStyles.primary;
  const sizeClass =
    sizeStyles[size as keyof typeof sizeStyles] || sizeStyles.medium;

  // Filter out any undefined or null values and join the classes
  const buttonClasses = [baseStyles, variantClass, sizeClass, className]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={props.type || "button"}
      className={buttonClasses}
      disabled={isLoading || props.disabled}
      aria-label={ariaLabel}
      {...props}
    >
      <div className="flex items-center gap-2">
        {icon && iconPosition === "left" && icon}
        {children}
        {isLoading && (
          <svg
            className="animate-spin h-4 w-4 text-current"
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
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {icon && iconPosition === "right" && icon}
      </div>
    </button>
  );
};
