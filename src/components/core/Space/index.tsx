import StyledButton from "./Space.styled";
//import { Button } from "antd";

const SpaceComponent = (props: any) => {
  const { children } = props;
  return (
    <StyledButton>
      <div className="my-button-wraper">{children}</div>
    </StyledButton>
  );
};
export default SpaceComponent;
