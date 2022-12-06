import { Global, ThemeProvider } from "@emotion/react";
import theme from "@/src/styles/theme";
import { global } from "@/src/styles/global";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Global styles={global} />
      <Story />
    </ThemeProvider>
  ),
];
