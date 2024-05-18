import {
  pluginDeprecation,
  pluginEs,
  pluginImport,
  pluginMonorepo,
  pluginNoOnlyTests,
  pluginPerfectionist,
  pluginPromise,
} from "../plugins";
import {ConfigItem} from "../types";

export const core = (): ConfigItem[] => {
  return [
    {
      name: "arcnight:core",
      plugins: {
        perfectionist: pluginPerfectionist,
        import: pluginImport,
        monorepo: pluginMonorepo,
        "no-only-tests": pluginNoOnlyTests,
        deprecation: pluginDeprecation,
        promise: pluginPromise,
        es: pluginEs,
      },
      rules: {
        "accessor-pairs": "off",
        "block-scoped-var": "error",
        complexity: ["off", 20],
        "class-methods-use-this": ["off"],
        "default-case": ["error", {commentPattern: "^no default$"}],
        "default-case-last": "error",
        "default-param-last": "off",
        "dot-notation": ["error", {allowKeywords: true}],
        eqeqeq: ["error", "always", {null: "ignore"}],
        "grouped-accessor-pairs": "error",
        "guard-for-in": "error",
        "max-classes-per-file": ["error", 1],
        "no-alert": "warn",
        "no-caller": "error",
        "no-case-declarations": "error",
        "no-constructor-return": "error",
        "no-div-regex": "off",
        "no-else-return": ["error", {allowElseIf: false}],
        "no-empty-function": [
          "error",
          {
            allow: ["arrowFunctions", "functions", "methods"],
          },
        ],
        "no-empty-pattern": "error",
        "no-empty-static-block": "off",
        "no-eq-null": "off",
        "no-eval": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-label": "error",
        "no-fallthrough": "error",
        "no-global-assign": ["error", {exceptions: []}],
        "no-implicit-coercion": [
          "off",
          {
            boolean: false,
            number: true,
            string: true,
            allow: [],
          },
        ],
        "no-implicit-globals": "off",
        "no-implied-eval": "error",
        "no-invalid-this": "off",
        "no-iterator": "error",
        "no-labels": ["error", {allowLoop: false, allowSwitch: false}],
        "no-lone-blocks": "error",
        "no-loop-func": "error",
        "no-magic-numbers": [
          "off",
          {
            ignore: [],
            ignoreArrayIndexes: true,
            enforceConst: true,
            detectObjects: false,
          },
        ],
        "no-multi-str": "error",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-wrappers": "error",
        "no-nonoctal-decimal-escape": "error",
        "no-octal": "error",
        "no-octal-escape": "error",
        "no-proto": "error",
        "no-redeclare": "off",
        "no-restricted-properties": [
          "error",
          {
            object: "arguments",
            property: "callee",
            message: "arguments.callee is deprecated",
          },
          {
            object: "global",
            property: "isFinite",
            message: "Please use Number.isFinite instead",
          },
          {
            object: "self",
            property: "isFinite",
            message: "Please use Number.isFinite instead",
          },
          {
            object: "window",
            property: "isFinite",
            message: "Please use Number.isFinite instead",
          },
          {
            object: "global",
            property: "isNaN",
            message: "Please use Number.isNaN instead",
          },
          {
            object: "self",
            property: "isNaN",
            message: "Please use Number.isNaN instead",
          },
          {
            object: "window",
            property: "isNaN",
            message: "Please use Number.isNaN instead",
          },
          {
            property: "__defineGetter__",
            message: "Please use Object.defineProperty instead.",
          },
          {
            property: "__defineSetter__",
            message: "Please use Object.defineProperty instead.",
          },
          {
            object: "Math",
            property: "pow",
            message: "Use the exponentiation operator (]**) instead.",
          },
        ],
        "no-return-assign": ["error", "always"],
        "no-script-url": "error",
        "no-self-assign": [
          "error",
          {
            props: true,
          },
        ],
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-throw-literal": "error",
        "no-unmodified-loop-condition": "off",
        "no-unused-expressions": [
          "error",
          {
            allowShortCircuit: false,
            allowTernary: false,
            allowTaggedTemplates: false,
          },
        ],
        "no-unused-labels": "error",
        "no-useless-call": "off",
        "no-useless-catch": "error",
        "no-useless-concat": "error",
        "no-useless-escape": "error",
        "no-useless-return": "error",
        "no-warning-comments": [
          "off",
          {terms: ["todo", "fixme", "xxx"], location: "start"},
        ],
        "no-with": "error",
        "prefer-promise-reject-errors": ["error", {allowEmptyReject: true}],
        "prefer-named-capture-group": "off",
        "prefer-object-has-own": "off",
        "prefer-regex-literals": [
          "error",
          {
            disallowRedundantWrapping: true,
          },
        ],
        radix: "error",
        "require-await": "off",
        "require-unicode-regexp": "off",
        "vars-on-top": "error",
        "wrap-iife": ["error", "inside", {functionPrototypeMethods: false}],
        yoda: "error",
        "consistent-return": "off",
        curly: ["error", "all"],
        "no-await-in-loop": "off",
        "no-bitwise": "off",
        "no-console": "warn",
        "no-continue": "off",
        "no-nested-ternary": "warn",
        "no-param-reassign": "off",
        "no-plusplus": "off",
        "no-restricted-imports": ["error"],
        "no-restricted-syntax": ["error"],
        "no-void": [2, {allowAsStatement: true}],
        "deprecation/deprecation": "warn",
        "no-only-tests/no-only-tests": "error",
        "es/no-regexp-lookbehind-assertions": "error",
        "promise/no-return-wrap": "error",
        "promise/param-names": "error",
        "promise/catch-or-return": "error",
        "promise/no-native": "off",
        "promise/no-nesting": "warn",
        "promise/no-promise-in-callback": "warn",
        "promise/no-callback-in-promise": "warn",
        "promise/avoid-new": "warn",
        "promise/no-new-statics": "error",
        "promise/no-return-in-finally": "warn",
        "promise/valid-params": "warn",
        "import/default": "off",
        "import/export": 2,
        "import/named": "off",
        "import/namespace": "off",
        "import/no-extraneous-dependencies": "off",
        "import/no-mutable-exports": "off",
        "import/no-named-as-default": "off",
        "import/no-named-as-default-member": "off",
        "import/order": ["error", {groups: [["builtin", "external"]]}],
        "import/prefer-default-export": "off",
        "import/extensions": [
          "error",
          "ignorePackages",
          {
            "": "never",
            js: "never",
            mjs: "never",
            jsx: "never",
            ts: "never",
            tsx: "never",
          },
        ],
      },
    },
  ];
};
