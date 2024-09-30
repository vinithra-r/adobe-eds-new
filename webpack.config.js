const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: [
    path.resolve(__dirname, 'scripts/wds.js'),
  ],
  output: {
    filename: 'bundle.js', // Output file name
    path: path.resolve(__dirname, 'build'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery', // Makes jQuery available globally
    }),
  ],
  resolve: {
    extensions: ['.js', '.css'],
  },
};
