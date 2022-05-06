const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
   entry: './client/main.js',
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: 'index_bundle.js'
   },
   mode: process.env.NODE_ENV,
   devServer: {
      port: 8080
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                   presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            }
         },
         {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(jpe?g|gif|png|svg)$/i,
            use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000
              }
            }
          ]
        }
      ]
   },
   plugins:[
      new HtmlWebpackPlugin({ 
          template: './index.html' 
        }),
        new NodePolyfillPlugin()
   ],
   resolve: {
      fallback: { 
      "path": require.resolve("path-browserify"),
       "fs" :false, 
      }
   }
}