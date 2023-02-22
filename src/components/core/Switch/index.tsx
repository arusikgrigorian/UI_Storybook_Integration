import React from "react";
import StyledSwitch from "./Switch.styled";
import { SwitchProps } from "antd/lib/switch";
import { ModeProps } from "../../types";

export type Props = SwitchProps & ModeProps;

function onChange(checked: any) {
  console.log(`switch to ${checked}`);
}

const Switch = (props: Props) => {
  const { mode = "light", disabled = false, size = "default" } = props;

  return <StyledSwitch mode={mode} disabled={disabled} size={size} onChange={onChange} />;
};

export default Switch;
