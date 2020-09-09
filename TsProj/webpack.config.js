const path = require('path');
const webpack = require('webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const workSpaceDir = path.resolve(__dirname);

/** 忽略编辑的第三方库 */
const externals = {
	csharp: 'commonjs2 csharp',
	puerts: 'commonjs2 puerts',
};

const entries = {
	bundle: { input: 'src/GameMain.ts', output: 'bundle' }
}


module.exports = (env) => {
	if (!env) { env = { production: false, analyze: false}; }
	if (!env.entry) env.entry = 'bundle';
	console.log("Compile config:", env);
	return {
		entry: path.join(workSpaceDir, entries[env.entry].input),
		target: 'node',
		devServer:{
			port: 3030,
			open: true,
			historyApiFallback: true
		},
		output: {
			path: path.join(workSpaceDir, './output/'),
			filename: `${entries[env.entry].output}.js`
		},
		module: {
			rules: [
				{ test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
				{ test:/\.(md|txt|glsl)$/, use: "raw-loader" },
				{ test: /\.ya?ml$/, type: 'json', use: 'yaml-loader' },
			]
		},
		plugins: [
			env.analyze ? new BundleAnalyzerPlugin(): new webpack.DefinePlugin({}),
		],
		resolve: {
			extensions: [ '.tsx', '.ts', '.js', 'glsl', 'md', 'txt' ],
			plugins: [
				new TsconfigPathsPlugin({configFile: path.join(workSpaceDir, 'tsconfig.json')}),
			]
		},
		devtool: env.production ? "" : "inline-source-map",
		/*
		plugins: [
			new webpack.SourceMapDevToolPlugin({
				filename: `${entries[env.entry].output}.js.map`,
				publicPath: 'StreamingAssets/scripts/',
				fileContext: 'public'
			})
		],
		*/
		mode: env.production ? "production" : "development",
		externals
	};
};