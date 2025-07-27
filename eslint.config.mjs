import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import {defineConfig} from "eslint/config";

export default defineConfig([
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
            ...js.configs.recommended.rules,
            ...tseslint.configs.recommended[1].rules,
            ...pluginReact.configs.flat.recommended.rules,
            "react/react-in-jsx-scope": "off"
        }
    }
]);
