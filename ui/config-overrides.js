const webpack = require("./node_modules/webpack");

module.exports = function override(config, _env) {
  if (!config.plugins) {
    config.plugins = [];
  }
  config.plugins.push(
    new webpack.ContextReplacementPlugin(/\/axe-core\//, (data) => {
      delete data.dependencies[0].critical;
      return data;
    })
  );

  return config;
};
