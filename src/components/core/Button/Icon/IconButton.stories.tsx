import IconButton from './index';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Wrapper from '../../Wrapper';
import SortIcon from '../../Icons/SortIcon';

const icons = {
  Icon: <SortIcon />,
  Non: null,
};

export default {
  title: 'Components/Button/Icon',
  component: IconButton,
  argTypes: {
    mode: {
      description: `"light" | "dark"`,
      defaultValue: { summary: `"light"` },
      options: ["light", "dark"],
      control: { type: "select" },
    },
    disabled: {
      description: "boolean",
      defaultValue: { summary: false },
    },
    icon: {
      description: "ReactNode",
      defaultValue: { summary: "null" },
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: "select",
      },
    },
    onClick: {
      description: `( ) => void`,
      defaultValue: {
        summary: () => {},
      },
      control: false,
    },
  }
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => {
  return (
    <Wrapper mode={args.mode}>
      <IconButton {...args}/>
    </Wrapper>
  )
};

export const Default = Template.bind({});

Default.args = {
  mode: 'light',
  disabled: false,
  icon: <SortIcon />,
  onClick: action('onClick')
};

