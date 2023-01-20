import React from "react";
import ToolTip from "../shared/Tooltip/ToolTip";
import { IconType, ModeProps, ToolTipProps } from "../types";

export type MatchingTooltipProps = ModeProps & Omit<ToolTipProps, "title">;

const getCustomizedIcon = (
  icon: IconType,
  withTooltip: boolean,
  tooltipTitle: string,
  disabled: boolean,
  matchingTooltipProps: MatchingTooltipProps
) => {
  return icon && !disabled && withTooltip ? (
    <ToolTip {...matchingTooltipProps} title={tooltipTitle}>
      {icon}
    </ToolTip>
  ) : (
    icon
  );
};

export default getCustomizedIcon;
