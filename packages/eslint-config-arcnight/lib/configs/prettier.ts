import {pluginPrettier} from "../plugins";
import {ConfigItem} from "../types";

export const prettier = (): ConfigItem[] => {
  return [
    {
      name: "arcnight:prettier",
      plugins: {
        prettier: pluginPrettier,
      },
      rules: {
        "prettier/prettier": "error",
        "arrow-body-style": "off",
        "prefer-arrow-callback": "off",
      },
    },
  ];
};
