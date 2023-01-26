import styled from "styled-components";
import { InputBlock } from "../../assets/style/matching/InputBlock";
import { Input } from "antd";
import { Props } from "./index";

const { TextArea } = Input;

const StyledTextarea = styled((props: Props) => <TextArea {...props} />)`
  ${InputBlock};

  ${(props) => {
    const mode = props.mode;
    const disabled = props.disabled;
    const neutral = props.theme.colors.neutral;

    switch (mode) {
      case "light":
        return `
         color: ${disabled ? `${neutral["gray-5"]} !important` : neutral["gray-9"]};
       `;
      case "dark":
        return `
           color: ${disabled ? `${neutral["gray-9"]} !important` : neutral["gray-6"]};
       `;
    }
  }};
`;

export default StyledTextarea;
