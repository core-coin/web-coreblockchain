const CopyPlugin = require("copy-webpack-plugin");
const { getBabelLoader } = require("customize-cra");


module.exports = function override (config, env) {
  const babelLoader = getBabelLoader(config, true);
  // devtool: 'cheap-module-source-map'
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
  config.module.rules.map(rule => {
    if (typeof rule.test !== 'undefined' || typeof rule.oneOf === 'undefined') {
      return rule
    }

    rule.oneOf.unshift(
      {
          test: /\.mdx$/,
          use: [
            {
              loader: babelLoader.loader,
              options: babelLoader.options
            },
            {
              loader: '@mdx-js/loader',
              /** @type {import('@mdx-js/loader').Options} */
              // options: {providerImportSource: '@mdx-js/react'}
            }
          ]
        }
    );

    return rule
  });
  babelLoader.options.presets.push("@babel/preset-react")
  return config;
}


