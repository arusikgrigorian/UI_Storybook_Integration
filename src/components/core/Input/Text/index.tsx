import React from "react";
import { InputProps } from "antd";
import StyledInput from "./Input.styled";
import getCustomizedIcon from "../../../helpers/getCustomizedIcon";
import Select from "../../../shared/Select";
import {
  AddonProps,
  EventsProps,
  ModeProps,
  StateProps,
  TextlikeComponentProps,
  ToolTipProps,
} from "../../../types";

export type Props = InputProps &
  TextlikeComponentProps &
  StateProps &
  ModeProps &
  Omit<ToolTipProps, "title"> &
  AddonProps &
  EventsProps;

const Input = (props: Props) => {
  const {
    size = "middle",
    mode = "light",
    state = "default",
    disabled = false,
    withPrefixTooltip = false,
    prefixTooltipTitle = "",
    prefix = null,
    placeholder = "",
    withSuffixTooltip = false,
    suffixTooltipTitle = "",
    suffix = null,
    showTooltipArrow = true,
    withAddonAfter = false,
    options = [],
    addonAfterDefaultOption = "Select Data",
    onChange = () => {},
    onOptionSelect = () => {},
  } = props;

  const matchingTooltipProps = {
    mode,
    showTooltipArrow,
  };

  const customizedPrefix = getCustomizedIcon(
    prefix,
    withPrefixTooltip,
    prefixTooltipTitle,
    disabled,
    matchingTooltipProps
  );

  const customizedSuffix = getCustomizedIcon(
    suffix,
    withSuffixTooltip,
    suffixTooltipTitle,
    disabled,
    matchingTooltipProps
  );

  const addonAfter = withAddonAfter ? (
    <Select
      current_mode={mode}
      disabled={disabled}
      options={options}
      defaultValue={addonAfterDefaultOption}
      onSelect={onOptionSelect}
    />
  ) : null;

  return (
    <StyledInput
      size={size}
      mode={mode}
      state={state}
      disabled={disabled}
      prefix={customizedPrefix}
      placeholder={placeholder}
      suffix={customizedSuffix}
      addonAfter={addonAfter}
      onChange={onChange}
    />
  );
};

export default Input;
