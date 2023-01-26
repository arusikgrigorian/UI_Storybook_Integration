import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Wrapper from "../Wrapper";
import Textarea from "./index";

export default {
  title: "Components/Textarea",
  component: Textarea,
  argTypes: {
    autoSize: {
      description: `"boolean" | "object"`,
      defaultValue: {
        summary: `{ minRows: 4, maxRows: 6 }`,
      },
    },
    mode: {
      description: `"light" | "dark"`,
      defaultValue: { summary: `"light"` },
      options: ["light", "dark"],
      control: { type: "select" },
    },
    state: {
      description: `"default" | "warning" | "error" | "success" | "dashed"`,
      defaultValue: { summary: `"default"` },
      options: ["default", "warning", "error", "success", "dashed"],
      control: { type: "select" },
    },
    disabled: {
      description: "boolean",
      defaultValue: { summary: false },
    },
    placeholder: {
      description: "string",
      defaultValue: { summary: "" },
    },
    onChange: {
      description: `( ) => void`,
      defaultValue: { summary: () => {} },
    },
  },
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => {
  return (
    <Wrapper mode={args.mode}>
      <Textarea {...args} />
    </Wrapper>
  );
};
export const Default = Template.bind({});
export const Warning = Template.bind({});
export const Error = Template.bind({});
export const Success = Template.bind({});
export const Dashed = Template.bind({});

Default.args = {
  autoSize: { minRows: 4, maxRows: 6 },
  mode: "light",
  state: "default",
  disabled: false,
  placeholder: "Enter your data",
  onChange: action("TextareaChangeEvent"),
};

Warning.args = {
  ...Default.args,
  state: "warning",
};

Error.args = {
  ...Default.args,
  state: "error",
};

Success.args = {
  ...Default.args,
  state: "success",
};

Dashed.args = {
  ...Default.args,
  state: "dashed",
};
