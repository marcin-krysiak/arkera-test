module.exports = (config, env) => {
  config.module.rules[2].oneOf = [
    {
      test: /\.csv$/,
      loader: 'csv-loader',
      options: {
        header: true,
        skipEmptyLines: true,
      },
    },
    ...config.module.rules[2].oneOf,
  ];
  return config;
};
