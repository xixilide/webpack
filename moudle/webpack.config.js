var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
      // path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
  },
  module: {
  loaders: [
    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
  ]
},
  devServer: {
    publicPath: "/static/",
    stats: { colors: true },
    port: 8080,
    inline: true
  }
};
