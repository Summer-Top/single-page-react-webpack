var outputPath = __dirname + (process.env.ENV === 'develop' ? '/src' : '/build');

module.exports = {
	entry: "./src/app/js/App.js",
  output: {
      path: outputPath,
      filename: "app/bundle.js"
  },
  module: {
      loaders: [
        { test: /\.js$/, loader: "jsx-loader?harmony" },
        { test: /\.css$/, loader: 'style-loader!css-loader' },
        { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
        { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' }
      ]
  },
  externals: {
    "react": "React"
  }
};