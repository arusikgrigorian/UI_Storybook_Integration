import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/assets/style/global/globalStyles";
import { theme } from "./components/assets/style/global/theme";
import { options } from "./data";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App options={options} />
    </ThemeProvider>
  </React.StrictMode>
);
