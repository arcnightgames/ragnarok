import type {Preview} from "@storybook/react";
import {ArcnightConfig} from "@arcnight/shared";
import {ConfigProvider} from "@containers/config";

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
  decorators: [
    (Story) => (
      <ConfigProvider config={config}>
        <Story />
      </ConfigProvider>
    ),
  ],
  parameters: {
    actions: {argTypesRegex: "^on[A-Z].*"},
  },
};

export default preview;
