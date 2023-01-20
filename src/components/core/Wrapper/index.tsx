import React from "react";
import { PropsWithChildren } from "react";
import StyledWrapper from "./Wrapper.styled";
import { ModeProps, StyleGeneralProps } from "../../types";

export type Props = StyleGeneralProps & ModeProps;
const Wrapper = (props: PropsWithChildren<Props>) => {
  const { children = null } = props;

  return <StyledWrapper {...props}>{children}</StyledWrapper>;
};
export default Wrapper;
