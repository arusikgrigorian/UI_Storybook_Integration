import styled from "styled-components";
import { Props } from "./index";

const StyledWrapper = styled.div<Props>`
  display: flex;
  flex-direction: ${(props) => props.flex_direction || "row"};
  justify-content: ${(props) => props.justify_content || "center"};
  align-items: ${(props) => props.align_items || "center"};
  height: ${(props) => props.height || "100%"};
  width: ${(props) => props.width || "100wv"};
  border-width: ${(props) => props.border_width || ""};
  border-style: ${(props) => props.border_style || ""};
  border-color: ${(props) => props.border_color || ""};
  background-color: ${(props) =>
    !props.mode
      ? props.theme.colors.neutral["gray-1"]
      : props.mode === "light"
      ? props.theme.colors.neutral["gray-1"]
      : props.theme.colors.neutral["gray-9"]};
  padding: 100px;
`;
export default StyledWrapper;
