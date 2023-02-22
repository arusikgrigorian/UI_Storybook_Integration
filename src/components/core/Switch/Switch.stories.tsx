import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Wrapper from "../Wrapper";
import Switch from "./index";

export default {
  title: "Components/Switch",
  component: Switch,
  argTypes: {
    mode: {
      description: `"light" | "dark"`,
      defaultValue: { summary: `"light"` },
      options: ["light", "dark"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => {
  return (
    <Wrapper mode={args.mode}>
      <Switch {...args} />
    </Wrapper>
  );
};
export const Default = Template.bind({});

Default.args = {
  mode: "dark",
  disabled: false,
};

Default.args = {
  mode: "light",
  disabled: false,
};
