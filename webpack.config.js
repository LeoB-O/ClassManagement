const path = require("path");

// 合并CSS的插件 已经废弃 换成下面的mini-css-extract-plugin
// const ExtractTextPlugin = require("extract-text-webpack-plugin"); 

const MiniCssExtractPlugin = require("mini-css-extract-plugin");  // 合并CSS的插件
const VueLoaderPlugin = require("vue-loader/lib/plugin");

const config = {
    entry: './main.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,  // 解析.vue文件
                use: ['vue-loader']
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                          // you can specify a publicPath here
                          // by default it uses publicPath in webpackOptions.output
                          publicPath: '../',
                          hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    'css-loader'
                ]
                // 已废弃
                // use: ExtractTextPlugin.extract({
                //     use: 'css-loader',
                //     fallback: 'style-loader'
                // })
            }
        ]
    },
    plugins: [
        // （已废弃） 合并CSS到main.css中
        // new ExtractTextPlugin("main.css"),
        new MiniCssExtractPlugin(), // 合并CSS
        new VueLoaderPlugin(),  // 将其他规则如.js .css复制并应用到.vue文件中对应的块 
    ]
};

module.exports = config;