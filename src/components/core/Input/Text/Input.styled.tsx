import styled from "styled-components";
import { Input } from "antd";
import { InputBlock } from "../../../assets/style/matching/InputBlock";
import getInputBorderColor from "../../../helpers/getInputBorderColor";
import { Props } from "./index";

const StyledInput = styled((props: Props) => <Input {...props} />)`
  ${InputBlock};

  input {
    margin: ${({ prefix, suffix }) =>
      prefix && !suffix
        ? "0 0 0 4px"
        : suffix && !prefix
        ? "0 4px 0 0"
        : prefix && suffix
        ? "0 4px"
        : 0};
  }

  * {
    border-color: transparent !important;
    border-radius: 8px;
    box-shadow: none !important;

    & .ant-input-group-addon {
      border: none;
      border-radius: 8px;
    }
  }

  &:hover {
    * {
      border-color: transparent !important;
    }
  }

  ${(props) => {
    const mode = props.mode;
    const disabled = props.disabled;
    const neutral = props.theme.colors.neutral;

    switch (mode) {
      case "light":
        return `
        svg {
          fill: ${
            disabled
              ? neutral["gray-5"]
              : getInputBorderColor(props, neutral["gray-6"])
          };
        }

        input {
          color: ${
            disabled ? `${neutral["gray-5"]} !important` : neutral["gray-9"]
          }
        }
      `;
      case "dark":
        return `
        svg {
          fill: ${
            disabled
              ? neutral["gray-9"]
              : getInputBorderColor(props, neutral["gray-8"])
          };
        }

        input {
          color: ${
            disabled ? `${neutral["gray-9"]} !important` : neutral["gray-6"]
          }
        }

        &:hover {
          svg {
            fill: ${
              disabled
                ? neutral["gray-9"]
                : getInputBorderColor(props, neutral["gray-7"])
            };
          }
        }
    `;
    }
  }};
`;
export default StyledInput;
