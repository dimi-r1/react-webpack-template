const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
	mode: "development",
	devtool: "cheap-module-source-map",
	devServer: {
		hot: true,
		open: true,
	},
	plugins: [
		// React hot module reload that preserves the component state.
		new ReactRefreshWebpackPlugin(),
	],
};
