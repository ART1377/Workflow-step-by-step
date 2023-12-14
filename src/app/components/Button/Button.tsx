"use client";
import React from "react";

interface ButtonProps {
  variant: "reject" | "success";
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant, onClick, children }) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "reject":
        return "bg-red-500 hover:bg-red-600 text-white px-2 py-1 capitalize";
      case "success":
        return "bg-green-500 hover:bg-green-600 text-white px-2 py-1 capitalize";
    }
  };

  return (
    <button
      className={`rounded transition-all duration-500 ${getVariantClasses()}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
