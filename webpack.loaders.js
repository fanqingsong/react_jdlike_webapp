module.exports = [
	{
		test: /\.jsx?$/,
		exclude: /(node_modules|bower_components)/,
		loaders: ['react-hot-loader', 'babel-loader'],
	},

	{
		test: /\.css$/,
		loader: 'style-loader!css-loader'
	},
	{
		test: /\.((ttf|eot|woff|svg)(\?t=[0-9]*))|(ttf|eot)$/,
		loader: 'url-loader?limit=1&name=fonts/[hash:8].[name].[ext]'
	},
	{
		test: /\.(woff|woff2)$/,
		loader: "url-loader?prefix=font/&limit=5000"
	},
	{
		test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
		loader: "url-loader?limit=10000&mimetype=image/svg+xml"
	},
	{
		test: /\.gif/,
		loader: "url-loader?limit=10000&mimetype=image/gif"
	},
	{
		test: /\.jpg/,
		loader: "url-loader?limit=10000&mimetype=image/jpg"
	},
	{
		test: /\.png/,
		loader: "url-loader?limit=10000&mimetype=image/png"
	}
];
