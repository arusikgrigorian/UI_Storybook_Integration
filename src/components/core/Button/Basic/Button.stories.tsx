import { ArrowLeftOutlined, PlusOutlined } from "@ant-design/icons";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Wrapper from "../../Wrapper";
import Button from "./index";

const icons = {
  IconFirst: <PlusOutlined />,
  IconSecond: <ArrowLeftOutlined />,
  Non: null,
};

const labels = { Label: "Create New", Non: null };

export default {
  title: "Components/Button/Basic",
  component: Button,
  argTypes: {
    size: {
      description: `"large" | "middle" | "small"`,
      defaultValue: { summary: `"middle"` },
      options: ["large", "middle", "small"],
      control: { type: "select" },
    },
    shape: {
      description: `"default" | "circle" | "round"`,
      defaultValue: { summary: `"default"` },
      options: ["default", "circle", "round"],
      control: { type: "select" },
    },
    mode: {
      description: `"light" | "dark"`,
      defaultValue: { summary: `"light"` },
      options: ["light", "dark"],
      control: { type: "select" },
    },
    type: {
      description: `"default" | "primary" | "dashed" | "link"`,
      defaultValue: { summary: `"default"` },
      options: ["default", "primary", "dashed", "link"],
      control: { type: "select" },
    },
    htmlType: {
      description: `"button" | "submit" | "reset"`,
      defaultValue: { summary: `"button"` },
      options: ["button", "submit", "reset"],
      control: { type: "select" },
    },
    disabled: {
      description: "boolean",
      defaultValue: { summary: false },
    },
    iconBefore: {
      description: "ReactNode",
      defaultValue: { summary: "null" },
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: "select",
      },
    },
    children: {
      description: "ReactNode",
      defaultValue: { summary: "null" },
      options: Object.keys(labels),
      mapping: labels,
      control: {
        type: "select",
      },
    },
    iconAfter: {
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
  shape: "default",
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
