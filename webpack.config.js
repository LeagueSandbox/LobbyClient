var webpack = require("webpack");
var publicPath = process.env.LOBBYCLIENT_BUILD ? "../built/" : "http://localhost:8080/built/";

module.exports = {
	module: {
		loaders: [
			// Raw HTML
			{ test: /\.html$/, loader: 'raw-loader' },

			// Javascript.
			{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: ['es2015'] } },

            // TypeScript
            { test: /\.ts$/, loader: 'ts-loader?silent=true' },

			// CSS, Less
			{ test: /\.css$/, loader: 'style-loader!css-loader' },
			{ test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },

			// Fonts.
			{ test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },

            // Images, SVG.
            { test: /\.(png)|(jpg)$/, loader: "url-loader?limit=10000" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
		],
        noParse: ['ws']
	},

	// Write to src/built as bundle.js
	output: {
        path: './src/built',
        filename: 'bundle.js',
        publicPath: publicPath
    },

    // Enable hot module replacement
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        require('webpack-fail-plugin')
    ],

    // Target electron so we can use native modules.
    target: 'electron',

    devtool: 'cheap-source-map',
    entry: [
        'webpack/hot/only-dev-server',
        './src/ui/main.ts'
    ],

    externals: ['ws']
};