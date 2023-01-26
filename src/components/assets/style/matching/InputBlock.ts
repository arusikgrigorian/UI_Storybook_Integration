import { css } from "styled-components";
import getInputBorderColor from "../../../helpers/getInputBorderColor";
import { Props } from "../../../core/Input/Text";

export const InputBlock = css<Props>`
  outline: none;
  border-width: 1px;
  border-style: ${({ state }) => (state === "dashed" ? "dashed" : "solid")};
  border-radius: 8px;
  box-shadow: none;

  &:focus {
    border-color: transparent;
    box-shadow: none;
  }

  ${(props) => {
    const mode = props.mode;
    const disabled = props.disabled;
    const neutral = props.theme.colors.neutral;

    switch (mode) {
      case "light":
        return `
          border-color: ${
            disabled
              ? neutral["gray-4"]
              : getInputBorderColor(props, neutral["gray-2"], neutral["gray-7"])
          } !important;
          background-color: ${
            disabled ? neutral["gray-4"] : neutral["gray-2"]
          } !important;
    
          * {
            background-color: ${
              disabled ? neutral["gray-4"] : neutral["gray-2"]
            } !important;
          }
          
          ::placeholder, input::-webkit-input-placeholder {
            color : ${disabled ? neutral["gray-5"] : neutral["gray-6"]}
          }
          
          &:hover {
            border-color: ${
              disabled ? neutral["gray-4"] : neutral["gray-7"]
            } !important;
          }
      `;
      case "dark":
        return `
          border-color: ${
            disabled
              ? neutral["gray-10-00"]
              : getInputBorderColor(
                  props,
                  neutral["gray-10-00"],
                  neutral["gray-7"]
                )
          } !important;
          background-color: ${neutral["gray-10-04"]} !important;
    
          * {
            background-color: ${neutral["gray-10-00"]} !important;
          }
          
          ::placeholder, input::-webkit-input-placeholder {
            color : ${disabled ? neutral["gray-9"] : neutral["gray-8"]}
          }
          
          &:hover {
            border-color: ${
              disabled ? neutral["gray-10-00"] : neutral["gray-8"]
            } !important;
          }
      `;
    }
  }}
`;
