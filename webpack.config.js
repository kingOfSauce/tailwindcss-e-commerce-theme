const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/i,
        include: path.resolve(__dirname, 'src'),
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                indentWidth: 4,
                includePaths: [path.resolve(__dirname, 'src/**/*')],
              },
            },
          },
        ],
      },
      {
        test: /\.html$/i,
        include: path.resolve(__dirname, 'src'),
        use: 'raw-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: './src/layouts/index.html' }),
    new HtmlWebpackPlugin({
      filename: 'ui.html',
      template: './src/layouts/ui.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'sections.html',
      template: './src/layouts/sections.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'main.html',
      template: './src/layouts/main.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'stock.html',
      template: './src/layouts/stock.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'category.html',
      template: './src/layouts/category.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'products.html',
      template: './src/layouts/products.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'product-view.html',
      template: './src/layouts/product-view.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: './src/layouts/about.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'promo.html',
      template: './src/layouts/promo.html',
    }),
    new HtmlWebpackPlugin({
      filename: '404.html',
      template: './src/layouts/404.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'search.html',
      template: './src/layouts/search.html',
    }),
    new CopyPlugin({
      patterns: [{ from: 'src/img', to: path.resolve(__dirname, 'dist/img') }],
    }),
  ],
  devServer: {
    port: 3000,
    open: true,
    watchFiles: ['src/**/*'],
  },
};
