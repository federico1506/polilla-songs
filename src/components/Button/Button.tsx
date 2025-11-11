// React
import React from "react";

// Styles
import "./styles/button.css";
import { PowerGlitch } from "powerglitch";

type ButtonVariant = "primary" | "secondary" | "tertiary" ;

interface ButtonProps {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className = "",
  children,
  onClick,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const glitch = PowerGlitch.glitch(e.currentTarget, {
      playMode: "manual",
      timing: {
        duration: 4000,
        easing: "linear",
      },
      shake: {
        amplitudeX: 0.01,
        amplitudeY: 0.01,
      },
      slice: {
        count: 2,
        velocity: 10,
        minHeight: 0.05,
        maxHeight: 0.05,
      },
    });

    glitch.startGlitch();
    setTimeout(() => glitch.stopGlitch(), 1000);
    onClick?.();
  };

  return (
    <button className={`btn ${variant} ${className}`} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
