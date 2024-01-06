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
};

const Button = ({ type, variant, onClick, children, outline }: Props) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "reject":
        return outline
          ? "text-reject outline outline-2 outline-reject"
          : "bg-reject";
      case "success":
        return outline
          ? "text-success outline outline-2 outline-success"
          : "bg-success";
      case "upload":
        return outline
          ? "text-upload outline outline-2 outline-upload"
          : "bg-upload";
      case "gray":
        return outline
          ? "text-gray-main outline outline-2 outline-gray-main"
          : "bg-gray-main";
      case "primary-dark":
        return `w-full !py-2 ${
          outline
            ? "text-primary-dark outline outline-2 outline-primary-dark"
            : "bg-primary-dark"
        }`;
      case "primary-main":
        return `w-full !py-2 ${outline
          ? "text-primary-main outline outline-2 outline-primary-main"
          : "bg-primary-main"}`;
      case "primary-light":
        return `w-full !py-2 ${outline
          ? "text-primary-light outline outline-2 outline-primary-light"
          : "bg-primary-light"}`;
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
