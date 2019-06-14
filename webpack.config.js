const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin"); // 合并CSS的插件

const config = {
    entry: './main.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader',
                    fallback: 'style-loader'
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("main.css"),  // 合并CSS到main.css中
    ]
};

module.exports = config;