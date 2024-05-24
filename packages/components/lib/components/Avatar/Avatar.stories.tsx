import {Meta} from "@storybook/react";

import Avatar from "./Avatar";

export default {
  component: Avatar,
  title: "components/Avatar",
} as Meta<typeof Avatar>;

export const Playground = ({...args}) => <Avatar {...args} />;

Playground.argTypes = {
  size: {
    options: ["small", "medium", "large"],
    control: {
      type: "select",
      defaultValue: "medium",
    },
  },
  src: {
    control: "text",
  },
  fallback: {
    control: "text",
  },
};
