// src/components/ui/Badge.jsx
import React from 'react';

const Badge = ({ variant = 'default', children }) => {
  const baseStyle = "px-3 py-1 text-sm font-semibold rounded-full";
  const variantStyles = {
    default: "bg-gray-300 text-gray-800",
    secondary: "bg-blue-500 text-white",
    success: "bg-green-500 text-white",
    danger: "bg-red-500 text-white",
    warning: "bg-yellow-500 text-black",
    info: "bg-teal-500 text-white",
    light: "bg-light-gray-500 text-black",
    dark: "bg-dark-gray-500 text-white",
  };

  const classNames = `${baseStyle} ${variantStyles[variant]}`;

  return (
    <span className={classNames}>
      {children}
    </span>
  );
};

export default Badge; // Ensure default export
