module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  // extends: [
  //   'prettier',
  // ],
  plugins: ['react', 'react-hooks'],
  env: {
    browser: true,
  },
  // rules: {
  // },
  settings: {
    // 'import/resolver': {
    //   alias: {
    //     map: [['@', './src']],
    //     extensions: ['.js', '.jsx', '.ts', '.tsx'],
    //   },
    //   typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    //   node: {
    //     extensions: ['.js', '.jsx', '.ts', '.tsx'],
    //   },
    // },
  },
};
