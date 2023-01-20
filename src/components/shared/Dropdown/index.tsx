import StyledDropdown from "./Dropdown.styled";
import React, { PropsWithChildren } from "react";
import { ModeProps } from "../../types";

const Dropdown = (props: PropsWithChildren<ModeProps>) => {
  const { mode = "light", children } = props;

  return <StyledDropdown mode={mode}>{children}</StyledDropdown>;
};

export default Dropdown;
