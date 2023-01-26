import StyledButton from "./Button.styled";

const Button = (props: any) => {
  const { children } = props;

  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
