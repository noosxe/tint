import type { Preview } from "@storybook/react";
import dark from "./dark-theme";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    darkMode: {
      dark,
    },
  },
};

export default preview;
