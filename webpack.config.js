const path = require('path');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "./build/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx$|\.js$/,
        exclude: /(node_modules)/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        }
      }
    ]
  }
};