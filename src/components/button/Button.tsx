import { FC } from "react";
import styled from "@emotion/styled"

export type ButtonVariant = "raised" | "outlined" | "flat";
export type ButtonSize = "normal" | "small" | "large";

export type ButtonProps = {
  label?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const commonStyles = {
  background: "none",
  border: "none",
  color: "#222831",
  cursor: "pointer",
  fontFamily: "Roboto",
  fontSize: "14px",
  lineHeight: "16px",
  padding: "10px 20px",
};

const outlinedStyles = {
  background: "#eee",
  border: "1px solid #393E46",
  borderRadius: "5px",
};

const raisedStyles = {
  ...outlinedStyles,
  boxShadow: "0px 2px 0px rgba(57, 62, 70, 0.5)",
};

const styles = (props: ButtonProps) => ({
  ...commonStyles,
  ...(props.variant === "raised" ? raisedStyles : {}),
  ...(props.variant === "outlined" ? outlinedStyles : {}),
})

const StyledButton = styled.button(styles);

export const Button: FC<ButtonProps> = ({
  children,
  label,
  variant = "raised",
  size = "normal",
}) => {
  return <StyledButton variant={variant}>{label || children}</StyledButton>;
};
