var debug   = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path    = require('path');

module.exports = {
  context: path.join(__dirname, "src"),
  entry: "./js/client.js",
  mode: "development",
  module: {
    rules: [{
      test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: [
              'react-html-attrs',
              ['@babel/plugin-proposal-class-properties', { 'loose': true }],
            ],
          }
        }]
      }]
    },
    output: {
      path: __dirname + "/src/",
      filename: "client.min.js",
      publicPath: '/'
    },
    devServer: {
      contentBase: path.join(__dirname, 'src')
    },
    plugins: debug ? [] : [
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ]
};
