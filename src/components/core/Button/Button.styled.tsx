import styled from "styled-components";
import { Button } from "antd";
import { PropsWithChildren } from "react";

const StyledButton = styled((props: PropsWithChildren<any>) => (
  <Button {...props} />
))``;

export default StyledButton;
