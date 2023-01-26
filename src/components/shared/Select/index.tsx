import React, { ReactElement, useState } from "react";
import { SelectProps } from "antd";
import StyledSelect from "./Select.styled";
import Dropdown from "../Dropdown";
import { AddonProps, ModeProps } from "../../types";

export type Props = AddonProps &
  SelectProps & { current_mode?: ModeProps["mode"] };

const Select = (props: Props) => {
  const {
    current_mode = "light",
    disabled = false,
    options = [],
    defaultValue = "",
    onSelect = () => {},
  } = props;

  const [dropdownIsVisible, setDropdownIsVisible] = useState<boolean>(false);
  const dropdownRender = (
    menu: ReactElement,
    current_mode: ModeProps["mode"]
  ) => {
    return <Dropdown mode={current_mode}>{menu}</Dropdown>;
  };

  return (
    <StyledSelect
      current_mode={current_mode}
      disabled={disabled}
      options={options}
      defaultValue={defaultValue}
      dropdownRender={(menu) => dropdownRender(menu, current_mode)}
      onDropdownVisibleChange={() => setDropdownIsVisible(!dropdownIsVisible)}
      onSelect={onSelect}
    />
  );
};

export default Select;
