import "./Button.css";
import { ButtonBase } from "@mui/material";
import clsx from "clsx";
import React from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
}

export const Button = ({
  className,
  children,
  disabled,
  onClick,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <ButtonBase
      className={clsx("custom-button", className)}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </ButtonBase>
  );
};
