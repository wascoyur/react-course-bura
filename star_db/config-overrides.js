const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function override(config, env) {
    //do stuff with the webpack config...
        module.exports = {
            mode = "production",
            entry: {
                index: './src/index.js'
            }
            output: {
                filename: '[name].[contenthash:2].js',
                path: path.resolve(__dirname, 'dist'),
            },
            
            module: {
                rules: [
                    test:/\.css/i,
                    use: ["style-loader", "css-loader"]
                ]
            }
        }
    return config;
}