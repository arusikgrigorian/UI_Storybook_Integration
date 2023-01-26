import React from "react";
import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/components/assets/style/global/theme";
import { storybookTableRules } from "./rules";

export const argTypes = {
  mode: storybookTableRules.hideDefaultDescription,
  state: storybookTableRules.hideDefaultDescription,
};

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

addDecorator((Story) => (
  <ThemeProvider theme={theme}>
    <Story />
  </ThemeProvider>
));
