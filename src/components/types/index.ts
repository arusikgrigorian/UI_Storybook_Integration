import React, { ChangeEventHandler } from "react";
import { LabeledValue } from "antd/es/select";

export type ChangeTypes = HTMLInputElement | HTMLTextAreaElement;
export interface EventsProps {
  onChange?: ChangeEventHandler<ChangeTypes> | undefined;
  onOptionSelect?: (e: string | number | LabeledValue) => void;
}

export type IconType =
  | string
  | number
  | boolean
  | React.ReactElement<any, string | React.JSXElementConstructor<any>>
  | React.ReactFragment
  | null;
export interface StyleGeneralProps {
  flex_direction?: string;
  justify_content?: string;
  align_items?: string;
  height?: string;
  width?: string;
  padding?: string;
  border_width?: string;
  border_style?: string;
  border_color?: string;
  background_color?: string;
}

export interface TextlikeComponentProps {
  placeholder?: string;
}

export interface StateProps {
  state?: "default" | "warning" | "error" | "success" | "dashed";
}

export interface ModeProps {
  mode?: "light" | "dark";
}

export interface ToolTipProps {
  withPrefixTooltip?: boolean;
  prefixTooltipTitle?: string;
  withSuffixTooltip?: boolean;
  suffixTooltipTitle?: string;
  showTooltipArrow?: boolean;
  title: string;
}

export interface OptionsProps {
  label: string;
  value: string;
}
export interface AddonProps {
  withAddonAfter?: boolean;
  options?: OptionsProps[];
  addonAfterDefaultOption?: string;
}
