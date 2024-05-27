import type {Preview} from "@storybook/react";
import {BrowserRouter as Router} from "react-router-dom";
import {Icons} from "@arcnight/components";

import "./index.scss";

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
      <Router>
        <Icons />
        <Story />
      </Router>
    ),
  ],
};

export default preview;
