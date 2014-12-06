var bundlePath = __dirname + (process.env.ENV === 'prod' ? '/build' : '/src'),
    webpack = require("webpack");

module.exports = {
	entry: {
    bundle: "./src/app/js/App.js",
    mapBundle: "./src/app/pages/map/MapPage.js",
    homeBundle: "./src/app/pages/home/HomePage.js",
    aboutBundle: "./src/app/pages/about/AboutPage.js"
  },

  output: {
    path: bundlePath + '/app/bundles/',
    filename: "[name].js"
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
  },
  resolve: {
    alias: {
      'js': __dirname + '/src/app/js',
      'styl': __dirname + '/src/app/css',
      'utils': __dirname + '/src/app/js/utils',
      'leaflet': __dirname + '/src/app/libs/leaflet/leaflet.js',
      'leaflet-css': __dirname + '/src/app/libs/leaflet/leaflet.css'
    },
    extensions: ['', '.js', '.styl'],
    plugins: [
      new webpack.optimize.CommonsChunkPlugin(bundlePath + "/app/bundles/common.js")
    ]
  }
};