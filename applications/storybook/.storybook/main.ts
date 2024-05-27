import type {StorybookConfig} from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.tsx",
    "../../../packages/components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-storysource",
    "@storybook/addon-essentials",
  ],
  staticDirs: ["../src/assets", "../src/assets/favicons"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core: {
    builder: "@storybook/builder-vite",
    disableTelemetry: true,
    disableWhatsNewNotifications: true,
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
  viteFinal: (config) => {
    return {
      ...config,
      assetsInclude: ["**/*.md"],
    };
  },
};

export default config;
