const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const pkg = require("./package");

const projectRoot = __dirname;

module.exports = (env, argv) => (
    {
        devtool: argv.mode === "production" ? "source-map" : "eval-source-map",
        entry: path.resolve(projectRoot, "./src/index.jsx"),
        devServer: {
            host: "0.0.0.0",
            overlay: true,
        },
        output: {
            path: path.join(projectRoot, "dist"),
            filename: "[name].[contenthash].js",
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin(
                {
                    title: pkg.description,
                    hash: true,
                    template: "./src/index.pug",
                    minify: {
                        collapseWhitespace: true,
                    },
                },
            ),
        ],
        resolve: {
            extensions: [".js", ".jsx"],
        },
        module: {
            rules: [
                {
                    exclude: /node_modules/,
                    test: /\.(js|jsx)$/,
                    loader: "babel-loader",
                },
                {
                    test: /\.css$/,
                    loader: "raw-loader",
                },
                {
                    test: /\.pug$/,
                    loader: "pug-loader",
                },
            ],
        },
    }
);
