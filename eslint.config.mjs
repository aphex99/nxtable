import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import {defineConfig} from "eslint/config";
import {FlatCompat} from "@eslint/eslintrc";

const compat = new FlatCompat({
    baseDirectory: import.meta.dirname,
    recommendedConfig: js.configs.recommended,
});

export default defineConfig([
    ...compat.config({
        extends: ['eslint:recommended', 'next'],
    }),
    {
        ignores: ["node_modules/**", ".next/**"],
    },
    {
        files: ["**/*.{js,ts,jsx,tsx}"],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
                ecmaFeatures: {jsx: true},
            },
            globals: {...globals.browser, ...globals.node},
        },
        plugins: {
            js, react: pluginReact,
        },
        settings: {
            react: {
                version: "detect"
            }
        },
        rules: {
            "react/react-in-jsx-scope": "off"
        }
    }
]);
