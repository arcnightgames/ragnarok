# Arcnight ESLint config

Modern ESLint config for a more civilized age.

## How to use

Add the following to the `package.json` dev dependencies.

```json
  "@arcnight/eslint-config-arcnight": "workspace:packages/eslint-config-arcnight",
```

Then, use the following `eslint.config.js` config.

```js
  import arcnight from "@arcnight/eslint-config-arcnight";

  export default arcnight({
    /**
     * Enable React support.
     *
     * @default auto-detect based on the dependencies
     */
    react: true,

    /**
     * Enable TypeScript support.
     *
     * Passing an object to enable TypeScript Language Server support.
     *
     * @default auto-detect based on the dependencies
     */
    typescript: true
  });
```
