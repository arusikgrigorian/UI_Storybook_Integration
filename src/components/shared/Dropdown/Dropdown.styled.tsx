import styled from "styled-components";
import { ModeProps } from "../../types";

export const StyledDropdown = styled.div<ModeProps>`
  * {
    color: ${(props) => props.theme.colors.neutral["gray-7"]};

    & .rc-virtual-list-holder-inner {
      & > :not(:last-child){
        margin-bottom: 4px;
      }
    }

    & .ant-select-item {
      &:hover {
        background-color: ${(props) =>
          props.mode === "light"
            ? props.theme.colors.neutral["gray-5"]
            : props.theme.colors.neutral["gray-9"]};
      }
    }

    & .ant-select-item[aria-selected="true"] {
      border: ${(props) =>
        props.mode === "light"
          ? `1px solid ${props.theme.colors.neutral["gray-6"]}`
          : `1px solid ${props.theme.colors.neutral["gray-8"]}`};
      background-color: ${(props) =>
        props.mode === "light"
          ? props.theme.colors.neutral["gray-5"]
          : props.theme.colors.neutral["gray-9"]};
    }
`;
export default StyledDropdown;
