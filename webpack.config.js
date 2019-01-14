var HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
  entry: {
    main: './src/index.js'
  },

  module: {
    rules: [{
        test: /\.css$/,
        use: 'css-loader'
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": ["@babel/env", "@babel/react"]
          }
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({template:'./public/index.html'})]





};
