var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: './index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: 'style-loader!css-loader'
            },
            {
                test: /\.(jpg|png)$/,
                loaders: 'url-loader?limit=8192&name=image/[name].[ext]'
            },
            // {
            //     // 阿里图标
            //     test: /\.(eot|svg|ttf|woff|woff2)\w*/,
            //     loader: 'url-loader?limit=1000000'
            // }
            {
                test: /\.(eot|svg|ttf|woff|woff2)\w*/,
                loader: 'file-loader?outputPath=font/'
            }
        ]
    }
}