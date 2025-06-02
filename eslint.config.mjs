import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: {
    rules: {}, // বা তুমি যেকোনো default rule চাইলে এখানে দিতে পারো
  },
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'eslint:recommended'
  ),
  {
    languageOptions: {
      globals: {
        React: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': [1, { args: 'after-used', argsIgnorePattern: '^_' }],
    },
  },
];

export default eslintConfig;
