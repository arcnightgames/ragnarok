import type {Decorator, Parameters, Preview} from "@storybook/react";
import {ArcnightConfig} from "@arcnight/shared";
import {ConfigProvider} from "@containers/config";
import {Icons} from "@components/Icon";

import "./index.scss";

const config: ArcnightConfig = {
  API_URL: "",
  APP_NAME: "@arcnight/account",
  APP_VERSION: "",
  BRANCH: "",
  CLIENT_SECRET: "",
  COMMIT: "",
  DATE_VERSION: "",
  LOCALES: {},
  VERSION_PATH: "",
};

const preview: Preview = {
  parameters: {
    viewMode: "docs",
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {expanded: true},
    previewTabs: {
      canvas: {hidden: true},
    },
  },
  decorators: [
    (Story) => (
      <ConfigProvider config={config}>
        <Icons />
        <Story />
      </ConfigProvider>
    ),
  ],
};

export default preview;
