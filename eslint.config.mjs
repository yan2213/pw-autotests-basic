// @ts-check

import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import playwright from 'eslint-plugin-playwright'

export default defineConfig(
  js.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ["eslint.config.mjs"],
        },
      },
      globals: { ...globals.browser, ...globals.node }
    },
  },
{
    rules: {
      '@typescript-eslint/no-explicit-any': 'error' ,
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-unsafe-member-access': 'warn'
    }
},
{
   ignores: ["playwright-report/**"]
},
{
  files: ['tests/**'],
    extends: [playwright.configs['flat/recommended']],
    rules: {
      // Customize Playwright rules
      // ...
    },
}
);