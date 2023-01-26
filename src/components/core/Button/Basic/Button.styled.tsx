import styled from "styled-components";
import { Button } from "antd";
import { Props } from "./index";

const StyledButton = styled((props: Props) => <Button {...props} />)`
  border-radius: 100px !important;
  box-shadow: none !important;
  padding: ${({ type }) => type === "link" && 0};

  & .ant-wave {
    display: none;
  }

  ${(props) => {
    const { mode, type, theme } = props;
    const neutral = theme.colors.neutral;
    const primary = theme.colors.primary;

    switch (mode) {
      case "light":
        return `
          border-color: ${
            type === "default"
              ? primary["blue-6"]
              : type === "dashed"
              ? neutral["gray-5"]
              : "transparent"
          };
          background-color: ${
            type === "default" || type === "link"
              ? "transparent"
              : type === "dashed"
              ? neutral["gray-1"]
              : primary["blue-6"]
          };
          color:${
            type === "default" || type === "link"
              ? primary["blue-6"]
              : type === "dashed"
              ? neutral["gray-9"]
              : neutral["gray-1"]
          };
          
          &:hover {
            border-color: ${
              type === "default"
                ? primary["blue-6"]
                : type === "dashed"
                ? neutral["gray-5"]
                : "transparent"
            } !important;
            background-color: ${
              type === "default" || type === "dashed"
                ? primary["blue-1"]
                : type === "primary"
                ? primary["blue-5"]
                : "transparent"
            } !important;
            color: ${
              type === "default"
                ? primary["blue-6"]
                : type === "primary"
                ? neutral["gray-1"]
                : type === "dashed"
                ? neutral["gray-9"]
                : primary["blue-5"]
            } !important;
          }
          
          &:active {
            border-style: ${type === "dashed" && "solid"} !important;
            border-color: ${
              type === "default"
                ? primary["blue-7"]
                : type === "dashed"
                ? neutral["gray-6"]
                : "transparent"
            } !important;
            background-color: ${
              type === "default" || type === "link"
                ? "transparent"
                : type === "primary"
                ? primary["blue-7"]
                : neutral["gray-1"]
            } !important;
            color: ${type === "link" && primary["blue-7"]} !important;
          }
          
          &:disabled {
            border-style: ${type === "dashed" && "dashed"} !important;
            border-color: ${
              type === "primary" || type === "link"
                ? "transparent"
                : neutral["gray-5"]
            } !important;
            background-color: ${
              type === "primary" || type === "dashed"
                ? neutral["gray-2"]
                : "transparent"
            } !important;
            color: ${
              type === "primary" || type === "dashed"
                ? neutral["gray-6"]
                : neutral["gray-5"]
            } !important;
          }
        `;
      case "dark":
        return `
          border-color: ${
            type === "default"
              ? neutral["gray-1"]
              : type === "dashed"
              ? neutral["gray-8"]
              : ""
          } !important;
          background-color: ${
            type === "default" || type === "link"
              ? "transparent"
              : type === "dashed"
              ? neutral["gray-9"]
              : ""
          } !important;
          color:${
            type === "dashed" || type === "link"
              ? neutral["gray-4"]
              : neutral["gray-1"]
          } !important;
          
          &:hover {
            border-color: ${type === "dashed" && neutral["gray-5"]} !important;
          }
          
          &:active {
            border-style: ${type === "dashed" && "solid"} !important;
            border-color: ${type === "dashed" && neutral["gray-8"]} !important;
            background-color: ${
              type === "dashed" ? neutral["gray-9"] : ""
            } !important;
            color: ${type === "link" && neutral["gray-8"]} !important;
          }
          
          &:disabled {
            border-style: ${type === "dashed" && "dashed"} !important;
            border-color: ${
              type === "primary" || type === "link"
                ? "transparent"
                : type === "default"
                ? neutral["gray-10-04"]
                : neutral["gray-9"]
            } !important;
            background-color: ${
              type === "primary" || type === "dashed"
                ? neutral["gray-10-04"]
                : ""
            } !important;
            color: ${
              type === "default" || type === "link"
                ? neutral["gray-10-04"]
                : neutral["gray-9"]
            } !important;
          }
        `;
    }
  }};
`;

export default StyledButton;
