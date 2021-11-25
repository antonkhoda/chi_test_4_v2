const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js')
    },

    output: {
        path: path.resolve(__dirname, "./docs"),
        filename: "[name].bundle.js",
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "webpack Boilerplate",
            template: path.resolve(__dirname, "./src/index.html"),
            filename: "index.html",
            favicon: "./src/images/icons/favicon.png"
        }),
    ],

    module: {
        rules: [
            {
            test: /\.s[ac]ss$/i,
            use: ['style-loader', 'css-loader', 'sass-loader'],
          },
        {
            test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            type: 'asset/resource',
        },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
          }
        ],
      },
}