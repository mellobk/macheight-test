import React from "react";
import "./button.css";

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  label: string;
}

export const Button = ({ onClick, className, label }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`${className} button-container`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
