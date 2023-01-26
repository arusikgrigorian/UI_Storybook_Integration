import styled from "styled-components";
import { Switch } from "antd";
import { Props } from "./index";

const StyledSwitch = styled((props: Props) => <Switch {...props} />)`
  ${(props) => {
    const mode = props.mode;
    const neutral = props.theme.colors.neutral;
    const primary = props.theme.colors.primary;

    switch (mode) {
      case "light":
        return `
        background-color: white !important;
        outline: 1px solid ${neutral["gray-5"]};
        &:hover {outline: 1px solid ${neutral["gray-6"]}}
  
        &:disabled {
    background-color: ${neutral["gray-4"]} !important; 
    & .ant-switch-handle {
    &:before {
      background-color: ${neutral["gray-6"]};};
    }
  }
  & .ant-switch-handle {
    &:before {
      background-color: ${primary["blue-6"]};
    }
    
  `;
      case "dark":
        return `
       background-color: ${neutral["gray-5"]} !important;
        &:hover {outline: 1px solid ${neutral["gray-6"]}}
  
        &:disabled {
    background-color: ${neutral["gray-7"]} !important; 
    & .ant-switch-handle {
    &:before {
      background-color: ${neutral["gray-10"]};};
    }
  }
  & .ant-switch-handle {
    &:before {
      background-color: ${neutral["gray-10"]};
    }
       `;
    }
  }};
`;

export default StyledSwitch;
