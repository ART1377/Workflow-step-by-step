"use client";
import React from "react";

interface ButtonProps {
  variant: "reject" | "success" | "upload";
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant, onClick, children }) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "reject":
        return "bg-reject";
      case "success":
        return "bg-success";
      case "upload":
        return " bg-cyan-600";
    }
  };

  return (
    <button
      className={`rounded transition-all duration-500 hover:opacity-80 text-white px-2 py-1 capitalize text-sm ${getVariantClasses()}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
