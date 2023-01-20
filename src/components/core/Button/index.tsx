import { PropsWithChildren, ReactNode } from "react";
import { ButtonProps } from "antd";
import StyledButton from "./Button.styled";
import { ModeProps } from "../../types";

export type Props = ModeProps &
  ButtonProps & { iconBefore?: ReactNode; iconAfter?: ReactNode };
const Button = (props: PropsWithChildren<Props>) => {
  const {
    size = "middle",
    mode = "light",
    type = "default",
    disabled = false,
    iconBefore = null,
    iconAfter = null,
    children = null,
  } = props;

  return (
    <StyledButton
      size={size}
      mode={mode}
      type={type}
      disabled={disabled}
      icon={iconBefore}
    >
      {children}
      {iconAfter}
    </StyledButton>
  );
};

export default Button;
