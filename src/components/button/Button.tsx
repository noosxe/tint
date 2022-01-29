import { FC } from "react";

export type ButtonVariant = "raised" | "outlined" | "flat";
export type ButtonSize = "normal" | "small" | "large";

export type ButtonProps = {
  label?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export const Button: FC<ButtonProps> = ({
  children,
  label,
  variant = "raised",
  size = "normal",
}) => {
  return <button>{label || children}</button>;
};
