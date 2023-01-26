import styled from "styled-components";
import { Select } from "antd";
import { Props } from "./index";
import { theme } from "../../assets/style/global/theme";

const StyledSelect = styled((props: Props) => (
  <Select
    dropdownStyle={{
      backgroundColor:
        props.current_mode === "light"
          ? theme.colors.neutral["gray-4"]
          : theme.colors.neutral["gray-10"],
    }}
    {...props}
  />
))`
  * {
    box-shadow: none !important;
  }

  ${(props) => {
    const mode = props.current_mode;
    const disabled = props.disabled;
    const neutral = props.theme.colors.neutral;

    switch (mode) {
      case "light":
        return `
          svg {
            fill: ${
              disabled ? neutral["gray-6"] : neutral["gray-7"]
            } !important;
          }

          * {
            background-color: ${
              disabled ? neutral["gray-4-1"] : neutral["gray-4"]
            } !important;
            
            color: ${
              disabled ? neutral["gray-6"] : neutral["gray-7"]
            } !important;
          
            &:hover {
              border-color: transparent !important;
            }
          }
      `;
      case "dark":
        return `
          svg {
            fill: ${
              disabled ? neutral["gray-9"] : neutral["gray-7"]
            } !important;
          }
          
          * {
            background-color: ${neutral["gray-10"]} !important;
            
            color: ${
              disabled ? neutral["gray-9"] : neutral["gray-7"]
            } !important;
          
            &:hover {
              border-color: transparent !important;
            }
          }
      `;
    }
  }};
`;

export default StyledSelect;
