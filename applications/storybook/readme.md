# Arcnight Design System Storybook 💜

This project is a storybook instance documenting Arcnight's design system in the scope of Web. It serves as both an isolated development environment for React Components as well as a source of centralized documentation all things design philosophy & technical documentation.

## Installation & Running

Run docs-only in development mode

```shell
yarn storybook
```

The start script defaults to running in docs-only mode (`--docs` flag), however another script called "storybook-raw" has been left (original start script) to run storybook in the original configuration. The storybook docs mention storybook being unable to keep a proper cache in docs-only mode, so the raw command can be used if you're experiencing performance issues while developing locally or just if you'd like to run storybook with a canvas view / for viewing canvas specific addons.

```shell
yarn storybook-raw
```
