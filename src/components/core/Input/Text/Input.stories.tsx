import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import Wrapper from "../../Wrapper";
import Input from "./index";

const icons = {
  Icon: <ExclamationCircleOutlined />,
  Non: null,
};

export default {
  title: "Components/Input/Text",
  component: Input,
  argTypes: {
    size: {
      description: `"large" | "middle" | "small"`,
      defaultValue: { summary: `"middle"` },
      options: ["large", "middle", "small"],
      control: { type: "select" },
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
    withPrefixTooltip: {
      description: "boolean",
      defaultValue: { summary: false },
    },
    prefixTooltipTitle: {
      description: "string",
      defaultValue: { summary: "" },
    },
    prefix: {
      description: "ReactNode",
      defaultValue: { summary: "null" },
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: "select",
      },
    },
    placeholder: {
      description: "string",
      defaultValue: { summary: "" },
    },
    withSuffixTooltip: {
      description: "boolean",
      defaultValue: { summary: false },
    },
    suffixTooltipTitle: {
      description: "string",
      defaultValue: { summary: "" },
    },
    suffix: {
      description: "ReactNode",
      defaultValue: { summary: "null" },
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: "select",
      },
    },
    showTooltipArrow: {
      description: "boolean",
      defaultValue: { summary: true },
    },
    withAddonAfter: {
      description: "boolean",
      defaultValue: { summary: false },
    },
    options: {
      description: "Array <{ label: string, value: string }> ",
      defaultValue: { summary: "[]" },
    },
    addonAfterDefaultOption: {
      description: "string",
      defaultValue: { summary: `"Select Data"` },
    },
    onChange: {
      description: `( ) => void`,
      defaultValue: {
        summary: () => {},
      },
    },
    onOptionSelect: {
      description: `( ) => void`,
      defaultValue: {
        summary: () => {},
      },
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  return (
    <Wrapper mode={args.mode}>
      <Input {...args} />
    </Wrapper>
  );
};
export const Default = Template.bind({});
export const Warning = Template.bind({});
export const Error = Template.bind({});
export const Success = Template.bind({});
export const Dashed = Template.bind({});

Default.args = {
  size: "middle",
  mode: "light",
  state: "default",
  disabled: false,
  withPrefixTooltip: true,
  prefixTooltipTitle: "Prefix Tooltip Title",
  prefix: <ExclamationCircleOutlined />,
  placeholder: "Enter your data",
  withSuffixTooltip: true,
  suffixTooltipTitle: "Suffix Tooltip Title",
  suffix: <ExclamationCircleOutlined />,
  showTooltipArrow: true,
  withAddonAfter: true,
  options: [
    { label: "org", value: "org" },
    { label: "com", value: "com" },
  ],
  addonAfterDefaultOption: "org",
  onChange: action("onChange"),
  onOptionSelect: action("onSelect"),
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
