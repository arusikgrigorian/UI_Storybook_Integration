import styled from "styled-components";
import { Space } from "antd";

const StyledSpace = styled(({ children, ...props }) => <Space {...props}>{children}</Space>)`
  & .my-button-wraper {
    * {
      background-color: blue;
      justify-content: ${(props) => props.justify || "center" || "space-between" || "space-around"};
      align-items: ${(props) => props.align || "start"}
  }
`;

export default StyledSpace;
