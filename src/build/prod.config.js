const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");
const WebpackMerge = require("webpack-merge")
const baseConfig = require("./base.config")
module.exports = WebpackMerge.merge(baseConfig, {
    plugins: [
        new HtmlWebpackPlugin({ template: "index.html" }),
        new UglifyjsWebpackPlugin()
    ]
})