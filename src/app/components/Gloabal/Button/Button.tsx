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
        return `${
          outline ? `text-reject` : `bg-reject`
        }  outline outline-1 outline-reject ${getSizeClasses()}`;
      case "success":
        return `${
          outline ? `text-success` : `bg-success`
        }  outline outline-1 outline-success ${getSizeClasses()}`;
      case "upload":
        return `${
          outline ? `text-upload` : `bg-upload`
        }  outline outline-1 outline-upload ${getSizeClasses()}`;
      case "gray":
        return `${
          outline ? `text-gray-main` : `bg-gray-main`
        }  outline outline-1 outline-gray-main ${getSizeClasses()}`;
      case "primary-dark":
        return `${
          outline ? `text-primary-dark` : `bg-primary-dark`
        }  outline outline-1 outline-primary-dark ${getSizeClasses()}`;
      case "primary-main":
        return `${
          outline ? `text-primary-main` : `bg-primary-main`
        }  outline outline-1 outline-primary-main ${getSizeClasses()}`;
      case "primary-light":
        return `${
          outline ? `text-primary-light` : `bg-primary-light`
        }  outline outline-1 outline-primary-light ${getSizeClasses()}`;
      default:
        return "";
    }
  };

  return (
    <button
      type={`${type ? type : "button"}`}
      className={`rounded-radius-large transition-all duration-500 hover:opacity-70 text-light capitalize  ${getVariantClasses()}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
