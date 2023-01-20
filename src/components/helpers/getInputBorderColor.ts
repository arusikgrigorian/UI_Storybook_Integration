import {StyledProps} from 'styled-components';
import {ModeProps, StateProps} from '../types';

export type Props = ModeProps & StateProps;
const getInputBorderColor = (
  props:StyledProps<Props>, defaultColor: string, dashedColor: string = defaultColor) => {
  const {state, theme} = props;
  let color;

  switch (state) {
    case 'error':
      color = theme.colors.special.red;
      break;
    case 'warning':
      color = theme.colors.special.orange;
      break;
    case 'success':
      color = theme.colors.special.green;
      break;
    case 'dashed':
      color = dashedColor;
      break;
    case 'default':
      color = defaultColor;
  }
  return color;
};
export default getInputBorderColor;