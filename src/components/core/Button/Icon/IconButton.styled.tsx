import styled from 'styled-components';
import {Button} from 'antd';
import {Props} from './index';

const StyledIconButton = styled((props: Props) => <Button {...props} />)`
  display: flex ;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-style: solid;

  & .ant-wave {
    display: none;
  }

  ${(props) => {
    const { mode, theme } = props;
    const neutral = theme.colors.neutral;

    switch (mode) {
      case "light":
        return `
          border-color: ${neutral['gray-4']};
          background-color: ${neutral['gray-1']} !important;
          
          &:hover {
            border-color: ${neutral['gray-5']} !important;
            
            svg {
              g > * {
                stroke: ${neutral['gray-9']};
              }
            }
          }
          
          &:active {
            border-color: ${neutral['gray-7']} !important;
          }
          
          &:disabled {
            border-color: ${neutral['gray-2']} !important;
            
            svg {
              g > * {
                stroke: ${neutral['gray-6']};
              }
            }
          }
        `;
      case "dark":
        return `
          border-color: ${neutral['gray-8']} !important;
          background-color: ${neutral['gray-10-04']} !important;
          
          &:hover {
            svg {
              g > * {
                stroke: ${neutral['gray-7']};
              }
            }
          }
          
          &:active {
            svg {
              g > * {
                stroke: ${neutral['gray-5']};
              }
            }
          }
          
          &:disabled {
            border-color: ${neutral['gray-9']} !important;
          
            svg {
              g > * {
                stroke: ${neutral['gray-9']};
              }
            }
          }
      `;
    }
  }};
`;

export default StyledIconButton;