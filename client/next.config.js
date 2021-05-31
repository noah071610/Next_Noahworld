// const path = require("path");

// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });

// module.exports = {
//   sassOptions: {
//     includePaths: [path.join(__dirname, "styles")],
//   },
// };

// module.exports = withBundleAnalyzer({
//   compress: true,
//   webpack(config, { webpack }) {
//     const prod = process.env.NODE_ENV === "production";
//     return {
//       ...config,
//       mode: prod ? "production" : "development",
//       devtool: prod ? "hidden-source-map" : "eval",
//       plugins: [...config.plugins],
//     };
//   },
// });

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const webpack = require("webpack");

module.exports = withBundleAnalyzer({
  compress: true,
  optimization: {
    minimize: true,
  },
  webpack(config) {
    const prod = process.env.NODE_ENV === "production";
    const plugins = [...config.plugins];
    return {
      ...config,
      mode: prod ? "production" : "development",
      devtool: prod ? "hidden-source-map" : "eval",
      plugins: plugins,
    };
  },
});
