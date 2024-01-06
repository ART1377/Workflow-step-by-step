"use client";
import React from "react";

type Props = {
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
  outline?: boolean; // Added outline prop
  size: "small" | "medium" | "large"; // Added size prop
};

const Button = ({ type, variant, onClick, children, outline, size }: Props) => {
  const getSizeClasses = () => {
    switch (size) {
      case "small":
        return "text-xs px-1 py-1";
      case "medium":
        return "text-sm px-2 py-1";
      case "large":
        return "text-lg px-4 py-1.5";
      default:
        return "";
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case "reject":
        return outline
          ? `text-reject outline outline-2 outline-reject ${getSizeClasses()}`
          : `bg-reject ${getSizeClasses()}`;
      case "success":
        return outline
          ? `text-success outline outline-2 outline-success ${getSizeClasses()}`
          : `bg-success ${getSizeClasses()}`;
      case "upload":
        return outline
          ? `text-upload outline outline-2 outline-upload ${getSizeClasses()}`
          : `bg-upload ${getSizeClasses()}`;
      case "gray":
        return outline
          ? `text-gray-main outline outline-2 outline-gray-main ${getSizeClasses()}`
          : `bg-gray-main ${getSizeClasses()}`;
      case "primary-dark":
        return outline
          ? `text-primary-dark outline outline-2 outline-primary-dark ${getSizeClasses()}`
          : `bg-primary-dark ${getSizeClasses()}`;
      case "primary-main":
        return outline
          ? `text-primary-main outline outline-2 outline-primary-main ${getSizeClasses()}`
          : `bg-primary-main ${getSizeClasses()}`;
      case "primary-light":
        return outline
          ? `text-primary-light outline outline-2 outline-primary-light ${getSizeClasses()}`
          : `bg-primary-light ${getSizeClasses()}`;
      default:
        return "";
    }
  };

  return (
    <button
      type={`${type ? type : "button"}`}
      className={`rounded-radius-large transition-all duration-500 hover:opacity-80 text-light capitalize  ${getVariantClasses()}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
