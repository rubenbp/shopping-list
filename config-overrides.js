const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
const { override, addWebpackPlugin } = require('customize-cra')
const argv = require('yargs').argv

module.exports = function overrideOriginal(config, env) {
  const extensions = []

  if (argv.analyze) {
    let bundleAnalyzerPlugin
    if (env === 'development') {
      bundleAnalyzerPlugin = new BundleAnalyzerPlugin({
        openAnalyzer: false,
      })
    } else {
      bundleAnalyzerPlugin = new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        defaultSizes: 'gzip',
        openAnalyzer: false,
      })
    }
    extensions.push(addWebpackPlugin(bundleAnalyzerPlugin))
  }

  return override(...extensions)(config, env)
}
