const CopyPlugin = require("copy-webpack-plugin");

module.exports = function override(config, env) {
  devtool: 'cheap-module-source-map'
  if (!config.plugins) {
    config.plugins = [];
  }
  config.plugins.push(
    new CopyPlugin({
      patterns: [
        { from: "src/images", to: "static/media/tabs" },
      ],
    }),
  );
  return config;
}