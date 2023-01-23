import React from "react";
import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/components/assets/style/global/theme";
import { storybookTableRules } from "./rules";

export const parameters = {
  backgrounds: { disable: true },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const argTypes = {
  mode: storybookTableRules.hideDefaultDescription,
  state: storybookTableRules.hideDefaultDescription,
  type: storybookTableRules.hideDefaultDescription,
  size: storybookTableRules.hideDefaultDescription,
  htmlType: storybookTableRules.hideDefaultDescription,
  disabled: storybookTableRules.hideDefaultDescription,
  iconBefore: storybookTableRules.hideDefaultDescription,
  iconAfter: storybookTableRules.hideDefaultDescription,
  onClick: storybookTableRules.hideDefaultDescription,
};

addDecorator((Story) => (
  <ThemeProvider theme={theme}>
    <Story />
  </ThemeProvider>
));
