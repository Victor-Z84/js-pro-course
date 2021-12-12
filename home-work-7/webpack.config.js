const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./app/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js"
    },
    // mode: "production",
    mode: "development",

    module: {
        rules: [
            {
              test: /\.(css)$/, 
              use: [ "style-loader", "css-loader" ] 
            },
            {
                test: /\.(cass|scss)$/, 
                use: [ "style-loader", "css-loader", "sass-loader" ] 
            },
            { 
                test: /\.(js)$/,
                exclude: /(node_modules|bower_components)/,
                use: "babel-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Home Work 7",
            template: "./app/index.html"
        }),
    ]
}