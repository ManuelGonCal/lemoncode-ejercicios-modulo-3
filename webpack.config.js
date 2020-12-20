const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/', './src/styles.css'],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html', //nombre en dist
      template: 'src/index.html', //nombre en src
      hash: true,
    }),
  ],
};
