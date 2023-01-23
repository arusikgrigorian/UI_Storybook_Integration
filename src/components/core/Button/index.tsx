import { PropsWithChildren, ReactNode } from "react";
import { BaseButtonProps, NativeButtonProps } from "antd/es/button/button";
import StyledButton from "./Button.styled";
import { EventsProps, ModeProps } from "../../types";

export type Props = BaseButtonProps &
  NativeButtonProps &
  ModeProps &
  EventsProps & {
    iconBefore?: ReactNode;
    iconAfter?: ReactNode;
  };

const Button = (props: PropsWithChildren<Props>) => {
  const {
    size = "middle",
    mode = "light",
    type = "default",
    htmlType = "button",
    disabled = false,
    iconBefore = null,
    iconAfter = null,
    children = null,
    onClick = () => {},
  } = props;

  return (
    <StyledButton
      size={size}
      mode={mode}
      type={type}
      htmlType={htmlType}
      disabled={disabled}
      icon={iconBefore}
      onClick={onClick}
    >
      {children}
      {iconAfter}
    </StyledButton>
  );
};

export default Button;
