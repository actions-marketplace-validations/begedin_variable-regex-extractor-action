module.exports = {
  plugins: ['jest', '@typescript-eslint'],
  extends: ['plugin:github/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
    project: './tsconfig.json',
    createDefaultProgram: true,
  },
  ignorePatterns: [
    '.eslintrc.js',
    'lib'
  ],
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  rules: {
    quotes: ['error', 'single'],
    'prettier/prettier': [
      'error', 
      {
        printWidth: 80,
        tabWidth: 2,
        useTabs: false,
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
      }
    ]
  }
};
