import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Wrapper from "../Wrapper";
import SpaceComponent from "./index";
import { Button } from "antd";

export default {
  title: "Components/Space",
  component: SpaceComponent,
  arqTypes: {
    size: {
      description: `"large" | "middle" | "small"`,
      defaultValue: { summarv: `"middle"` },
      options: ["large", "middle", "small"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof SpaceComponent>;

const Template: ComponentStory<typeof SpaceComponent> = (args) => {
  return (
    <Wrapper mode={args.mode}>
      <SpaceComponent {...args}>
        <Button /> <Button /> <Button />
      </SpaceComponent>
    </Wrapper>
  );
};

export const Default = Template.bind({});

Default.args = {
  mode: "light",
  size: "large",
};
