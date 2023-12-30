"use client";
import React from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  variant:
    | "reject"
    | "success"
    | "upload"
    | "gray"
    | "primary-main"
    | "primary-dark"
    | "primary-light";
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  type,
  variant,
  onClick,
  children,
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "reject":
        return "bg-reject";
      case "success":
        return "bg-success";
      case "upload":
        return " bg-cyan-600";
      case "gray":
        return " bg-gray-main";
      case "primary-dark":
        return " bg-primary-dark w-full !py-1.5";
      case "primary-main":
        return " bg-primary-main w-full !py-1.5";
      case "primary-light":
        return " bg-primary-light w-full !py-1.5";
    }
  };

  return (
    <button

      type={`${type ? type : "button"}`}
      className={`rounded-radius-large transition-all duration-500 hover:opacity-80 text-light px-2 py-1 capitalize text-sm ${getVariantClasses()}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
