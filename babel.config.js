module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '~data': ['./src/data'],
            '~screens': ['./src/screens'],
            '~hooks': ['./src/hooks'],
            '~theme': ['./src/theme'],
          },
          extensions: ['.ts', '.tsx'],
        },
      ],
    ],
  };
};
