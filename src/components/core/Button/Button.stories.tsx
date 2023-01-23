import { ArrowLeftOutlined, PlusOutlined } from "@ant-design/icons";
import Button from "./index";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Wrapper from "../Wrapper";
import { action } from "@storybook/addon-actions";

const icons = {
  IconFirst: <PlusOutlined />,
  IconSecond: <ArrowLeftOutlined />,
  Non: null,
};

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    size: {
      description: `"large"| "middle" | "small"`,
      defaultValue: { summary: `"middle"` },
      control: { type: "select" },
    },
    mode: {
      description: `"light" | "dark"`,
      defaultValue: { summary: `"light"` },
      control: { type: "select" },
    },
    type: {
      description: `"default" | "primary" | "dashed" | "link"`,
      defaultValue: { summary: `"default"` },
      control: { type: "select" },
    },
    htmlType: {
      description: `"button" | "submit" | "reset"`,
      defaultValue: { summary: `"button"` },
      control: { type: "select" },
    },
    disabled: {
      description: "boolean",
      defaultValue: { summary: false },
      option: { type: "select" },
    },
    iconBefore: {
      description: "ReactNode",
      defaultValue: { summary: "null" },
      options: Object.keys(icons),
      mapping: icons,
      control: { type: "select" },
    },
    children: {
      description: "ReactNode",
      defaultValue: { summary: "null" },
    },
    iconAfter: {
      description: "ReactNode",
      defaultValue: { summary: "null" },
      options: Object.keys(icons),
      mapping: icons,
      control: { type: "select" },
    },
    onClick: {
      description: `( ) => {}`,
      defaultValue: {
        summary: () => {},
      },
      control: false,
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  return (
    <Wrapper mode={args.mode}>
      <Button {...args} />
    </Wrapper>
  );
};

export const Default = Template.bind({});
export const Primary = Template.bind({});
export const Dashed = Template.bind({});
export const Link = Template.bind({});

Default.args = {
  size: "middle",
  mode: "light",
  type: "default",
  htmlType: "button",
  disabled: false,
  iconBefore: <PlusOutlined />,
  children: "Create New",
  iconAfter: <ArrowLeftOutlined />,
  onClick: action("onClick"),
};

Primary.args = {
  ...Default.args,
  type: "primary",
};

Dashed.args = {
  ...Default.args,
  type: "dashed",
};

Link.args = {
  ...Default.args,
  type: "link",
};
