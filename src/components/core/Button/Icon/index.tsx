import StyledIconButton from './IconButton.styled';
import {ButtonType } from '../../../types';

export type Props = ButtonType;
const IconButton = (props: Props) => {
  const {mode = 'light', disabled = false, icon = null, onClick = () => {} } = props;

  return <StyledIconButton mode={mode} disabled={disabled} icon={icon} onClick={onClick}/>
};

export default IconButton;
