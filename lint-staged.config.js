module.exports = {
  '**/*.ts?(x)': (filenames) => {
    const files = filenames.join(' ');

    return [
      `prettier --write ${files}`,
      `eslint --fix ${files}`,
      `tsc -p tsconfig.json --noEmit`,
      `jest --bail --findRelatedTests ${files}`,
    ];
  },
  '**/*.js?(x)': (filenames) => {
    const files = filenames.join(' ');

    return [`prettier --write ${files}`, `eslint --fix ${files}`, `jest --bail --findRelatedTests ${files}`];
  },
};
