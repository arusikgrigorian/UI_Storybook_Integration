import React, { PropsWithChildren } from "react";
import StyledToolTip from "./ToolTip.styled";
import { ModeProps, ToolTipProps } from "../../types";

export type Props = ModeProps & ToolTipProps;

const ToolTip = (props: PropsWithChildren<Props>) => {
  const { mode = "light", showTooltipArrow = true, title, children } = props;

  return (
    <StyledToolTip mode={mode} showArrow={showTooltipArrow} title={title}>
      {children}
    </StyledToolTip>
  );
};

export default ToolTip;
