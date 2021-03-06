const path = require('path');

module.exports = {
  entry: {
    home: './nnido/frontend/src/home.js',
  },
  output: {
    path: path.resolve(__dirname, 'nnido/frontend/static/frontend'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
