import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import pluginReact from "eslint-plugin-react";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import pluginImport from "eslint-plugin-import";
import airbnbBase from "eslint-config-airbnb-base";
import airbnbHooks from "eslint-config-airbnb/rules/react-hooks";
import airbnb from "eslint-config-airbnb/rules/react";

export default [
  { languageOptions: { globals: { ...globals.browser, module: "readonly" } } }, // CommonJS 구문 허용
  pluginJs.configs.recommended,
  {
    plugins: {
      '@typescript-eslint': tseslint,
      react: pluginReact,
      'jsx-a11y': pluginJsxA11y,
      'import': pluginImport,
    },
    files: ['*.ts', '*.tsx'],
    languageOptions: {
      parser: tsParser,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {},
      },
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...airbnbBase.rules,
      ...airbnb.rules,
      ...airbnbHooks.rules,
      'react/jsx-filename-extension': [1, { 'extensions': ['.tsx'] }],
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          'ts': 'never',
          'tsx': 'never',
        },
      ],
      'react/react-in-jsx-scope': 'off', // React 17+ JSX transform
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },
];