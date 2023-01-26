import React from "react";
import { TextAreaProps } from "antd/lib/input";
import StyledTextarea from "./Textarea.styled";
import { EventsProps, ModeProps, StateProps, TextlikeComponentProps } from "../../types";

export type Props = TextAreaProps & TextlikeComponentProps & StateProps & ModeProps & EventsProps;

const Textarea = (props: Props) => {
  const {
    autoSize = { minRows: 4, maxRows: 6 },
    mode = "light",
    state = "default",
    disabled = false,
    placeholder = "",
    onChange = () => {},
  } = props;

  return (
    <StyledTextarea
      autoSize={autoSize}
      mode={mode}
      state={state}
      disabled={disabled}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Textarea;
