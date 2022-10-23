module.exports = {
  semi: true,
  trailingComma: 'none',
  singleQuote: true,
  useTabs: false,
  printWidth: 100,
  tabWidth: 2,
  arrowParens: 'avoid',
  bracketSpacing: true,
  quoteProps: 'as-needed',
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json'
      }
    }
  ]
};
