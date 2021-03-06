import { FC, MouseEvent } from "react";
import styled from "@emotion/styled";

export type ButtonVariant = "raised" | "outlined" | "flat";
export type ButtonSize = "normal" | "small" | "large";

export type ButtonProps = {
  label?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: (event: MouseEvent) => void;
};

const commonStyles = {
  "background": "none",
  "border": "none",
  "color": "#222831",
  "cursor": "pointer",
  "fontFamily": "Roboto",
  "fontSize": "14px",
  "lineHeight": "16px",
  "padding": "10px 20px",

  "&:hover": {
    paddingTop: "11px",
    paddingBottom: "9px",
  },
  "&:active": {
    paddingTop: "12px",
    paddingBottom: "8px",
  },
};

const outlinedStyles = {
  "background": "#eee",
  "border": "1px solid #393E46",
  "borderRadius": "5px",

  "&:hover": {
    paddingTop: "11px",
    paddingBottom: "9px",
    boxShadow: "inset 0px 1px 0px rgba(57, 62, 70, 0.5)",
  },
  "&:active": {
    paddingTop: "12px",
    paddingBottom: "8px",
    boxShadow: "inset 0px 1px 0px 1px rgba(57, 62, 70, 0.5)",
  },
};

const raisedStyles = {
  ...outlinedStyles,
  "boxShadow": "0px 2px 0px rgba(57, 62, 70, 0.5)",
  "marginBottom": "2px",

  "&:hover": {
    marginTop: "1px",
    marginBottom: "1px",
    boxShadow: "0px 1px 0px rgba(57, 62, 70, 0.5)",
  },
  "&:active": {
    marginTop: "2px",
    marginBottom: 0,
    boxShadow: "none",
  },
};

const styles = (props: ButtonProps) => ({
  ...commonStyles,
  ...(props.variant === "raised" ? raisedStyles : {}),
  ...(props.variant === "outlined" ? outlinedStyles : {}),
});

const StyledButton = styled.button(styles);

export const Button: FC<ButtonProps> = ({
  children,
  label,
  variant = "raised",
  size = "normal",
  onClick,
}) => {
  return (
    <StyledButton variant={variant} onClick={onClick}>
      {label || children}
    </StyledButton>
  );
};
