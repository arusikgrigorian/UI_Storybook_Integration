import styled, { StyledProps } from "styled-components";
import { Tooltip, TooltipProps } from "antd";
import { theme } from "../../assets/style/global/theme";
import { ModeProps } from "../../types";

export type Props = StyledProps<ModeProps & TooltipProps>;

const StyledToolTip = styled((props: Props) => (
  <Tooltip
    color={
      props.mode === "light"
        ? theme.colors.neutral["gray-1"]
        : theme.colors.neutral["gray-8"]
    }
    overlayInnerStyle={{
      color:
        props.mode === "light"
          ? theme.colors.neutral["gray-6"]
          : theme.colors.neutral["gray-5"],
    }}
    {...props}
  />
))``;
export default StyledToolTip;
