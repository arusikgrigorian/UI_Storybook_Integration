import { PropsWithChildren } from "react";
import StyledButton from "./Button.styled";
import {ButtonIconProps, ButtonType} from '../../../types';

export type Props = ButtonType & ButtonIconProps;

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
