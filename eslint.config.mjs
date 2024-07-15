import pluginJs from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: ["node_modules/**", "dist/**"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
    rules: {
      "no-unused-vars": "error",
      "no-unused-expressions": "error",
      "prefer-const": "error",
      "no-console": "warn",
      "no-undef": "error",
    },
  },
  { languageOptions: { globals: globals.browser } },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];